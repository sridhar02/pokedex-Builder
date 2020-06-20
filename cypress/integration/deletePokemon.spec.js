it("select a pokemon from the list and update the details", () => {
  
  cy.visit("/");

  cy.contains("Bulbasaur").click();

  cy.get('button[id="delete"]').click();

});
