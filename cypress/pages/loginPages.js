class LoginPage {
    selectorsList() {
        const selectors = {
        userNameField: "[name='username']",
        passWordField: "[name='password']",
        logInButton: "[type='submit']",
        wrongCredentialAlert: "[role='alert']"
        }
        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUsers(username, password) {
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passWordField).type(password)
        cy.get(this.selectorsList().logInButton).click()
    }
}

export default LoginPage