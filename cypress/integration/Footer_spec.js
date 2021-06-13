describe('Footer', () => {

  it('Should have a link to Eric\'s Github page', () => {

    cy.visit('http://localhost:3000/')
      .get('.gh-link').invoke('attr', 'href')
      .should('eq', 'https://github.com/errabun')
  })
})
