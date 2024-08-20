import { BrowserContext, Locator, Page, Selectors, expect } from "@playwright/test";
//import { data } from "../../dataset/data";
export class Viewrequest {
page:Page
    add: Locator
    constructor(page: Page) {
        this.page = page;
        this.add = this.page.locator('#btnadd')
}
public async viewreq(temp:any) {  
    await this.add.click()
}
}