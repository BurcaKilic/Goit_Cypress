describe("API testing", ()=>{
    it("tc01_Get istegi", ()=>{

        cy.request("https://httpbin.org/get").then((response)=>{

        assert.equal(response.status,200);  //bu ikisi aynı şeyi yapıyor- Gelen status kodu 200 mu?
        expect(response.status).to.eq(200);
        })
    });

    it("tc02_Get istegi", ()=>{
    const rq ={
    method: "Get",   //daha profesyonel kullanım
    url:"https://httpbin.org/get",
    failOnStatusCode: false  //statuscode 200 olmasa bile islemi durdurma devam ettir demek için kullanıyoruz.

    }

        cy.request(rq).then((response)=>{

        assert.equal(response.status,200);
        expect(response.status).to.eq(200);
        console.log("response ::::::", response) //f12 ile açılan kısmın içinde görünür.
        cy.log("response::::::",JSON.stringify(response))
        cy.log("response body ::::::",JSON.stringify(response.body)) //body i verir
        cy.log("response headers ::::::",JSON.stringify(response.headers)) // headers ile ilgili
        cy.log("response status ::::::",JSON.stringify(response.status))
        cy.log("response statusText ::::::",JSON.stringify(response.statusText))
        cy.log("response duration::::::",JSON.stringify(response.duration))
        })
        
    
    })



    it("tc03_Get istegi QS", ()=>{
    const rq ={
    method: "Get",
    url:"https://httpbin.org/get",

    qs:{
        id:"1",
        name:"Mr"   //Bu şekilde parametre ekleniyor. Swagger'da yazıyor.

    },

    failOnStatusCode: false

    }

        cy.request(rq).then((response)=>{

        assert.equal(response.status,200);
        expect(response.status).to.eq(200);
        cy.log("response body ::::::",JSON.stringify(response.body))
        
        })
        
    
    });

//POST isteği body gönderme ::::1
    it("tc04_Post istegi body", ()=>{

    const rq = {
        method: "POST",
        url: "https://httpbin.org/post",
        failOnStatusCode: false,

        body: {
            name: "Mr.",
            role: "QA",
            age: 30
        }
    }

    cy.request(rq).then((response)=>{

        assert.equal(response.status,200);
        expect(response.status).to.eq(200);
        cy.log("response body ::::::", JSON.stringify(response.body))

    })

});

//post with body::::2

it("tc05_Post istegi body_2", ()=>{
    const body ={
        name: "Mr.",
            role: "QA",
            age: 30
    }

    const rq = {
        method: "POST",
        url: "https://httpbin.org/post",
        body:body,
        failOnStatusCode: false,

       
    }

    cy.request(rq).then((response)=>{

        assert.equal(response.status,200);
        expect(response.status).to.eq(200);
        cy.log("response body ::::::", JSON.stringify(response.body))

    })

})

//Post with bodt with headers:::::2

it("tc06_Post istegi body_2 with headers", ()=>{
    const body ={
        name: "Mr.",
        role: "QA",
         age: 30
    }

    const rq = {
        method: "POST",
        url: "https://httpbin.org/post",
        body:body,
        headers:{
            "Content-Type":"application/json",
            "Connection":"keep-alive",
            "user-agent":"Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0",

        },

        
        failOnStatusCode: false
     
    }

    cy.request(rq).then((response)=>{

        assert.equal(response.status,200);
        expect(response.status).to.eq(200);
        cy.log("response body ::::::", JSON.stringify(response.body))
        cy.log("response body ::::::", JSON.stringify(response.headers))

    })

    })
   
})