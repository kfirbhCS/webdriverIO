import CsLoginPage from 'src/pages/cs/CsLoginPage'
import {config} from 'src/config'
import {expect} from 'chai';
import LogInPage from 'src/pages/LogInPage';
describe('CSLogin',() =>{
  it('should commit login', ()=>{
    let loginPage = new CsLoginPage()
    let cs_dashbord_page = loginPage.loadPageAndLogin(config.CSEmail,config.CSPassword)
    cs_dashbord_page.clickOnVisitsCB()
  })
})