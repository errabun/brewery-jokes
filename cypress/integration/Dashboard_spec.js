describe('Dashboard', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should be greeted with a welcome message when page loads', () => {

    cy.get('.welcome').should('have.text', 'Welcome to Brew n\' Jokes')
  })

  it('Should instruct user to find nearby breweries', () => {

    cy.get('.step').should('have.text', 'Step 1: Find breweries near you')
  })

  it('Should be able to enter a zip code in the input field and click on button "Find breweries" to be redirected to breweries', () => {

    cy.intercept('https://api.openbrewerydb.org/breweries?by_postal=80216', [
      {
        "id": 11166,
        "obdb_id": "great-divide-brewing-co-rino-barrel-bar-denver",
        "name": "Great Divide Brewing Co - RiNo Barrel Bar",
        "brewery_type": "micro",
        "street": "1812 35th St",
        "address_2": null,
        "address_3": null,
        "city": "Denver",
        "state": "Colorado",
        "county_province": null,
        "postal_code": "80216-3665",
        "country": "United States",
        "longitude": "-104.979247",
        "latitude": "39.7703322",
        "phone": "3032969460",
        "website_url": "http://greatdivide.com/",
        "updated_at": "2018-08-24T00:00:00.000Z",
        "created_at": "2018-07-24T00:00:00.000Z"
      },
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
      .get('.zip-input').type('80216')
      .get('.button').click()
      .url().should('include', '/breweries/80216')
  })

  it('Should only be able to enter numbers into input field', () => {

    cy.get('.zip-input').type('jslkn5lskd').should('have.value', '5')
  })
})
