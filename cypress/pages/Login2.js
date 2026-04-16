class Login2{

 url="https://www.edu.goit.global/account/login";
 title='.next-10stgr7 > .next-c1vj7d';
 email='[name="email"]';
 password='[name="password"]';
 loginButton='.next-1jphuq5';
 forgetPasswordSelector='.next-1f1fv1i > .next-1qrvie4';




    //Bu method ilgili url gider
    navigateURL(){
        cy.visit(this.url);
    }

        //navigateURL(url){
        //cy.visit(url);
        //}
    //Bu method title alanın kontrolünü sağlar
    checkTitle(title){
        cy.get(this.title).
        should("be.visible").
        and("have.text",title);
    }
    //Bu method email alanının kontrolünü sağlar
    checkEmailField(){
        cy.get(this.email).
        should("be.visible").
        and("exist");
    }
    //Bu method password alanının kontrolünü sağlar.
    checkPasswordField(){
        cy.get(this.password).
        should("be.visible").
        and("exist");
    }
    //Bu method Login butonunun kontrolünü sağlar.
    checkLoginButton(){
        cy.get(this.loginButton).
        should("be.visible").
        and("exist")
    }
    //Bu method forget password alanının kontrolünü sağlar.
    forgetPassword(text){
    cy.contains(text).should("be.visible");
    }

    enterEmail(email){
        cy.get(this.email).type(email)
    }
    
    enterPassword(password){
        cy.get(this.password).type(password)

    }

    clickLoginButton(){
        cy.get(this.loginButton).click()
    }

    login(email, password){
        this.navigateURL();
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLoginButton();
        

    }

}
export default new Login2();