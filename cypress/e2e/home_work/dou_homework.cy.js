import DouPage from '../home_work/douPage'

describe('Dou.ua Test', () => {
  beforeEach(() => {
    DouPage.visit()
  })

  it('should have a visible logo', () => {
    DouPage.getLogo().should('be.visible')
  })

  it('should click on the Jobs button', () => {
    DouPage.getJobsButton().click()
  })
  
  it('should click on the search input, type "Cypress", and wait for 2 seconds', () => {
    DouPage.getSearchInput().click().type('Cypress{enter}')
  })
})