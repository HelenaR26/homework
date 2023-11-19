import { faker } from "@faker-js/faker"
import { ObjectId } from 'mongodb'

//list of commands
// docker run --name mongo -p 27017:27017 -d mongodb/mongodb-community-server:6.0-ubuntu2204
//docker exec -it mongo mongosh
//npm run cy:run_chrome -- --spec cypress/e2e/custom_scenarios/query_mongo.cy.js

describe('Find data', () => {

    context('usage of mongodb', () =>{
        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult)
            })
        })

        it('login by UI', () => {
            cy.request({
                method: 'POST',
                url: '/api/users/authenticate',
                body: {username:"TestElena1",password:"Test_12345"},
            }).then((response) => {
            const authToken = response.body.token
            Cypress.env('authTNext13', authToken)
            })
        })

        it('create user', () => {
            cy.request({
                method: 'POST',
                url: '/api/users/register',
                headers: {
                    Authorization: `Bearer ${Cypress.env('authTNext13')}`
                },
                body: {
                    firstName: 'fff4',
                    lastName: 'sss4',
                    username: 'fffsss4',
                    password: 'abc1234',
                }
            })
        })
  

        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult)
            })
        })

    })
})

