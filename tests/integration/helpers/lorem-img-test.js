
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lorem-img', 'helper:lorem-img', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{lorem-img inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

