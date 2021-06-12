describe('Dashboard', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should be greeted with a welcome message when page loads', () => {

    cy.get('h1').should('have.text', 'Welcome to Brew n\' Jokes')
  })
})
