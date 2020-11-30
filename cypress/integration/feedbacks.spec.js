describe('Feedbacks page', () => {
  it('Navigate to feedbacks page', () => {
    cy.visit('/#/feedbacks');

    cy.get('[cy-tag="user-btn"]')
      .should('have.length', 3)
      .first()
      .should('contain', 'John Doe')
      .click();

    cy.get('#feedbacks-wrap .card-title').should('contain', 'Fun place!');

    cy.get('[cy-tag="user-btn"]')
      .last()
      .should('contain', 'Carl Smith')
      .click();

    cy.get('#feedbacks-wrap .card-title').should('contain', 'Will come back');
  });
});
