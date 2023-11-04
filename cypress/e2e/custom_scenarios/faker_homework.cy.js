import { ObjectId } from 'mongodb';
import { faker } from "@faker-js/faker";

context('Create and Check User', () => {
    it('create user with Faker data', () => {
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

          Cypress.env('userCreated', true);
        })
      }
  
    })
  })