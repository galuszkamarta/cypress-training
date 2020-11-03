/// <reference types="cypress" />

export class AddItemToCartPage {
    checkNumberOfItem() {
        cy.xpath("//span[@class='ajax_cart_product_txt ']").then($message =>{
            expect($message.text()).to.contain('There is 1 item in your cart');
        });
    }
    clickContinueShoppingButton() {
        cy.xpath("//span[@class='continue btn btn-default button exclusive-medium']").click();
    }

    clickProceedToCheckoutButton() {
        cy.xpath("//a[@class='btn btn-default button button-medium']").click();
    }

    checkClosingOfPopup() {
        cy.xpath("//div[@id='layer_cart']").invoke('attr', 'style').should('contain', 'display: none')
    }

    clickCrossButton() {
        cy.xpath("//span[@class='cross']").click();
    }

};

export const addItemToCartPage = new AddItemToCartPage();