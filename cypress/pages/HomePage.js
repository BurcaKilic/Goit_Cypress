class HomePage {

    menuButton = '#open-navigation-menu-mobile'

    logout(){

        cy.get(this.menuButton).click()

        cy.wait(2000)

        cy.contains('Log out').click()

    }

}

export default new HomePage()