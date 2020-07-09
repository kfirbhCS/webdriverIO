describe('Cherchertech Home Page', () => {
    it('Get title of cherchertech Home page', () => {
    console.log(JSON.stringify(browser.config));
    browser.url('https://chercher.tech/practice/popups')
    $("//input[@name='alert']").click()
    browser.acceptAlert()
    })
    })