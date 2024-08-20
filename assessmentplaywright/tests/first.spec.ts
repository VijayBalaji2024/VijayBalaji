import{test, expect} from '@playwright/test'

test('firstrun', async ({page}) =>
{

    await page.goto('https://procurementqat.caresoftglobal.com/')
})

