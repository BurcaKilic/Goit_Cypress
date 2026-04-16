import Login from "../../pages/Login";
import Login2 from "../../pages/Login2";


describe("Page Object Model - POM", ()=>{
    it("tc02_Page Object Pattern", () => {
       
       Login.navigateURL();
       Login.checkTitle("Login");
       Login.checkEmailField();
       Login.checkPasswordField();
       Login.checkLoginButton();
       Login.forgetPassword("I can't remember the password");
       
    });

    it("tc03_Page Object Pattern", () => {
       
       Login2.navigateURL();
       Login2.checkTitle("Login");
       Login2.checkEmailField();
       Login2.checkPasswordField();
       Login2.checkLoginButton();
       Login2.forgetPassword("I can't remember the password");
    })

     it("tc04_Page Object Pattern Fixtures Kullanimi", () => {
      cy.fixture("login").then((expected)=>{

       Login2.navigateURL();
       Login2.checkTitle(expected.titleText);
       Login2.checkEmailField();
       Login2.checkPasswordField();
       Login2.checkLoginButton();
       Login2.forgetPassword(expected.forgetPasswordText);


      })
       
       
       
   });




})