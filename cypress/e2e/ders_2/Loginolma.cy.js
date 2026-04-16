describe('Login olma testi', function () {

  it('TC01_yonetici ile login olma testi', function () {
    
    cy.login('user888@gmail.com','1234567890')
    //cy.visit('https://www.edu.goit.global/tr/account/login')
    //cy.get('[name="email"]').type('user888@gmail.com')
    //cy.get('[name="password"]').type('1234567890')
    //cy.get('.eckniwg2').click()
  })

  it('TC02_kullanici ile login olma testi', function () {

    cy.login('andy.moko.98@gmail.com@gmail.com','Abdy_Moko78')

    //cy.visit('https://www.edu.goit.global/tr/account/login')
    //cy.get('[name="email"]').type('andy.moko.98@gmail.com')
    //cy.get('[name="password"]').type('Abdy_Moko78')
    //cy.get('.eckniwg2').click()
  })

  it('TC03_misafir ile login olma testi', function () {

    cy.login('mrdusty@duniakeliling.com','mrdusty@duniakeliling.com')

    //cy.visit('https://www.edu.goit.global/tr/account/login')
    //cy.get('[name="email"]').type('mrdusty@duniakeliling.com')
    //cy.get('[name="password"]').type('mrdusty@duniakeliling.com')
    //cy.get('.eckniwg2').click();
  })


})
