describe("standart test yazma", ()=>{
    it("tc01_Standart test", () => {
       
       //".URL git"
       cy.visit("https://www.edu.goit.global/account/login");
       //2.Title'ın görünür olup olmadığını ve text'in login olup olmadığını kontrol et
       cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text","Login");
       //3.Email alanının görünür ve var olup olmadığını kontrol et
       cy.get('[name="email"]').should("be.visible").and("exist");
       //4.Password alanının görünür ve var olup olmadığını kontrol et
       cy.get('[name="password"]').should("be.visible").and("exist");
       //5.Login butonunun görünür ve var olup olmadığını kontrol et
       cy.get('.next-1jphuq5').should("be.visible").and("exist");
       //6. I can't remember the password alanının görünür olup olmadığını ve text'in I can't remember the password'e eşit olduğunu kontrol et
       cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text","I can't remember the password");
       
    })




})