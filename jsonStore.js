'use strict';

const restify = require('restify');
const errors  = require('restify-errors');
const fs      = require('fs-extra');
const path    = require('path');
const extend  = require('extend');
const debug   = require('debug')('JSON Store');

const store = restify.createServer();

store.use(restify.plugins.jsonBodyParser());

store.use(function (req,res,next) {
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'POST');
  res.header("Access-Control-Allow-Headers", req.header("Access-Control-Request-Headers"));
  // res.json(200);
  return next();
});


const dataRoot = path.join('mirage', 'fixtures');
fs.ensureDirSync(dataRoot);

store.post('/:model(people|photos|tags)', (req, res, next) => {
  const model    = req.params.model;
  const modelFile = path.join(dataRoot, `${model}.js`);

  debug(`Writing to ${model}`);

  let body     = req.body;
  // let body     = JSON.parse(req.body);
  // console.log(body);
  // if (model === 'people') {
  //   body = body.map(i => i)
  // } else if (model === 'tags') {
  //   body = body.map(i => i)
  // } else if (model === 'photos') {
  //   body = body.map(i => i)
  // }

  // return fs.writeFile(modelFile, 'export default ' + JSON.stringify(body))
  return fs.writeFile(modelFile, `export default ${body};`)
    .then(_ => res.json(200, {}))
    .catch(err => next(err))
    ;
});

const port = process.env.PORT || 3000;
store.listen(port, function (){
  debug(`Listening on port ${port}`);
});
