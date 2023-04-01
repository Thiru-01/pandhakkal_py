import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/events/wedding', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/events/wedding');
    assert.ok(route);
  });
});
