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

    fillOutDetails(firstName, lastName, employeeId, driverLicence, expiresDateLicence, birthDate) {
        cy.get(this.selectorsList().myInfoButton).click()
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driverLicence)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(expiresDateLicence)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().dateField).eq(1).clear().type(birthDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true})
        cy.get(this.selectorsList().position28ComboBox).click({force: true})
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().position2ComboBox).click()
        
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage