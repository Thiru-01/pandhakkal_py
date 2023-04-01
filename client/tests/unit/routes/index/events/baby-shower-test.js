import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/events/baby_shower', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/events/baby-shower');
    assert.ok(route);
  });
});
