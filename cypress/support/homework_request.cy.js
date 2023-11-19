describe('Login with API request', () => {
    beforeEach(() => {
      cy.loginAndSetLocalStorage()
    })
  
    it('Send login data', () => {
      cy.visit('/overview');
      cy.get('div.card-content', { timeout: 5000 }).eq(0).should('be.visible')
    })
  
    it('Create category and position', () => {
      cy.createCategoryAndPosition('Test Category from Elena', 'New Position', 50, { timeout: 5000 })
      cy.visit('/categories', { timeout: 5000 })
      cy.scrollTo('bottom', { duration: 3000 })
      cy.get('.collection-item').contains('Test Category from Elena').click({ force: true })
      cy.wait(5000)
      cy.contains('New Position').should('be.visible')
    })

    it('remove the category', () => {
      cy.removeCategoryById()
      cy.visit(`/categories/${categoryId}`)
      .should('not.be.visible')
    })
  })
  