describe('odev2',function(){
  it("TC01_LoginTestNo1",function(){
    cy.visit('https://www.edu.goit.global/account/login')
    cy.get('[name="email"]').type('user888@gmail.com')
    cy.get('[name="password"]').type('1234567890')
    cy.get('.eckniwg2').click()
    cy.wait(3000)
    cy.get('#open-navigation-menu-mobile').click()
    cy.wait(3000)
    cy.contains('Log out').click()

  })
  it("TC02_LoginTestNo2",function(){
    cy.visit('https://www.edu.goit.global/account/login')
    cy.get('[name="email"]').type('testowyqa@qa.team')
    cy.get('[name="password"]').type('QA!automation-1')
    cy.get('.eckniwg2').click()
    cy.wait(3000)
    cy.get('#open-navigation-menu-mobile').click()
    cy.wait(3000)
    cy.contains('Log out').click()

  })

})