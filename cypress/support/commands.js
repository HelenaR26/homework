// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginAndSetCookie', (url, cookieN, cookieV) => {
  cy.visit(url)
  cy.setCookie(cookieN, cookieV)
})

Cypress.Commands.add('loginAndSetLocalStorage', () => {
  cy.request({
    method: 'POST',
    url: '/api/auth/login',
    body: {
      email: 'email@dmytro.com',
      password: 'abc123',
    },
  }).then((response) => {
    const accessToken = response.body.token;
    // Store the access token in local storage
    localStorage.setItem('auth-token', accessToken)
  })
})

// Cypress.Commands.add('createCategoryAndPosition', (categoryName, positionName, positionPrice) => {
//   const accessToken = window.localStorage.getItem('auth-token')
//   // First request to get the list of categories
//   cy.request({
//     method: 'GET',
//     url: 'api/categories',
//     headers: {
//       authorization: accessToken,
//     },
//   }).then((response) => {
//     const categories = response.body // Get all categories

//     let existingCategory;
//     for (const categoryId in categories) {
//       if (categories[categoryId].name === categoryName) {
//         existingCategory = categories[categoryId]
//         break
//       }
//     }

//     if (!existingCategory) {
//       // No category with this name, create one
//       cy.request({
//         method: 'POST',
//         url: 'api/category',
//         body: {
//           name: categoryName,
//         },
//         headers: {
//           authorization: accessToken,
//         },
//       }).then((categoryResponse) => {
//         const categoryId = categoryResponse.body._id
//         cy.log(`Created category with ID: ${categoryId}`)

//         // Create a position inside the category
//         cy.request({
//           method: 'POST',
//           url: 'api/position',
//           body: {
//             category: categoryId,
//             cost: positionPrice,
//             name: positionName,
//           },
//           headers: {
//             authorization: accessToken,
//           },
//         }).then((positionResponse) => {
//           const positionId = positionResponse.body._id;
//           cy.log(`Created position with ID: ${positionId}`)
//         })
//       })
//     }
//   })
// })

Cypress.Commands.add('createNewCategory', (category) => {

  const accessToken = window.localStorage.getItem('auth-token')
  
  cy.request({
      method: 'POST',
      url: 'api/category',
      body: {
          name: category
      },
      headers: {
          authorization: `${accessToken}`
      }
  }).then((response) => {
      // steps fot getting the category id for the next iterations
      const categoryId = response.body._id;
// Store the categoryId in Cypress environment variable
      Cypress.env('categoryId', categoryId);

      return response.body
  })
})

Cypress.Commands.add('createProduct', (position) => {

  const accessToken = window.localStorage.getItem('auth-token');
  const categoryId = Cypress.env('categoryId');

  cy.request({
      method: 'POST',
      url: 'api/position',
      body: {
          category: categoryId,
          cost: 1,
          name: position
      },
      headers: {
          authorization: `${accessToken}`
      }
  }).then((response) => {
      return response.body
  })
})

Cypress.Commands.add('removeCategoryById', () => {
  const accessToken = window.localStorage.getItem('auth-token')
  const categoryId = Cypress.env('categoryId');

  cy.request({
    method: 'DELETE',
    url: `/api/category/${categoryId}`,
    headers: {
      authorization: `${accessToken}`
    }
  }).then((response) => {
    expect(response.status).to.eq(200)
  })

})




