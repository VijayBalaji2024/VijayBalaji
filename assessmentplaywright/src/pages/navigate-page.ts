import { BrowserContext, Locator, Page, Selectors, expect } from "@playwright/test";
import test from "node:test";
//import { data } from "../../dataset/data";
export class Navigate {
page:Page
    constructor(page: Page) {
        this.page = page;    
}
public async selectCard(temp:any) {
    await this.page.getByRole('heading', { name: temp }).click()
}
}