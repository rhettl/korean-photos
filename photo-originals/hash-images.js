'use strict';

const md5  = require('md5-file/promise');
const fs   = require('fs-extra');
const {join} = require('path');

const photosRoot = __dirname;

fs.readdir(photosRoot)
  .then(files => files.filter(f => /\.xsm$/i.test(f))) // photo folders only
  .then(files => {
    files = files.map(fParent => {
      return fs.readdir(join(photosRoot, fParent))  // read the given directories
        .then(files => files.filter(f => /\.jpg$/i.test(f)))
        .then(files => files.map(f => join(fParent, f))); // prepend parent directory
    });
    return Promise.all(files); // read directories
  })

  .then(files => files.reduce((arr, next) => arr.concat(next), [])) // flatten
  .then(files => {
    files = files.map(f => {
      return md5(join(photosRoot, f)) // Get hash
        .then(h => [f, h]); // map to [path, hash]
    });

    return Promise.all(files);
  })

  .then(hashes => hashes.reduce((obj, next) => {
    obj[next[0]] = next[1];
    return obj;
  }, {}))

  .then(hashMap => fs.writeJSON(join(photosRoot, 'hash-map.json'), hashMap))

  .catch(err => {
    console.error(err);
    process.exit(1);
  })
;
