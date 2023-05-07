describe("Edit Item", () => {
  it("Edit Todo Item", () => {
    cy.addItem("Tomar café");
    cy.editItem("Bater o ponto");
  });
});