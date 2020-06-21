describe("testing select a pokemon", () => {
  before(() => {
    cy.visit("/");
  });

  it("select a pokemon from the list and update the details", () => {
    cy.get('input[id="search"]').type("Charizard");
    // cy.get('select').select('Charizard') // Select the 'user-1' option
    // cy.contains("Charizard").click();

  });

});
