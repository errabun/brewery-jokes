describe('Recap', () => {

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
      .get('.brew-select').click()
      .get('.joke-select').click()
  })

  it('Should display the name and address of the selected brewery', () => {

    cy.get('.user-selections').should('have.text', "You're headed to Mockery Brewing located at 3501 Delgany St in Denver, Colorado")
  })

  it('Should remind user to use the joke they selected', () => {

    cy.get('.reminder').should('be.visible')
      .and('have.text', '☟  Don\'t forget to try out the joke you selected  ☟')
  })

  it('Should cheers the user and encourage them to have fun', () => {

    cy.get('.cheers').should('be.visible')
      .and('have.text', 'Cheers, have fun!')
  })

  it('Should display the joke the user selected', () => {

    cy.get('.user-joke').should('be.visible')
      .and('have.text', '"My dog used to chase people on a bike a lot. It got so bad I had to take his bike away."')
  })
})
