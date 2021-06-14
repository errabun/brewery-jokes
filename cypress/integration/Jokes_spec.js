describe('Jokes', () => {

  beforeEach(() => {

    cy.visit('http://localhost:3000/')
      .get('.zip-input').type('80216')
      .intercept('https://api.openbrewerydb.org/breweries?by_postal=80216', [
        {
          "id": 12709,
          "obdb_id": "mockery-brewing-denver",
          "name": "Mockery Brewing",
          "brewery_type": "micro",
          "street": "3501 Delgany St",
          "address_2": null,
          "address_3": null,
          "city": "Denver",
          "state": "Colorado",
          "county_province": null,
          "postal_code": "80216-3617",
          "country": "United States",
          "longitude": "-104.9797349",
          "latitude": "39.7712389",
          "phone": "3039532058",
          "website_url": "http://Mockerybrewing.com",
          "updated_at": "2018-08-24T00:00:00.000Z",
          "created_at": "2018-07-24T00:00:00.000Z"
        }
      ])
      .get('.button').click()
      .get('.brew-select').click()
  })

  it('Should display a random, fetched joke', () => {

    cy.get('.cur-joke').should('be.visible')
  })

  it('Should give user instructions to find a good joke', () => {

    cy.get('.step').should('be.visible')
      .and('have.text', 'Step 3: Find a good joke')
  })

  it('Should give user option to click button to select a joke and be redirected to the recap component', () => {

    cy.get('.joke-select').click()
      .url().should('eq', 'http://localhost:3000/recap')
  })

  it('Should allow user to get another random joke by clicking button', () => {

    cy.intercept('https://icanhazdadjoke.com/', {
      "id": "R7UfaahVfFd",
      "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
      "status": 200
    })
      .get('.fetch-joke').click()
      .get('.cur-joke').should('have.text', 'My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.')
  })
})
