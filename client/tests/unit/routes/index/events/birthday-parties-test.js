import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index/events/birthday_parties', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:index/events/birthday-parties');
    assert.ok(route);
  });
});
