import { createBdd } from "playwright-bdd";
import { test } from "./fixtures/fixture";
const{Given, When, Then} = createBdd(test)

Then('navigato to ViewRequest', async ({ viewrequest },temp:string) => {
    await viewrequest.viewreq(temp)
});