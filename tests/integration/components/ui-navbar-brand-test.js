import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui-navigation-brand', 'Integration | Component | ui navigation brand', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui-navigation-brand}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui-navigation-brand}}
      template block text
    {{/ui-navigation-brand}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
