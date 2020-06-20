it("select a pokemon from the list and update the details", () => {
  cy.visit("/");

//   cy.get('button[id="Select a pokemon"]').click({multiple:true});
  
  cy.contains("Charizard").click();

});
