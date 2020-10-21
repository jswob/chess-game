import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | transitions", function (hooks) {
  setupApplicationTest(hooks);

  test("visiting index redirects to main", async function (assert) {
    await visit("/");

    assert.equal(currentURL(), "/main");
  });
});
