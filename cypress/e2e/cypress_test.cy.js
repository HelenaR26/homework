describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('testtest', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax');
    cy.get('.DocSearch-Button-Placeholder').click();
    cy.get('#docsearch-input').clear('3');
    cy.get('#docsearch-input').type('3');
    cy.get('#docsearch-input').click();
    /* ==== End Cypress Studio ==== */
  });
})