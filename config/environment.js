/* eslint-env node */
'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix:         'korean-photos',
    environment,
    rootURL:              '/',
    // locationType:         'auto',
    locationType:         'hash',
    EmberENV:             {
      FEATURES:          {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    'ember-cli-lightbox': {
      lightboxOptions: {
        alwaysShowNavOnTouchDevices: false,
        albumLabel:                  "Image %1 of %2",
        disableScrolling:            false,
        fadeDuration:                500,
        fitImagesInViewport:         true,
        maxWidth:                    1000,
        maxHeight:                   1000,
        positionFromTop:             50,
        resizeDuration:              700,
        showImageNumberLabel:        true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS      = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
  }

  return ENV;
};
