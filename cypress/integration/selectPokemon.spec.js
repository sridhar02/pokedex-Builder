describe("Testing addition of a pokemon", () => {
  before(() => {
    cy.visit("/");
  });

  it("select a pokemon from the list and update the details", () => {
    cy.contains("Charizard").click();
    cy.get('#name').should('be.visible')
    cy.contains('Charizard').should('be.visible')
    cy.contains('Fire').should('be.visible')
    cy.contains('Flying').should('be.visible')

  });
});
