describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('h1').should('contain', 'Kitchen Sink')
  })
});

it('login', function() {
  cy.visit('https://izytesting.com/')
  cy.get('#home a.ud-main-btn').click();
  cy.get('[name="name"]').click();
  cy.get('[name="name"]').type('test');
  cy.get('#border-btn-login').click();
});