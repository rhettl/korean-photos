import DS from 'ember-data';
import Ember from 'ember';

const {attr, hasMany} = DS;

const imagesDir = 'http://korean-photos.s3-website-us-west-2.amazonaws.com'; //'/images/korea';

export default DS.Model.extend({
  title: attr('string', {defaultValue: ''}),
  desc: attr('string', {defaultValue: ''}),
  backText: attr('string', {defaultValue: ''}),
  notes: attr('string', {defaultValue: ''}),

  isMain: attr('boolean', {defaultValue: false}),
  duplicates: hasMany('photo', {inverse: 'duplicates'}),

  front: Ember.computed('frontHash', function () { return `${imagesDir}/${this.get('frontHash')}.jpg` }),
  back: Ember.computed('backHash', function () { return `${imagesDir}/${this.get('backHash')}.jpg` }),

  thumb:       Ember.computed.alias('frontThumb'),
  frontThumb: Ember.computed('frontHash', function () { return `${imagesDir}/thumbnails/${this.get('frontHash')}.jpg` }),
  backThumb: Ember.computed('backHash', function () { return `${imagesDir}/thumbnails/${this.get('backHash')}.jpg` }),

  frontHash: attr('string'),  // Required
  backHash: attr('string'),   // Required

  tags: hasMany('tag'),

  related: hasMany('photo', {inverse: 'related'}),
  people: hasMany('person'),
  // meta: attr({
  //   defaultValue() {
  //     return {};
  //   }
  // })
});
