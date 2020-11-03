/// <reference types="cypress" />

export class ProductControllerPage {
    chooseRandomQuantity() {
        let randomQuantity = Math.floor(Math.random() * (5))
        cy.xpath("//input[@id='quantity_wanted']").clear().type(randomQuantity);
        cy.wrap(randomQuantity).as('randomQuantity')
   }

   chooseSize() {
    cy.get('select')
    .select('M').should('have.value', '2');
   }

   chooseFirstColor() {
       cy.xpath("//ul[@id='color_to_pick_list']//li//a").eq(0).click();
   }

   clickAddToCartButton() {
       cy.xpath("//button[@class='exclusive']//span").click();
   }

};

export const productControllerPage = new ProductControllerPage();