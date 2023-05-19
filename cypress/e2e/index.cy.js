describe("Index", () => {
  it("says Our reports", () => {
    cy.visit("/");
    cy.get("a").should("contain", "Our reports");
  });
});
