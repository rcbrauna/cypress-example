describe("Delete Item", () => {
  it("Delete Todo Item", () => {
    cy.addItem("Tomar café");
    cy.endItem();
  });
});
