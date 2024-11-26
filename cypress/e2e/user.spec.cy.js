import userData from '../fixtures/users/userData.json'
import DashBoardPage from '../pages/dashboardPages'
import LoginPage from '../pages/loginPages'
import MyInfoPage from '../pages/myInfoPages'

const loginPage = new LoginPage
const dashboardPage = new DashBoardPage
const myInfoPage = new MyInfoPage

describe('Orange HRM Tests', () => {

  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUsers(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.accessDashboard()
    dashboardPage.dashboardPageValidation()

    myInfoPage.fillOutDetails()

  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    loginPage.accessLoginPage()
    loginPage.loginWithUsers(userData.userFail.username, userData.userFail.password)
    cy.get(selectorList.wrongCredentialAlert)    
  })

})