import MenuPage from '../pages/menuPages'
import MyInfoPage from '../pages/myInfoPages'
import LoginPage from '../pages/loginPages'
import DashBoardPage from '../pages/dashboardPages'
import userData from '../fixtures/users/userData.json'

const Chance = require('chance')

const chance = new Chance()
const myInfoPage = new MyInfoPage
const menuPage = new MenuPage
const loginPage = new LoginPage
const dashboardPage = new DashBoardPage


describe('Users Orange HRM Tests', () => {

  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUsers(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillOutDetails(chance.first(), chance.last(), '1234567890', '123456', '2024-10-10', '2000-01-02')
    myInfoPage.saveForm()
  })

})