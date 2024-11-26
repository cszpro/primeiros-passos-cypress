class MyInfoPage {
    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            genericComboBox: ".oxd-select-text--arrow",
            position28ComboBox: ".oxd-select-dropdown > :nth-child(28)",
            position2ComboBox: ".oxd-select-dropdown > :nth-child(2)"
        }
        return selectors
    }

    accessDashboard() {
        cy.location('pathname').should('equal', '/web/index.php/pim/viewPersonalDetails/empNumber/7')    
    }

    fillOutDetails() {
        cy.get(this.selectorsList().myInfoButton).click()
        cy.get(this.selectorsList().firstNameField).clear().type('First Name Test')
        cy.get(this.selectorsList().lastNameField).clear().type('Last Name Test')
        cy.get(this.selectorsList().genericField).eq(3).clear().type('EmpIdTest')
        cy.get(this.selectorsList().genericField).eq(5).clear().type('1234567890')
        cy.get(this.selectorsList().dateField).eq(0).clear().type('2024-10-01')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type('1990-01-08')
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true})
        cy.get(this.selectorsList().position28ComboBox).click({force: true})
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().position2ComboBox).click()
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage