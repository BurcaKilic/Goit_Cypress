describe('ilk dersimiz',function(){

 it("TC01 ilk test senaryomuz", function(){

    //1.cy cypress test kütüphanesinin temel komutudur
    //2.visit()-->url gider
    cy.visit('https://www.edu.goit.global/account/login')

    //3.get() -->locate
    //4.Type() --> metin göndermek için kullanılır.
    cy.get('#user_email').type("deneme");

    //5. Clear() --> Metin silmeye yarar
    //6. as() -->takma isim (allias) olarak bir elemente isim verebiliriz.
    //cy.get('#user_email').as('email');
    //cy.get('@email').clear();

    // locate -selectors
    /*
    1. id #
    2. class .
    3. attribute=value --> [name='email']
    */
    cy.get('[name="password"]').type('1234567890');
    //7. click() --> sol tıklama yapar
    cy.get('.eckniwg2').click();
    // 8. contains() --> locate almak için kullanılır, text içermesine göre locate alabiliriz.
    // contains('Email')
    // 9.url() --> sayfanınr url ini verecektir.
    cy.url().should('include','tps://www.edu.goit.global')
    //10.Title() --> sayfanın başlığını alır
    cy.title().should('include','Log in')
    
    //11. wait(2000) -->milisaniye kadar bekler
    
    //cy.wait(3000);
    
    //12. dblclick() --> çift tıklama yapar
    cy.get('.eckniwg2').dblclick();
    cy.wait(3000);

     //13. rightclick() --> sağ click yapar
    cy.get('.eckniwg2').rightclick();
    cy.wait(2000);

     //14. Should() --> ilk başta kullanılır. Çoklu kullanımda bundan sonra and() ile bağlanır
     //should('have.text','expected')
     //be.visible -> Elemanın görünür olduğunu doğrular
     //not.be.visible --> Elemanın görünür olmadığını doğrular.
     //exist -->header sınıfındaki elemanın var olup olmadığını doğrular.
     //not.exist --> var olmadığını doğrular.
     //have.css -->Css doğrulaması
     //should('have.css','background color', '#ff6b0a') --> butonun rengini kontrol eder
     //have.value','myUsername'--> value değerini kontrol etmek için
     //have.class','active' --> class değerinin aktif olduğunu doğrular
     //be.checked --> Check box kontrolü
     //not.be.checked -->
    cy.get('.eckniwg2').should('have.text','Log in').
    and('be.visible').
    and('exist')
     //cy.get(':nth-child(1) > .next-kg6b5i > .next-bdn3jy').should('equal','Email');
     //15.Check --> check box veya radio button için kontrol
     //cy.get(ilgili element).check(). --> gerçekten tıklandı mı diye şöyle devam edilir.
     //.should(be.checked);
     //16.be.disabled -->devredışı olduğunu doğrular
     //17. Hover()--> Bir elementin üstüne fareyi götürür.
     //cy.get().hover()
     })
    
 it('TC02 login butonunun dogrulanmasi', function(){
  cy.visit('https://www.edu.goit.global/tr/account/login')
  cy.get('.next-1jphuq5').should('have.text','Giriş yap')
  cy.get('.eckniwg2').should('have.css','background-color','rgb(255, 107, 10)')
  
  cy.get('[name="email"]').type('user888@gmail.com')
  cy.get('[name="password"]').type('1234567890')
  cy.screenshot()
  cy.get('.eckniwg2').click();
  cy.wait(5000);
  //scrollIntoview() --> Bir element görünür olana kadar sayfayı kaydırır.
  cy.get('#go-to-the-course-homepage-widget').scrollIntoView();
  //scrollTo(0,1000); sayfayı 1000 px aşağı kaydırır
  cy.scrollTo('bottom'); //sayfanın en altına kaydırır
  cy.wait(5000);
  cy.scrollTo('center'); //Sayfanın ortasına kaydırır
  //cy.screenshot(); tüm sayfanın ekran fotoğrafını alır ve screenshots klasorune kaydeder.
  //bu kodu hangi işlemden ve elementten sonra yazarsan oranın ekran görüntüsünü alır.
  //örnek loginden sonra yazarsan login sonrası görüntüyü alır.
  cy.screenshot();
  
 })  
    
    
})
