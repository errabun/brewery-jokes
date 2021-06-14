describe('Favorites', () => {

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
      .intercept('https://icanhazdadjoke.com/', {
        "id": "R7UfaahVfFd",
        "joke": "My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.",
        "status": 200
      })
  })

  it('User should be able to add a brewery to their favorites list', () => {

    cy.get('.brew-fav').click()
      .get('.favorites').click()
      .get('#12709').should('be.visible')
      .and('have.text', 'Mockery Brewing in Denver, Colorado')
  })

  it('User should be able to add a joke to their favorites list', () => {

    cy.get('.brew-select').click()
      .get('.joke-fav').click()
      .get('.favorites').click()
      .get('li').should('be.visible')
      .and('have.text', 'My dog used to chase people on a bike a lot. It got so bad I had to take his bike away.')
  })

  it('Should have a header to the list of favorite breweries', () => {

    cy.get('.favorites').click()
      .get('.brew-head').should('be.visible')
      .and('have.text', 'Favorite Breweries')
  })
})
