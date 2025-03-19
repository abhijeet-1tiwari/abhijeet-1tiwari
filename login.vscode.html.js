
import {test,expect} from '@playwright/test'

test('demo login test 1', async({page}) => {

    await page.goto('https://demo.parseable.com/login');
    await page.pause()

    await page.locator('[placeholder="J.Doe"]').fill('admin')

    await page.locator('[placeholder="**********"]').fill('admin')

    await page.waitForSelector('Login',{timeout: 3000})

    await page.locator('Login').click()

})

