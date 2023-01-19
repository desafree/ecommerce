describe("cart should perform cart-actions correctly from both cart component and product detail page", () => {
  beforeEach(() => {
    cy.visit("/speakers/xx99-mark-two-headphones");
  });

  context(
    "cart should perform cart-actions correctly if the item is added from the product page",
    function () {
      it("cart should perform cart-actions correctly if the item is added from the product page and is the only one inside the cart", () => {
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.getByData("add-to-cart").as("addToCart").click();
        cy.get("[data-test-id=cart-toggle]:visible").as("toggleCart").click();
        cy.getByData("cart-item-name").contains("XX99 Mark II");
        cy.getByData("cart-item-price").contains("2999");
        cy.getByData("cart-item-qty").contains("1");
        cy.clickOutside();
        cy.get("@addToCart").click();
        cy.get("@toggleCart").click();
        cy.getByData("cart-items-total").contains("5998");
        cy.clickOutside();
        cy.getByData("add-qty").click();
        cy.getByData("add-qty").click();
        cy.getByData("quantity-to-add").should("contain.text", "3");
        cy.get("@addToCart").click();
        cy.get("@toggleCart").click();
        cy.getByData("cart-items-total").contains("14995");
      });
      it("cart should perform cart-actions correctly if the item is added from the product page and there is another object in the cart", () => {
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.getByData("add-to-cart").as("addToCart").click();
        cy.visit("/speakers/zx9-speaker");
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.get("@addToCart").click();
        cy.get("[data-test-id=cart-toggle]:visible").as("toggleCart").click();
        cy.getByData("cart-item-name").eq(0).contains("XX99 Mark II");
        cy.getByData("cart-item-price").eq(0).contains("2999");
        cy.getByData("cart-item-qty").eq(0).contains("1");
        cy.getByData("cart-item-name").eq(1).contains("ZX9");
        cy.getByData("cart-item-price").eq(1).contains("4500");
        cy.getByData("cart-item-qty").eq(1).contains("1");
        cy.getByData("cart-items-total").contains("7499");
        cy.clickOutside();
        cy.getByData("add-qty").click();
        cy.getByData("add-qty").click();
        cy.getByData("quantity-to-add").should("contain.text", "3");
        cy.get("@addToCart").click();
        cy.get("@toggleCart").click();
        cy.getByData("cart-item-qty").eq(1).contains("4");
        cy.getByData("cart-items-total").contains("20999");
      });
    }
  );

  context(
    "cart should perform cart-actions correctly if the item is added from the product page and the actions are triggered inside the cart",
    function () {
      it("cart should perform cart-actions correctly if the item is added from the product page, is the only one and the actions are triggered inside the cart", () => {
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.getByData("add-to-cart").click();
        cy.get("[data-test-id=cart-toggle]:visible").click();
        cy.getByData("cart-item-name").contains("XX99 Mark II");
        cy.getByData("cart-item-price").contains("2999");
        cy.getByData("cart-item-qty").contains("1");
        cy.getByData("increase-item-from-cart").click();
        cy.getByData("cart-item-qty").contains("2");
        cy.getByData("cart-items-total").contains("5998");
        cy.getByData("decrease-item-from-cart").click();
        cy.getByData("decrease-item-from-cart").click();
        cy.getByData("cart-items-total").contains("0");
        cy.getByData("cart-item-name").should("not.exist");
        cy.getByData("cart-item-price").should("not.exist");
        cy.getByData("cart-item-qty").should("not.exist");
      });

      it("cart should perform cart-actions correctly if the item is added from the product page, is NOT the only one and the actions are triggered inside the cart", () => {
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.getByData("add-to-cart").click();
        cy.visit("/speakers/zx9-speaker");
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.getByData("add-to-cart").click();
        cy.get("[data-test-id=cart-toggle]:visible").click();
        cy.getByData("cart-item-name").eq(0).contains("XX99 Mark II");
        cy.getByData("cart-item-price").eq(0).contains("2999");
        cy.getByData("cart-item-qty").eq(0).contains("1");
        cy.getByData("cart-item-name").eq(1).contains("ZX9");
        cy.getByData("cart-item-price").eq(1).contains("4500");
        cy.getByData("cart-item-qty").eq(1).contains("1");
        cy.getByData("cart-items-total").contains("7499");
        cy.getByData("increase-item-from-cart").eq(0).click();
        cy.getByData("increase-item-from-cart").eq(1).click();
        cy.getByData("cart-items-total").contains("14998");
        cy.getByData("remove-all-from-cart").click();
        cy.getByData("cart-item-name").should("not.exist");
        cy.getByData("cart-item-price").should("not.exist");
        cy.getByData("cart-item-qty").should("not.exist");
      });
    }
  );
});
