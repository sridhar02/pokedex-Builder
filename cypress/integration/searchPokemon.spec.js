it("select a pokemon from the list and update the details", () => {
  cy.visit("/");

  cy.get('input[id="search"]').type("Charizard");

  cy.get('input[variant="outlined"]').click()
});
