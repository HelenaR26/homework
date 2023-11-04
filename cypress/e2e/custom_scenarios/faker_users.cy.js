import { ObjectId } from 'mongodb';
import { faker } from "@faker-js/faker";

context('UI & API request', () => {
  it('Login by UI', () => {
    cy.request({
      method: 'POST',
      url: '/api/users/authenticate',
      body: { username: "TestElena", password: "Test_12345" }
    }).then((response) => {
      const authToken = response.body.token
      Cypress.env('authNext', authToken)
    })
  })

  it('Create user with Faker data', () => {
    if (!Cypress.env('userCreated')) {
      const userData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
      }

      cy.request({
        method: 'POST',
        url: '/api/users/register',
        headers: {
          Authorization: `Bearer ${Cypress.env('authNext')}`,
        },
        body: userData,
      }).then((response) => {
        expect(response.status).to.eq(200)
        Cypress.env('userCreated', true)
      })
    }
  })

  it('FindMany', () => {
    cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
      cy.task('log', mongoresult)
    })
  })
})