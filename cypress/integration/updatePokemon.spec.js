describe("Testing addition of a pokemon", () => {
  before(() => {
    cy.visit("/");
  });

  const apiUrl = Cypress.env("apiUrl");

  it("select a pokemon from the list and update the details", () => {
    cy.server();

    cy.route("PUT", `${apiUrl}/pokemons/*`).as("update-pokemon");
    cy.route("GET", `${apiUrl}/pokemons`).as("getPokemons");

    cy.contains("Bulbasaur").click();
    cy.get('button[id="update"]').click();

    cy.get('input[id="name"]').clear().type("chait");
    cy.get('input[id="type"]').clear().type("thunder");
    cy.get('input[id="attack"]').clear().type("75");
    cy.get('input[id="defense"]').clear().type(56);
    cy.get('input[id="description"]').type("This is a thunder type pokemon");

    cy.get("form").submit();

    cy.on("window:alert", (str) => {
      expect(str).to.equal(`Pokemon successfuly updated`);
    });

    cy.wait("@update-pokemon").should("have.property", "status", 200);
    cy.wait("@getPokemons").should("have.property", "status", 200);
  });
});
