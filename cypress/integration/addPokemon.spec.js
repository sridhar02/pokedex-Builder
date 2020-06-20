it("visit the home page", () => {
  cy.visit("/");

  cy.get('button[id="add pokemon"]').click();

  cy.get('input[id="name"]').type("charit");

  cy.get('input[id="type"]').type("grasss");

  cy.get('input[id="attack"]').type("25");

  cy.get('input[id="defense"]').type(45);

  cy.get('input[id="description"]').type("This is a greass type pokemon");

  cy.get('button[type="submit"]').click();
});
