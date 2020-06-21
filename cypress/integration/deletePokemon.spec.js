describe("delete pokemon tests", () => {
  before(() => {
    cy.visit("/");
  });

  const apiUrl = Cypress.env("apiUrl");

  it("select a pokemon from the list and delete the pokemon", () => {
    cy.server();

    cy.route("DELETE", `${apiUrl}/pokemons/*`).as("delete-pokemon");

    cy.route("GET", `${apiUrl}/pokemons`).as("getPokemons");

    cy.contains("Meltan").click();

    cy.get('button[id="confimation"]').click();

    cy.get('button[id="delete"]').click();

    cy.wait("@delete-pokemon").should("have.property", "status", 200);

    cy.wait("@getPokemons").should("have.property", "status", 200);
  });
});
