import { BrowserContext, Locator, Page, Selectors, expect } from "@playwright/test";
import { data } from "../../dataset/data";
const { promises } = require('dns')
const { chromium } = require('playwright')
export class Handson {
    page: Page
    url: string
    username: Locator
    password: Locator
    constructor(page: Page) {
        this.page = page;
        this.url = 'https://procurementqat.caresoftglobal.com/'
        this.username = page.locator('[name="username"]')
        this.password = page.locator('[id="txtPassword"]')
    }
    public async login() {
        await this.page.goto(this.url);
        await expect(this.page).toHaveURL(this.url)
        await expect(this.username).toBeEnabled()
        await this.username.fill(data.username)
        await expect.soft(this.password).not.toBeDisabled()
        await this.password.fill(data.password)
        await this.password.press('Enter')
        await this.page.waitForLoadState()
    }
}
