describe('Orange HRM Tests', () => {

  const selectorList = {
    userNameField: "[name='username']",
    passWordField: "[name='password']",
    logInButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userNameField).type('Admin')
    cy.get(selectorList.passWordField).type('admin123')
    cy.get(selectorList.logInButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.userNameField).type('test')
    cy.get(selectorList.passWordField).type('test')
    cy.get(selectorList.logInButton).click()
    cy.get(selectorList.wrongCredentialAlert)    
  })

})