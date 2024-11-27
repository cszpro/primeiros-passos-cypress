import DashBoardPage from '../pages/dashboardPages'
import LoginPage from '../pages/loginPages'
import userData from '../fixtures/users/userData.json'

const loginPage = new LoginPage
const dashboardPage = new DashBoardPage

describe('Login Orange HRM Tests', () => {

    it('Login - Sucess', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithUsers(userData.userSucess.username, userData.userSucess.password)
        dashboardPage.checkDashboardPage()
    })

    it('Login - Fail', () => {
        cy.visit('/auth/login')
        loginPage.accessLoginPage()
        loginPage.loginWithUsers(userData.userFail.username, userData.userFail.password)
        loginPage.checkAccessInvalid()
    })

})