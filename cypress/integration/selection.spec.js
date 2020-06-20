it("select a pokemon from the list and update the details", () => {
  cy.visit("/");
  // cy.get('button[id="Select a pokemon"]').click({multiple:true});
  cy.contains("Bulbasaur").click();

  cy.get('button[id="update"]').click();

  cy.get('input[id="name"]').clear().type("chait");

  cy.get('input[id="type"]').clear().type("thunder");

  cy.get('input[id="attack"]').clear().type("75");

  cy.get('input[id="defense"]').clear().type(56);

  cy.get('input[id="description"]').type("This is a thunder type pokemon");

  cy.get('button[type="submit"]').click()
});
