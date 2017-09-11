/* jshint node: true */

module.exports = function (deployTarget) {
  const ENV = {
    build: {},
    // include other plugin configuration that applies to all deploy targets here

    s3: {
      accessKeyId:     process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_KEY,
      bucket:          process.env.BUCKET_NAME,
      region:          process.env.REGION,
      filePattern:     '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,html}',

    },
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
