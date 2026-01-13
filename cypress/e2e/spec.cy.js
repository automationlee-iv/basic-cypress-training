describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('contain', 'Kitchen Sink')
  })

  it('login', function() {
  cy.visit('https://izytesting.com/')
  cy.url().should('contain','izytesting.com');
  })
});