describe('Error', () => {

  it('Should display an error message if the fetch response was not ok', () => {

    cy.visit('http://localhost:3000/')
      .get('.zip-input').type('80216')
      .intercept('https://api.openbrewerydb.org/breweries?by_postal=80216', {})
      .get('.button').click()
      .get('.error-msg').should('be.visible')

  })
})

describe('Breweries', () => {

  it('Should fetch the breweries associated with the zip code input', () => {

    cy.intercept('https://api.openbrewerydb.org/breweries?by_postal=80216', [
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
      .visit('http://localhost:3000/')
      .get('.zip-input').type('80216')
      .get('.button').click()
      .get('h3.brew-name').should('have.text', 'Mockery Brewing')
  })

  it('Should tell user if zip search did not return any breweries', () => {

    cy.visit('http://localhost:3000/')
      .get('.zip-input').type('90210')
      .get('.button').click()
      .get('.no-brew').should('be.visible')
  })

  it('Should instruct the user to select a brewery', () => {

    cy.intercept('https://api.openbrewerydb.org/breweries?by_postal=80216', [
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
      .visit('http://localhost:3000/')
      .get('.zip-input').type('80216')
      .get('.button').click()
      .get('.two').should('be.visible')
      .and('have.text', 'Step 2: Select a brewery to visit!')
  })

})
