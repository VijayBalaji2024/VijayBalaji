import { BrowserContext, Locator, Page, Selectors, expect } from "@playwright/test";
import { data } from "../../dataset/data";
export class Addrequest {
    page: Page
    Type: Locator
    item: Locator
    Des: Locator
    quantity: Locator
    UOM: Locator
    PID: Locator
    care: Locator
    basecurrency: Locator
    basecurrencyuom: Locator
    dropdown: Locator
    dropdownvalue: Locator
    dropdown2: Locator
    dropdownvalue2: Locator
    mpm: Locator
    checkbox: Locator
    radiobutton: Locator
    radiobutton1: Locator
    datepicker: Locator
    currentDay: Locator
    attachment: Locator
    attach: Locator
    filetype: Locator
    uploadbutton: Locator
    ok: Locator
    close: Locator

    constructor(page: Page) {
        this.page = page;
        this.Type = this.page.getByPlaceholder('Please enter License type')
        this.item = this.page.locator('[id="ddlItemCategory"]')
        this.Des = this.page.locator('#ddlItemdescriptions')
        this.quantity = this.page.locator('#txtQty')
        this.UOM = this.page.locator('[id="ddlQtyUOM"]')
        this.PID = this.page.locator('[class="multiselect-selected-text"]')
        this.care = this.page.locator('#ddlCaresoftEntity')
        this.basecurrency = this.page.locator('[id="txtCostBudgeted"]')
        this.basecurrencyuom = this.page.locator('[class="form-control select-size-sm restrictEnter select2-hidden-accessible"]')
        this.dropdown = this.page.getByRole('textbox', { name: 'Select Base Currency' })
        this.dropdownvalue = this.page.getByRole('option', { name: 'AED' })
        this.mpm = this.page.getByRole('textbox', { name: 'Select Cost Conversion Year' })
        this.dropdown2 = this.page.getByRole('textbox', { name: 'Select Cost Conversion Year' })
        this.dropdownvalue2 = this.page.getByRole('option', { name: 'Apr-' })
        this.checkbox = this.page.locator('[type="checkbox"][value="BAYONE13179C000"]')
        this.radiobutton = this.page.locator('[id="RdnBillabeyes"]')
        this.radiobutton1 = this.page.locator('[id="RdnWorkPlaceCustomer"]')
        this.datepicker = this.page.locator('[id="txtEnddate"]')
        this.currentDay=this.page.locator('[class="today active start-date active end-date in-range available"]')
        this.attachment = this.page.locator('[id="btnAttachment"]')
        this.attach = this.page.locator('[id="fileUpload"]')
        this.filetype = this.page.locator('#ddlDocType')
        this.uploadbutton = this.page.locator('#btnUpload')
        this.ok = this.page.getByRole('button', { name: 'OK' })
        this.close = this.page.locator('#Document_Add').getByRole('button').first()
    }
    public async addreq(temp: any) {                  
        await this.Type.fill(data.licencetypes)              
        await this.item.selectOption('Subscription')
        await this.Des.selectOption('ANSA')
        await this.quantity.fill('10')
        await this.UOM.selectOption('Units')
        const dd = await this.page.$$('[class="form-control"]')
        for (const element of dd) {
            const text = await element.textContent()
            if (text?.trim() === 'Please enter AMC') {
                await element.click()
                await element.fill('AMC001')

            }
        }
        await this.PID.click()
        await expect(this.checkbox).not.toBeChecked()       
        await this.checkbox.check()
        await this.care.selectOption('Care@ past')
        await this.basecurrency.click()
        await this.basecurrency.press('ArrowUp');
        await this.dropdown.click()
        await this.dropdownvalue.click()
        await this.dropdown2.click()
        await this.dropdownvalue2.click()                           
        if (await this.radiobutton.isChecked) {
            if (await expect(this.radiobutton1).not.toBeChecked) {
                await this.radiobutton1.check()
                console.log('checked')
            }
        }
        await this.datepicker.focus()                              
        await this.currentDay.dblclick()
        await this.attachment.click()
        const doc = 'Invoice';
        switch (doc) {
            case 'Invoice':
                await this.filetype.selectOption('Invoice')
                console.log('invoice selected');
                break;
            default:
                console.log('Not a special day');
                break;
        }
        const fileInput = this.attach
        await fileInput.setInputFiles('D:/Finalassessment/testfiles/Excel.xlsx')
        await this.uploadbutton.click()
        await this.ok.click()
        await this.close.click()
        await this.page.pause()
    }
}