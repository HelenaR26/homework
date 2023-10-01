/// <reference types="cypress" />

describe('Cypress UI Test for eq Command Documentation', () => {
    beforeEach(() => {
        cy.visit('https://docs.cypress.io/api/commands/eq#Syntax');
    });
  
    it('1. Verify the page title', () => {
        cy.title().should('contain', 'eq').wait(2000);
    });
  
    it('2. Click on the "Syntax" button', () => {
        cy.contains('Syntax').click().wait(2000);
    });
  
    it('3. Verify the presence of the "Syntax" header', () => {
        cy.get('h2').should('contain', 'Syntax').wait(2000);
    });
  
    it('4. Activate the search field', () => {
        cy.get('.DocSearch').wait(3000).click();
        cy.get('.DocSearch-SearchBar').should('be.visible').wait(2000);
    });
  
    it('5. Fill the input with 3', () => {
        cy.get('.DocSearch').wait(3000).click();
        cy.get('.DocSearch-SearchBar').should('be.visible').wait(2000);
        cy.get('.DocSearch-Input').type('3').wait(3000);
    });
  
    it('6. Clear the input', () => {
        cy.get('.DocSearch').wait(3000).click();
        cy.get('.DocSearch-SearchBar').should('be.visible').wait(2000);
        cy.get('.DocSearch-Input').type('3').wait(3000);
        cy.get('.DocSearch-Input').clear().wait(2000);
    });
  
    it('7. Verify the input is empty', () => {
        cy.get('.DocSearch').wait(3000).click();
        cy.get('.DocSearch-SearchBar').should('be.visible').wait(2000);
        cy.get('.DocSearch-Input').type('3').wait(3000);
        cy.get('.DocSearch-Input').clear().wait(2000);
        cy.get('.DocSearch-Input').should('have.value', '').wait(2000);
    });
  
    it('8. Click on the first result link', () => {
        cy.get('.DocSearch').wait(3000).click();
        cy.get('.DocSearch-SearchBar').should('be.visible').wait(2000);
        cy.get('.DocSearch-Input').type('3').wait(3000);
        cy.get('#docsearch-item-3').should('contain', '3rd Party').wait(2000).click();
    });
  
    it('9. Go back from the search result page', () => {
        cy.get('.DocSearch').wait(3000).click();
        cy.get('.DocSearch-SearchBar').should('be.visible').wait(2000);
        cy.get('.DocSearch-Input').type('3').wait(3000);
        cy.get('#docsearch-item-3').should('contain', '3rd Party').wait(2000).click();
        cy.wait(2000).go('back');
      });
  
    it('10. Scroll to the bottom of the page', () => {
        cy.wait(2000).scrollTo('bottom').wait(2000);
    });
  });
  