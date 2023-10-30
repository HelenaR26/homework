describe('Save URLs to JSON', () => {
  it('should save URLs to a JSON file', () => {
    const urls = [
      'https://docs.cypress.io/api/commands/task',
      'https://docs.cypress.io/api/commands/viewport',
      'https://docs.cypress.io/api/commands/wait'
    ];

    cy.task('saveUrls', { urls, filename: 'my_urls' });
  });
});