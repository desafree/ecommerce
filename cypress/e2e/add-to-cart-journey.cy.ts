describe("add product to cart from home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("add to cart through category", () => {
    it("add product to cart passing through category:headphones and product pages", () => {
      cy.getByData("link-headphones").click();
      cy.location("pathname").should("eq", "/headphones");
      cy.getByData("link-xx59-headphones").click();
      cy.location("pathname").should("eq", "/headphones/xx59-headphones");
      cy.get(".sc-dkrFOg > :nth-child(2)").should("contain.text", "1");
      cy.getByData("btn-add-to-cart").click();
      cy.get("[data-test-id=btn-cart]:visible").click();
      cy.get(".MuiBox-root > :nth-child(1)").contains("XX59");
      cy.get(".sc-gKPRtg > :nth-child(2)").contains("1");
    });

    it("add product to cart passing through category:speakers and product pages", () => {
      cy.getByData("link-speakers").click();
      cy.location("pathname").should("eq", "/speakers");
      cy.getByData("link-zx7-speaker").click();
      cy.location("pathname").should("eq", "/speakers/zx7-speaker");
      cy.get(".sc-dkrFOg > :nth-child(2)").should("contain.text", "1");
      cy.getByData("btn-add-to-cart").click();
      cy.get("[data-test-id=btn-cart]:visible").click();
      cy.get(".MuiBox-root > :nth-child(1)").contains("ZX7");
      cy.get(".sc-gKPRtg > :nth-child(2)").contains("1");
    });

    it("add product to cart passing through category:earphones and product pages", () => {
      cy.getByData("link-earphones").click();
      cy.location("pathname").should("eq", "/earphones");
      cy.getByData("link-yx1-earphones").click();
      cy.location("pathname").should("eq", "/earphones/yx1-earphones");
      cy.get(".sc-dkrFOg > :nth-child(2)").should("contain.text", "1");
      cy.getByData("btn-add-to-cart").click();
      cy.get("[data-test-id=btn-cart]:visible").click();
      cy.get(".MuiBox-root > :nth-child(1)").contains("YX1");
      cy.get(".sc-gKPRtg > :nth-child(2)").contains("1");
    });
  });

  context("add to cart through thumbnail", () => {
    it("add product to cart passing through product thumbnail1", () => {
      cy.getByData("link-thumbnail1").click();
      cy.location("pathname").should("eq", "/speakers/zx9-speaker");
      cy.get(".sc-dkrFOg > :nth-child(2)").should("contain.text", "1");
      cy.getByData("btn-add-to-cart").click();
      cy.get("[data-test-id=btn-cart]:visible").click();
      cy.get(".MuiBox-root > :nth-child(1)").contains("ZX9");
      cy.get(".sc-gKPRtg > :nth-child(2)").contains("1");
    });

    it("add product to cart passing through product thumbnail2", () => {
      cy.getByData("link-thumbnail2").click();
      cy.location("pathname").should("eq", "/speakers/zx7-speaker");
      cy.get(".sc-dkrFOg > :nth-child(2)").should("contain.text", "1");
      cy.getByData("btn-add-to-cart").click();
      cy.get("[data-test-id=btn-cart]:visible").click();
      cy.get(".MuiBox-root > :nth-child(1)").contains("ZX7");
      cy.get(".sc-gKPRtg > :nth-child(2)").contains("1");
    });

    it("add product to cart passing through product thumbnail3", () => {
      cy.getByData("link-thumbnail3").click();
      cy.location("pathname").should("eq", "/earphones/yx1-earphones");
      cy.get(".sc-dkrFOg > :nth-child(2)").should("contain.text", "1");
      cy.getByData("btn-add-to-cart").click();
      cy.get("[data-test-id=btn-cart]:visible").click();
      cy.get(".MuiBox-root > :nth-child(1)").contains("YX1");
      cy.get(".sc-gKPRtg > :nth-child(2)").contains("1");
    });
  });

  it("add product to cart passing through header", () => {
    cy.getByData("link-header").click();
    cy.location("pathname").should("eq", "/speakers/xx99-mark-two-headphones");
    cy.get(".sc-dkrFOg > :nth-child(2)").should("contain.text", "1");
    cy.getByData("btn-add-to-cart").click();
    cy.get("[data-test-id=btn-cart]:visible").click();
    cy.get(".MuiBox-root > :nth-child(1)").contains("XX99");
    cy.get(".sc-gKPRtg > :nth-child(2)").contains("1");
  });
});
