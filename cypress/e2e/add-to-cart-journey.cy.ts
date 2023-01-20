describe("can add a product to the cart starting from the homepage", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/items", {
      fixture: "data.json",
    });
  });

  beforeEach(() => {
    cy.visit("/");
  });

  context(
    "can add a product to the cart passing through the category page",
    () => {
      it("can add a product to the cart passing through the category-headphones page", () => {
        cy.getByData("headphones-go-to").click();
        cy.location("pathname").should("eq", "/headphones");
        cy.getByData("xx59-headphones-go-to").click();
        cy.location("pathname").should("eq", "/headphones/xx59-headphones");
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.getByData("add-to-cart").click();
        cy.get("[data-test-id=cart-toggle]:visible").click();
        cy.getByData("cart-item-name").contains("XX59");
        cy.getByData("cart-item-qty").contains("1");
      });

      it("can add a product to the cart passing through the category-speakers page", () => {
        cy.getByData("speakers-go-to").click();
        cy.location("pathname").should("eq", "/speakers");
        cy.getByData("zx7-speaker-go-to").click();
        cy.location("pathname").should("eq", "/speakers/zx7-speaker");
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.getByData("add-to-cart").click();
        cy.get("[data-test-id=cart-toggle]:visible").click();
        cy.getByData("cart-item-name").contains("ZX7");
        cy.getByData("cart-item-qty").contains("1");
      });

      it("can add a product to the cart passing through the category-earphones page", () => {
        cy.getByData("earphones-go-to").click();
        cy.location("pathname").should("eq", "/earphones");
        cy.getByData("yx1-earphones-go-to").click();
        cy.location("pathname").should("eq", "/earphones/yx1-earphones");
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.getByData("add-to-cart").click();
        cy.get("[data-test-id=cart-toggle]:visible").click();
        cy.getByData("cart-item-name").contains("YX1");
        cy.getByData("cart-item-qty").contains("1");
      });
    }
  );

  context(
    "can add a product to the cart passing through the products thumbnail in the homepage",
    () => {
      it("can add a product to the cart passing through the zx9-speaker thumbnail in the homepage", () => {
        cy.getByData("zx9-speaker-go-to").click();
        cy.location("pathname").should("eq", "/speakers/zx9-speaker");
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.getByData("add-to-cart").click();
        cy.get("[data-test-id=cart-toggle]:visible").click();
        cy.getByData("cart-item-name").contains("ZX9");
        cy.getByData("cart-item-qty").contains("1");
      });

      it("can add a product to the cart passing through the zx7-speaker thumbnail in the homepage", () => {
        cy.getByData("zx7-speaker-go-to").click();
        cy.location("pathname").should("eq", "/speakers/zx7-speaker");
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.getByData("add-to-cart").click();
        cy.get("[data-test-id=cart-toggle]:visible").click();
        cy.getByData("cart-item-name").contains("ZX7");
        cy.getByData("cart-item-qty").contains("1");
      });

      it("can add a product to the cart passing through the yx1-earphones thumbnail in the homepage", () => {
        cy.getByData("yx1-earphones-go-to").click();
        cy.location("pathname").should("eq", "/earphones/yx1-earphones");
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.getByData("add-to-cart").click();
        cy.get("[data-test-id=cart-toggle]:visible").click();
        cy.getByData("cart-item-name").contains("YX1");
        cy.getByData("cart-item-qty").contains("1");
      });
    }
  );

  it("can add a product to the cart passing through the header section in the homepage", () => {
    cy.getByData("xx99-mark-two-headphones-go-to").click();
    cy.location("pathname").should("eq", "/speakers/xx99-mark-two-headphones");
    cy.getByData("quantity-to-add").should("contain.text", "1");
    cy.getByData("add-to-cart").click();
    cy.get("[data-test-id=cart-toggle]:visible").click();
    cy.getByData("cart-item-name").contains("XX99");
    cy.getByData("cart-item-qty").contains("1");
  });
});
