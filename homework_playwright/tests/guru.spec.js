const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'serial' })
test.describe('Open Guru website', () => {
    test.beforeEach(async({ page }) => {
        await page.goto('https://www.guru99.com/')
    })
    test('open the main page', async({ page }) => {
        // await page.goto('https://www.guru99.com/')

        await expect(page.getByText('Tutorials Library')).toBeVisible()
    })

    test('test', async ({ page }) => {
        // await page.goto('https://www.guru99.com/');
        await expect(page.getByRole('heading', { name: 'SAP' })).toBeVisible();
        await page.getByRole('link', { name: '➤ SAP Beginner' }).click();
        await expect(page.getByRole('cell', { name: 'SAP GUI & Navigation Tutorial' })).toBeVisible();
        await page.getByRole('row', { name: '👉 Tutorial Top 26 SAP Security Interview Questions & Answers' }).getByRole('cell').first().click();
        await expect(page.getByRole('heading', { name: '1) Explain what is SAP security?' })).toBeVisible();
    });
    test('test2', async ({ page }) => {
        // await page.goto('https://www.guru99.com/');
        await page.locator("xpath=//a[@href='/tensorflow-tutorial.html'][text()='➤ TensorFlow']").click()
        await expect(page.locator('//h2[text()="What is TensorFlow?"]')).toBeVisible

    })
    test('test3', async ({ page }) => {
        // await page.goto('https://www.guru99.com/');
        const linkNltk = page.locator('a[href="/nltk-tutorial.html"]')
        const articleAdded = page.locator("xpath=//time")
        await linkNltk.click()
        const tutorialLink = page.locator('tr td a')
        const textWhatIsSeq = page.locator("xpath=//h2[text()='What is Seq2Seq?']")
        const textNltkSyllabus = page.locator("xpath=//h2[text()='NLTK Tutorial Syllabus']")
        await expect(articleAdded).toContainText('September 30, 2023')
        await textNltkSyllabus.press('Enter')
        await tutorialLink.nth(7).click()
        await textWhatIsSeq.waitFor({state: 'visible', timeout: 5000})
        await expect(textWhatIsSeq).toBeVisible()

    })
    test.skip('test4', async({ page }) => {
        const textWhatIsSeq = page.locator("xpath=//h2[text()='What is Seq2Seq?']")
        const textWhatIsSeq33 = page.locator("xpath=//h2[text()='What is Seq2Seq33?']")
        await page.goto('https://www.guru99.com/seq2seq-model.html')
        if (await textWhatIsSeq33.isVisible()) {
            await page.locator('NON.VISIBLE.LOCATOR').click()
        }
        await expect(textWhatIsSeq).toBeVisible()
    })
    test('test5', async({ page }) => {
        const input = page.locator('input.gsc-input')
        await page.mouse.move(500, 500)
        await input.click()
        // await input.moveTo('input.gsc-input')
        // await expect(page.locator('//h4[text()="Search for your Favorite Course"]')).toBeVisible()
        // await input.hover('input.gsc-input').focus()
        await input.fill('sap')
        await input.clear()
        await input.pressSequentially('SAP')
        await input.pressSequentially('Tutorial', { delay: 200 })
    })
})