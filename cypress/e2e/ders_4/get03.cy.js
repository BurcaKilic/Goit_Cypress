describe("API testing", ()=>{
     it("tc01_Get 03 istegi", ()=>{
    const rq ={
    method: "Get",
    url:"https://httpbin.org/get",

   
    failOnStatusCode: false

    }

        cy.request(rq).then((response)=>{
        //debugger;
            //debugger loglama için kullanılır. Neyi kontrol etmek istiyorsak onun altına debugger
            //yazıyoruz.

        assert.equal(200,response.status);
        //debugger;
        expect(response.status).to.eq(200);
        //debugger;
        assert.equal("https://httpbin.org/get",response.body["url"]); //body kısmındaki url
        //belirtilen url mi? Kontrolü yapıldı. Postmanden verileri aldı
        //debugger;
        
        //Headers kontrolü
        assert.equal("application/json",response.headers["content-type"]);

        //Uygulamanın yürütme süresinin kontrolü
        assert.isTrue(response.duration <=2000);
        expect(response.duration).to.be.at.most(2000);
        
           
        })
         
    
    });
});