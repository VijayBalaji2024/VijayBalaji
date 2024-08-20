import { createBdd } from "playwright-bdd";
import { test } from "./fixtures/fixture";
const{Given, When, Then} = createBdd(test)

Then('navigate to AddRequest', async ({ addrequest },temp:string) => {

    await addrequest.addreq(temp)

});