import Ember from 'ember';
import NavHandlerMixin from 'ui-navbar/mixins/nav-handler';
import { module, test } from 'qunit';

module('Unit | Mixin | nav handler');

// Replace this with your real tests.
test('it works', function(assert) {
  let NavHandlerObject = Ember.Object.extend(NavHandlerMixin);
  let subject = NavHandlerObject.create();
  assert.ok(subject);
});
