'use strict';

const {readdir, ensureDirSync} = require('fs-extra');
const {join, normalize}        = require('path');
const gm                       = require('gm');

const publicFiles = normalize(join(__dirname, '..', 'public'));
const photosDir   = join(publicFiles, 'images', 'korea');
const thumbsDir   = join(photosDir, 'thumbnails');

ensureDirSync(thumbsDir);


const calculateResize = (width, height, maxWidth = 150, maxHeight = 150) => {
  let ratio = 0;  // Used for aspect ratio

  // Check if the current width is larger than the max
  if (width > maxWidth) {
    ratio  = maxWidth / width;   // get ratio for scaling image
    height = height * ratio;    // Reset height to match scaled image
    width  = width * ratio;    // Reset width to match scaled image
  }

  // Check if current height is larger than max
  if (height > maxHeight) {
    ratio  = maxHeight / height; // get ratio for scaling image
    width  = width * ratio;    // Reset width to match scaled image
    height = height * ratio;    // Reset height to match scaled image
  }

  return {width, height};
};

const mkThumb = function (file, thumb, maxWidth, maxHeight, quality = 63) {
  return new Promise((res, rej) => {
    const gmFile = gm(file);
    gmFile.size((err, {height, width}) => {
      if (err) {
        return rej(err);
      }

      const resize = calculateResize(width, height, maxHeight, maxWidth);

      gmFile.thumb(resize.width, resize.height, thumb, quality, err => {
        if (err) {
          rej(err);
        } else {
          res(thumb);
        }
      })
    });
  });
};

readdir(photosDir)
  .then(files => files.filter(f => /\.jpg$/i.test(f)))
  // .then(files => files.slice(0, 5))
  .then(async files => {
    const length = files.length.toFixed(0).padStart(3, 0);
    let out = [];

    for (let i = 0; i < files.length; i ++) {
      const f = files[i];
      const fNum = (i + 1).toFixed(0).padStart(3, 0);

      console.log(`File ${fNum} / ${length} :: ${f}`);
      out.push(await mkThumb(join(photosDir, f), join(thumbsDir, f), 150, 150));
    }

    return out;
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  })
;
