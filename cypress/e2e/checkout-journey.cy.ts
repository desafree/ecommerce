describe("should submit only when input is valid, sending correct data", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/items", {
      fixture: "data.json",
    });
  });

  beforeEach(() => {
    cy.visit("/speakers/xx99-mark-two-headphones");
    cy.getByData("quantity-to-add").should("contain.text", "1");
    cy.getByData("add-to-cart").click();
    cy.visit("/checkout");
  });

  it("should display correct error message when input is invalid and can checkout only when there is no invalid input. After the checkout no items should be present in the cart", () => {
    cy.getByData("submit-form").click();
    cy.getByData("thank-you-notification").should("not.exist");
    cy.getByData("name-input").should("contain", "Is required");
    cy.getByData("name-input").type("nome123");
    cy.getByData("name-input").find("input:valid");
    cy.getByData("email-input").type("email123");
    cy.getByData("email-input").should("contain", "Must be an email format");
    cy.getByData("email-input").find("input").clear();
    cy.getByData("email-input").type("email123@gmail.com");
    cy.getByData("email-input").find("input:valid");
    cy.getByData("phone-input").type("phone123");
    cy.getByData("phone-input").should("contain", "Must be a phone number");
    cy.getByData("phone-input").find("input").clear();
    cy.getByData("phone-input").type("3317389212");
    cy.getByData("phone-input").find("input:valid");
    cy.getByData("address-input").type("address123");
    cy.getByData("address-input").find("input:valid");
    cy.getByData("zip-input").type("zip123");
    cy.getByData("zip-input").should("contain", "Must be a digits");
    cy.getByData("zip-input").find("input").clear();
    cy.getByData("zip-input").type("123");
    cy.getByData("zip-input").should("contain", "Must be exactly 5 digits");
    cy.getByData("zip-input").find("input").clear();
    cy.getByData("zip-input").type("12345");
    cy.getByData("zip-input").find("input:valid");
    cy.getByData("city-input").type("city123");
    cy.getByData("city-input").find("input:valid");
    cy.getByData("country-input").type("country123");
    cy.getByData("country-input").find("input:valid");
    cy.getByData("e-money-number-input").type("pin123");
    cy.getByData("e-money-number-input").should("contain", "Must be a digits");
    cy.getByData("e-money-number-input").find("input").clear();
    cy.getByData("e-money-number-input").type("123");
    cy.getByData("e-money-number-input").should(
      "contain",
      "Must be exactly 5 digits"
    );
    cy.getByData("e-money-number-input").find("input").clear();
    cy.getByData("e-money-number-input").type("12345");
    cy.getByData("e-money-number-input").find("input:valid");
    cy.getByData("e-money-pin-input").type("pin123");
    cy.getByData("e-money-pin-input").should("contain", "Must be a digits");
    cy.getByData("e-money-pin-input").find("input").clear();
    cy.getByData("e-money-pin-input").type("123");
    cy.getByData("e-money-pin-input").should(
      "contain",
      "Must be exactly 5 digits"
    );
    cy.getByData("e-money-pin-input").find("input").clear();
    cy.getByData("e-money-pin-input").type("12345");
    cy.getByData("e-money-pin-input").find("input:valid");
    cy.getByData("submit-form").click();
    cy.getByData("thank-you-notification").should("exist");
    cy.getByData("checkout-back-to-home").click();
    cy.get("[data-test-id=cart-toggle]:visible").click();
    cy.getByData("cart-items-total").should("contain", "0");
    cy.getByData("cart-item-name").should("not.exist");
    cy.getByData("cart-item-price").should("not.exist");
    cy.getByData("cart-item-qty").should("not.exist");
  });

  context(
    "should display correct information about the order in the summary-recap-form and on the summary recap popup",
    () => {
      beforeEach(() => {
        cy.visit("/speakers/zx7-speaker");
        cy.getByData("quantity-to-add").should("contain.text", "1");
        cy.getByData("add-to-cart").click();
        cy.visit("/checkout");
      });

      it("should display correct information on the summary recap form", () => {
        cy.getByData("item-name-summary-form")
          .eq(0)
          .should("contain.text", "XX99 Mark II");
        cy.getByData("item-price-summary-form")
          .eq(0)
          .should("contain.text", "2999");
        cy.getByData("item-qty-summary-form").eq(0).should("contain.text", "1");
        cy.getByData("item-name-summary-form")
          .eq(1)
          .should("contain.text", "ZX7");
        cy.getByData("item-price-summary-form")
          .eq(1)
          .should("contain.text", "3500");
        cy.getByData("item-qty-summary-form").eq(1).should("contain.text", "1");
        cy.getByData("total-without-shipping").should("contain.text", "6499");
        cy.getByData("shipping").should("contain.text", "50");
        cy.getByData("vat").should("contain.text", "1299");
        cy.getByData("total-with-shipping").should("contain.text", "6549");
      });

      it("should display correct information on the summary-recap-popup form", () => {
        cy.getByData("name-input").type("nome123");
        cy.getByData("email-input").type("email123@gmail.com");
        cy.getByData("phone-input").type("3317389212");
        cy.getByData("address-input").type("address123");
        cy.getByData("zip-input").type("12345");
        cy.getByData("city-input").type("city123");
        cy.getByData("country-input").type("country123");
        cy.getByData("e-money-number-input").type("12345");
        cy.getByData("e-money-pin-input").type("12345");
        cy.getByData("submit-form").click();

        cy.getByData("view-more-items").click();
        cy.getByData("checkout-recap-item-name")
          .eq(0)
          .should("contain.text", "XX99 Mark II");
        cy.getByData("checkout-recap-item-price")
          .eq(0)
          .should("contain.text", "2999");
        cy.getByData("checkout-recap-item-qty")
          .eq(0)
          .should("contain.text", "1");
        cy.getByData("checkout-recap-item-name")
          .eq(1)
          .should("contain.text", "ZX7");
        cy.getByData("checkout-recap-item-price")
          .eq(1)
          .should("contain.text", "3500");
        cy.getByData("checkout-recap-item-qty")
          .eq(1)
          .should("contain.text", "1");
        cy.getByData("checkout-recap-total").should("contain.text", "6499");
      });
    }
  );
});
