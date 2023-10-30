describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('Check cypress pricing', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('/');
    cy.get(':nth-child(5) > .nav-bar-link').click();
    /* ==== End Cypress Studio ==== */
  });
})