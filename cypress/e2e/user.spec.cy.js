import userData from '../fixtures/users/userData.json'
import DashBoardPage from '../pages/dashboardPages'
import LoginPage from '../pages/loginPages'
import MenuPage from '../pages/menuPages'
import MyInfoPage from '../pages/myInfoPages'

const loginPage = new LoginPage
const dashboardPage = new DashBoardPage
const myInfoPage = new MyInfoPage
const menuPage = new MenuPage

describe('Orange HRM Tests', () => {

  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUsers(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()

    myInfoPage.fillOutDetails()

  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    loginPage.accessLoginPage()
    loginPage.loginWithUsers(userData.userFail.username, userData.userFail.password)
    cy.get(selectorList.wrongCredentialAlert)    
  })

})