import Odev3Login from "../../pages/odev3Login"
import HomePage from "../../pages/HomePage"

describe("Odev3 Test", () => {

    it("Login ve Logout", () => {

        
        cy.fixture("odev3User").then((user)=>{
        
            Odev3Login.login(user.email, user.password)
        
            HomePage.logout()
        
        })
        

    })

})