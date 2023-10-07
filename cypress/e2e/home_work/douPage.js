class DouPage {
  visit() {
    cy.visit('https://dou.ua/')
  }

  getLogo() {
    return cy.get('.b-head .logo');
  }

  getJobsButton() {
    return cy.contains('Робота');
  }

  getSearchInput() {
    return cy.get('.search .inp')
  }

}

export default new DouPage()