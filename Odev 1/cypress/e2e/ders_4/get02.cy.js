describe("API testing-assertion", () => {

    it("tc01_POST istegi assertion", () => {

        const rq = {
            method: "POST",
            url: "https://httpbin.org/post",
            body: {
                name:"Mr.",
                role:"QA",
                age:30
            },
            
            failOnStatusCode: false
        }

        cy.request(rq).then((response) => {   //assertionlar

            //1.Status kontrol edilir. Ayrıca spesifik kontrollerin yapılışı aşağıdaki gibidir.

            assert.equal(response.status, 200);
            expect(response.status).to.eq(200);
            cy.log("response body ::::::",JSON.stringify(response.body));
            assert.equal(response.body.json.name,"Mr.");
            expect(response.body.json.role).to.eq("QA");
            assert.equal(response.body.json.age,30);

            //2.URL kontrol etme:
            assert.equal(response.body.url,"https://httpbin.org/post");

            //Büyük bir body varsa üstteki gibi verileri tek tek kontrol etmek yerine aşağıdaki gibi
            //to.deep ile kontrol edilebiliyor.
            expect(response.body.json).to.deep.eq({
                name:"Mr.",
                role:"QA",
                age:30
            });

            //3.Headers kontrol etme
            expect(response.headers["content-type"]).to.eq("application/json");
            expect(response.headers["content-type"]).to.include("application/json");

            //4.Duration kontrolü
            expect(response.duration).to.be.lessThan(200);

            
  

        })

    })

})