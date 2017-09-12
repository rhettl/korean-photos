import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: '/'});
  this.route('faqs');

  this.route('gallery', function () {
    this.route('photo', {path: '/:photo_id'});
  });
  this.route('tags', function() {
    this.route('tag', {path: '/:tag_id'});
  });
  this.route('people', function() {
    this.route('person', {path: '/:person_id'});
  });

  // this.route('application.js');
  // this.route('tag');
});

export default Router;
