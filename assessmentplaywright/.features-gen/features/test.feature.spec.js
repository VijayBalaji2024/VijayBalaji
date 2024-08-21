/** Generated from: features\test.feature */
import { test } from "../../steps/fixtures/fixture.ts";

test.describe("Procurement Automation", () => {

  test("Adding a new sofware request", { tag: ["@smoke"] }, async ({ Then, login, And, navigate, viewrequest, addrequest }) => {
    await Then("Login", null, { login });
    await And("navigate to \"Software\"", null, { navigate });
    await And("navigato to ViewRequest", null, { viewrequest });
    await And("navigate to AddRequest", null, { addrequest });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\test.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Adding a new sofware request": {"pickleLocation":"3:1","tags":["@smoke"]},
};