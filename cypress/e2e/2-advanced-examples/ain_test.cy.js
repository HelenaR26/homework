/// <reference types="cypress" />

context('Check the AIN website (FIXING THE ERROR FROM THE LESSON', () => {
    it('Open the main page and click startups', () => {
      cy.visit('https://ain.ua/')
      cy.viewport(1440, 1024)
      cy.wait(2000)
      cy.get('#menu-ukr-menyu > li.menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-1123667 > a')
      .should('be.visible')
      .click()
      cy.url().should('contain', 'startapy/')
    })
  })

  
  context('AIN.ua testing', () => {
    let searchWords;
  
    before(() => {
      cy.fixture('ain_search_data.json').then((data) => {
        searchWords = data;
      });
    });

    beforeEach(() => {
      cy.visit('https://ain.ua/');
      cy.viewport(1440, 1024);
      cy.wait(2000);
    });
  
    it('1. Open the AIN website', () => {
      cy.visit('https://ain.ua/');
      cy.viewport(1440, 1024)
      cy.wait(2000);
    });
  
    it('2. Check if the website has English version', () => {
      cy.get('a.lang-slug[href="https://ain.capital/"]').should('contain', 'EN');
      cy.wait(2000);
    });
    
    it('3. Change language to English', () => {
      cy.get('a.lang-slug[href="https://ain.capital/"]').eq(0).click({ force: true });
      cy.wait(2000);
    });

    it('4. Click on the search icon', () => {
      cy.get('.search-svg').eq(0).parent().click({ force: true });
      cy.wait(2000);
      });

    it('5. Search the first value', () => {
      cy.get('.search-svg').eq(0).parent().click({ force: true });
      const searchTerm = searchWords[0].searchWord;
      cy.get('.header-search-input').type(searchTerm).type('{enter}');
      cy.wait(2000);
      cy.get('.header-search-results').should('exist');
      cy.wait(2000);
    });
    
    it('6. Show all results', () => {
      cy.get('.search-svg').eq(0).parent().click({ force: true });
      const searchTerm = searchWords[0].searchWord;
      cy.get('.header-search-input').type(searchTerm).type('{enter}');
      cy.wait(2000);
      cy.get('.header-search-results').should('exist');
      cy.get('.header-search-all').should('contain', 'Всі результати').click();
      cy.wait(2000);
    });
  
    it('7. Clear the search field', () => {
        cy.get('.search-svg').eq(0).parent().click({ force: true });
        const searchTerm = searchWords[0].searchWord;
        cy.get('.header-search-input').type(searchTerm).type('{enter}');
        cy.wait(2000);
        cy.scrollTo(0, 0);
        cy.get('.header-search-input')
        .click()
        .type('{selectall}{backspace}');
        cy.wait(2000);
    });
  
    it('8. Search the second value and click on some result', () => {
      cy.get('.search-svg').eq(0).parent().click({ force: true });
      const searchTerm = searchWords[1].searchWord;
      cy.get('.header-search-input').type(searchTerm).type('{enter}');
      cy.wait(2000);
      cy.get('.header-search-results').should('exist');
      cy.wait(2000);
      cy.get('a[href="https://ain.ua/2023/01/23/zarplaty-testuvalnykiv-2022/"]').eq(0).click();
      cy.wait(2000);
    });

    it('9. Search the third value and close the search field', () => {
      cy.get('.search-svg').eq(0).parent().click({ force: true });
      const searchTerm = searchWords[2].searchWord;
      cy.get('.header-search-input').type(searchTerm).type('{enter}');
      cy.wait(2000);
      cy.get('.header-search-results').should('exist');
      cy.wait(3000);
      cy.get('.dc_close').click()
      cy.wait(2000);
    });

    it('10. Scroll to the very bottom of the page', () => {
      cy.scrollTo('bottom');
      cy.wait(2000);
    });
  });


  