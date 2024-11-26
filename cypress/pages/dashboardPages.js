class DashBoardPage {
    selectorsList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }
        return selectors
    }

    accessDashboard() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')    
    }

    dashboardPageValidation(username, password) {
        cy.get(this.selectorsList().dashboardGrid)
    }
}

export default DashBoardPage