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
    togclose: Locator
    togclose2: Locator
    basecurrency: Locator
    basecurrencyuom: Locator
    dropdown: Locator
    dropdownvalue: Locator
    ccy: Locator
    locationclose: Locator
    poclose: Locator
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
    requestsave:Locator


    constructor(page: Page) {
        this.page = page;
        this.togclose = this.page.getByRole('link', { name: ' General ' })
        this.togclose2 = this.page.getByRole('link', { name: '  Item Details ' })
        this.locationclose = this.page.getByRole('link', { name: '  Location ' })
        this.poclose = this.page.getByRole('link', { name: '  Cost and Finance ' })
        this.Type = this.page.getByPlaceholder('Please enter License type')
        this.item = this.page.locator('[id="ddlItemCategory"]')
        this.Des = this.page.locator('#ddlItemdescriptions')
        this.quantity = this.page.locator('#txtQty')
        this.UOM = this.page.locator('[id="ddlQtyUOM"]')
        this.PID = this.page.locator('[class="multiselect-selected-text"]')
        this.care = this.page.locator('#ddlCaresoftEntity')
        this.basecurrency = this.page.locator('#IT_Costfinance').getByPlaceholder('Requested Budget', { exact: true })
        this.basecurrencyuom = this.page.locator('[class="form-control select-size-sm restrictEnter select2-hidden-accessible"]')
        this.dropdown = this.page.getByRole('textbox', { name: 'Select Base Currency' })
        this.dropdownvalue = this.page.getByRole('option', { name: 'USD' })


        this.ccy = this.page.locator('#IT_Costfinance #ddlCostConversionYear')


        this.checkbox = this.page.locator('[type="checkbox"][value="BAYONE13179C000"]')
        this.radiobutton = this.page.locator('[id="RdnBillabeyes"]')
        this.radiobutton1 = this.page.locator('[id="RdnWorkPlaceCustomer"]')
        this.datepicker = this.page.locator('[id="txtEnddate"]')
        this.currentDay = this.page.locator('[class="today active start-date active end-date in-range available"]')
        this.attachment = this.page.locator('[id="btnAttachment"]')
        this.attach = this.page.locator('[id="fileUpload"]')
        this.filetype = this.page.locator('#ddlDocType')
        this.uploadbutton = this.page.locator('#btnUpload')
        this.ok = this.page.getByRole('button', { name: 'OK' })
        this.close = this.page.locator('#Document_Add').getByRole('button').first()
        this.requestsave=this.page.locator('[id="btnSave"]')
    }
    public async addreq(temp: any) {
        await this.togclose.click()
        //await this.page.pause()               
        await this.Type.fill(data.licencetype)
        await this.item.selectOption('Subscription')
        await this.Des.selectOption('12.07.test description')
        await this.quantity.fill('10')
        await this.UOM.selectOption('Units')

        await this.togclose2.click()
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
        await this.care.selectOption('Caresoft Global FZ LLC')
        //await this.page.pause() 
        await this.basecurrency.click()
        await this.basecurrency.fill('10000');

        //using press button method 
        //await this.basecurrency.press('Arrowup');

        await this.dropdown.click()
        await this.dropdownvalue.click()
        //await this.ccy.click()
        //await dropdown.selectOption('Jan-2024');
        await this.ccy.selectOption({ value: 'Jan-2024' });
        //await this.page.getByRole('link', {'Jan-2024' }).click();

        //await this.select.click()


        if (await this.radiobutton.isChecked) {
            if (await expect(this.radiobutton1).not.toBeChecked) {
                await this.radiobutton1.check()
                console.log('checked')
            }
        }
        await this.datepicker.focus()
        await this.currentDay.click()
        await this.attachment.click()
        const doc = 'PO';
        switch (doc) {
            case 'PO':
                await this.filetype.selectOption('PO')
                console.log('PO selected');
                break;
            default:
                console.log('Po not selected');
                break;
        }
        const fileInput = this.attach
        await fileInput.setInputFiles("c:/testfiles/emil.txt")
        await this.uploadbutton.click()
        await this.ok.click()
        await this.close.click()
        await this.locationclose.click()
        await this.poclose.click()
        await this.requestsave.click()
        
        await this.page.pause()

    }
}