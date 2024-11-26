import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    userNameField: "[name='username']",
    passWordField: "[name='password']",
    logInButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userSucess.username)
    cy.get(selectorList.passWordField).type(userData.userSucess.password)
    cy.get(selectorList.logInButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('First Name Test')
    cy.get(selectorList.lastNameField).clear().type('Last Name Test')
    cy.get(selectorList.genericField).eq(3).clear().type('EmpIdTest')
    cy.get(selectorList.genericField).eq(5).clear().type('1234567890')
    cy.get(selectorList.dateField).eq(0).clear().type('2024-10-01')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.dateField).eq(1).clear().type('1990-01-08')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.userNameField).type(userData.userFail.username)
    cy.get(selectorList.passWordField).type(userData.userFail.password)
    cy.get(selectorList.logInButton).click()
    cy.get(selectorList.wrongCredentialAlert)    
  })

})