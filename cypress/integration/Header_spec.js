describe('Header', () => {

  beforeEach(() => {

    cy.visit('http://localhost:3000/')
  })

  it('Should display the name of the app, Brew n\' Jokes in header', () => {

    cy.get('.title').should('have.text', '🍺  Brew n\' Jokes  🍺 ')
  })

  it('Should be able to click on app title in header to be redirected back to dashboard', () => {

    cy.get('.zip-input').type('80216')
      .get('.button').click()
      .url().should('include', '/breweries/80216')
      .get('.title').click()
      .url().should('equal', 'http://localhost:3000/')
  })

  it('Should display a link to the favorites component', () => {

    cy.get('.nav-links').should('have.text', 'Favorites')
  })

  it('Should redirect user to the favorites component if favorites link in header is clicked', () => {

    cy.get('.zip-input').type('80216')
      .get('.button').click()
      .url().should('include', '/breweries/80216')
      .get('.favorites').click()
      .url().should('equal', 'http://localhost:3000/favorites')
  })
})
