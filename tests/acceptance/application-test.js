import { module, test } from 'qunit';
import { visit, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'example/tests/helpers';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.dom('li').exists({ count: 2 });

    await click('li:nth-child(1) button');

    assert.dom('li').exists({ count: 1 });
  });
});
