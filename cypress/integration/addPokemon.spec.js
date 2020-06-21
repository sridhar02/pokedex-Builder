describe("Testing addition of a pokemon", () => {
  before(() => {
    cy.visit("/");
  });

  it("Add pokemon test", () => {
    cy.server();
    cy.route("GET", `${Cypress.env("apiUrl")}/pokemons`).as("getPokemons");
    cy.route("POST", `${Cypress.env("apiUrl")}/pokemons`).as("add-pokemon");

    // click on add pokemon
    cy.get('button[id="add pokemon"]').click();
    cy.get("form");

    // cy.contains("name").should("exist");
    cy.get('input[id="name"]').type("charit").should("have.value", "charit");

    cy.get('input[id="type"]').type("grass").should("have.value", "grass");

    cy.get('input[id="attack"]').type("25").should("have.value", "25");

    cy.get('input[id="defense"]').type(45).should("have.value", "45");

    cy.get('input[id="description"]')
      .type("This is a grass type pokemon")
      .should("have.value", "This is a grass type pokemon");

    cy.get("form").submit();
    cy.wait("@getPokemons").should("have.property", "status", 200);
    cy.wait("@add-pokemon").should("have.property", "status", 201);

    cy.on("window:alert", (str) => {
      expect(str).to.equal(`New Pokemon successfully created`);
    });

    // cy.contains("New Pokemon successfully created");
  });

  // cy.server("http:localhost:3000/pokemons");
  // cy.server();

  // cy.route('GET',"/pokemons").as('getPokemons')

  // cy.wait('@getPokemons')
  // cy.request("/pokemons").then((response) => {
  //   expect(response.body).to.have.property("code", 200);
  // });

  // cy.get('button[type="submit"]').click();
});
