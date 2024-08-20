import { createBdd } from "playwright-bdd";
import { test } from "./fixtures/fixture";
const{Given, When, Then} = createBdd(test)

Then('navigate to {string}', async ({ navigate },temp:string) => {

    await navigate.selectCard(temp)
    
});