describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('123123', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax');
    cy.get('.DocSearch-Button-Placeholder').click();
    cy.get('#docsearch-input').clear();
    cy.get('#docsearch-input').type('3');
    /* ==== End Cypress Studio ==== */
  });
})