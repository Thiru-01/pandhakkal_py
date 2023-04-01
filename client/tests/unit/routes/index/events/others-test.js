import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/events/others', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/events/others');
    assert.ok(route);
  });
});
