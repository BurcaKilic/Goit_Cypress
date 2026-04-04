class Odev3Login {

    email = '[name="email"]'
    password = '[name="password"]'
    loginButton = '.eckniwg2'
    url = 'https://www.edu.goit.global/account/login'

    login(email, password){

        cy.visit(this.url)

        cy.get(this.email).type(email)

        cy.get(this.password).type(password)

        cy.get(this.loginButton).click()

    }

}

export default new Odev3Login()