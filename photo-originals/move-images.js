'use strict';

const {copy, writeJSON, ensureDirSync, readJsonSync, readFileSync} = require('fs-extra');
const {join, normalize, basename}                       = require('path');

const photosRoot = __dirname;
const publicFiles = normalize(join(__dirname, '..', 'public'));
const outputRoot = join(publicFiles, 'images', 'korea');

const pad      = (num = 0, length = 3, char = '0') => String.prototype.padStart.call(num.toFixed(0), length, char);
const photoDir = (num = null) => 'People' + (num !== null ? pad(num) : '') + '.XSM';
const photoLoc = (dir = null, num = 1) => join(photoDir(dir), pad(num, 8) + '.jpg');
const outputLoc = (hash) => join(outputRoot, hash + '.jpg');

const hash         = readJsonSync(join(photosRoot, 'hash-map.json'));
const relationsRaw = readFileSync(join(photosRoot, 'image-relations.txt')).toString();

ensureDirSync(outputRoot);

const relations = relationsRaw
  .split(/\n/g)                                                   // by line
  .filter(r => r.length)                                          // remove empty rows
  .map(r => r.match(/^([\d_]+)\s([\d_]+)\s([\d_]+)\s([\d_]+)$/))  // separate into numbers
  .map(r => r.slice(1, 5).map(c => c === '_' ? null : +c))         // keep 4 needed values and change to null/digits
  .map(r => {
    let out = {
      front: photoLoc(r[0], r[1]),
      frontHash: null,
      frontOutput: null,
      frontFile: null,

      back:  photoLoc(r[2], r[3]),
      backHash: null,
      backOutput: null,
      backFile: null,
    };

    if (hash[out.front]) {
      out.frontHash = hash[out.front];
      out.frontOutput = outputLoc(out.frontHash);
      out.frontFile = basename(out.frontOutput);
    } else {
      throw new Error(`No hash found for front image ${out.front}`);
    }
    if (hash[out.back]) {
      out.backHash = hash[out.back];
      out.backOutput = outputLoc(out.backHash);
      out.backFile = basename(out.backOutput);
    } else {
      throw new Error(`No hash found for front image ${out.back}`);
    }

    return out;
  })
;


const relProms = relations.map(photo => {
  return Promise.all([
    copy(photo.front, photo.frontOutput, {overwrite: true}),
    copy(photo.back, photo.backOutput, {overwrite: true})
  ]).then(_ => photo);
});

Promise.all(relProms)
  .then(photos => photos.map(({frontHash, backHash}) => ({front: frontHash, back: backHash})))
  .then(photos => writeJSON(join(publicFiles, 'photo-relations.json'), photos))

  .then(_ => {
    console.log('Done!');
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
;


// console.log(relations);
