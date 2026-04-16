describe("Odev4 Httpbin Testleri", () => {

  // TC01 - En temel GET testi. 
  it("TC01 GET status kontrol", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get"
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  // TC02 - POST metodu testi. 
  it("TC02 POST metodu testi", () => {
    cy.request({
      method: "POST",
      url: "https://httpbin.org/post",
      body: { name: "pikachu", type: "electric" }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.json.name).to.eq("pikachu")
      expect(response.body.json.type).to.eq("electric")
    })
  })

  // TC03 - Özel header gönderimi ve doğrulaması.
  
  it("TC03 Ozel header gonderimi ve dogrulamasi", () => {
  cy.request({
    method: "GET",
    url: "https://httpbin.org/headers",
    headers: {
      "User-Agent": "OdevTest/1.0",
      "X-Custom-Header": "merhaba"
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
    expect(response.body.headers["X-Custom-Header"]).to.eq("merhaba")
    expect(response.body.headers["User-Agent"]).to.include("OdevTest/1.0")
  })
 })

  // TC04 - Query parameter testi
  
  it("TC04 Query parameter testi", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get",
      qs: { name: "pikachu", type: "electric" }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.args.name).to.eq("pikachu")
      expect(response.body.args.type).to.eq("electric")
    })
  })

  // TC05 - Dinamik query parameter testi. 
  // Math.floor(Math.random() * 100) = 0-99 arası rastgele sayı
  it("TC05 Dinamik rastgele query parameter testi", () => {
    const rastgeleSayi = Math.floor(Math.random() * 100)

    cy.request({
      method: "GET",
      url: "https://httpbin.org/get",
      qs: { limit: rastgeleSayi }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.args.limit).to.eq(String(rastgeleSayi))
    })
  })

  // TC06 - Response body doğrulama.
  
  it("TC06 Response body dogrulama", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get"
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property("url")
      expect(response.body).to.have.property("headers")
      expect(response.body).to.have.property("args")
      expect(response.body.url).to.include("httpbin.org")
    })
  })

  // TC07 - Response time testi. 
  it("TC07 Response time kontrol", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get"
    }).then((response) => {
      expect(response.duration).to.be.lessThan(3000)
    })
  })

  // TC08 - PUT metodu testi.
  it("TC08 PUT metodu testi", () => {
    cy.request({
      method: "PUT",
      url: "https://httpbin.org/put",
      body: { id: 25, name: "pikachu" }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.json.id).to.eq(25)
    })
  })

  // TC09 - DELETE metodu testi.
  it("TC09 DELETE metodu testi", () => {
    cy.request({
      method: "DELETE",
      url: "https://httpbin.org/delete"
    }).then((response) => {
      expect(response.status).to.eq(200)
    })
  })

  // TC10 - 404 hata senaryosu. Olmayan endpoint.
  it("TC10 404 hata senaryosu", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/status/404",
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

  // TC11 - Content-Type header doğrulama.
 
  it("TC11 Content-Type header dogrulama", () => {
    cy.request({
      method: "GET",
      url: "https://httpbin.org/get"
    }).then((response) => {
      expect(response.headers["content-type"]).to.include("application/json")
    })
  })

  // TC12 - POST ile birden fazla alan gönderimi.
  
  it("TC12 POST rastgele id ile body dogrulamasi", () => {
    const rastgeleId = Math.floor(Math.random() * 1000)

    cy.request({
      method: "POST",
      url: "https://httpbin.org/post",
      body: { id: rastgeleId, app: "OdevTest" }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.json.id).to.eq(rastgeleId)
      expect(response.body.json.app).to.eq("OdevTest")
    })
  })

})