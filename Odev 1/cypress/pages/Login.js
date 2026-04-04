    class Login{

    //Bu method ilgili url gider
    navigateURL(){
        cy.visit("https://www.edu.goit.global/account/login");
    }

        //navigateURL(url){
        //cy.visit(url);
        //}
    //Bu method title alanın kontrolünü sağlar
    checkTitle(title){
        cy.get('.next-10stgr7 > .next-c1vj7d').
        should("be.visible").
        and("have.text",title);
    }
    //Bu method email alanının kontrolünü sağlar
    checkEmailField(){
        cy.get('[name="email"]').
        should("be.visible").
        and("exist");
    }
    //Bu method password alanının kontrolünü sağlar.
    checkPasswordField(){
        cy.get('[name="password"]').
        should("be.visible").
        and("exist");
    }
    //Bu method Login butonunun kontrolünü sağlar.
    checkLoginButton(){
        cy.get('.next-1jphuq5').
        should("be.visible").
        and("exist")
    }
    //Bu method forget password alanının kontrolünü sağlar.
    forgetPassword(text){
        cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text",text);
    }

}
export default new Login();