describe("Edit Item", () => {
  it("Edit Todo Item", () => {
    cy.addItem("Teste");
    cy.editItem("Editado");
  });
});