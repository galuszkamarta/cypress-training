/// <reference types="cypress" />

export class LandingPage {
    chooseRandomItem() {
        cy.xpath("//ul[@id='homefeatured']//a[@title='Add to cart']//span").then(items => {
            let randomIndex = Math.floor(Math.random() * (items.length))
            cy.xpath("//ul[@id='homefeatured']//a[@title='Add to cart']//span").eq(randomIndex).click();
        });
    }
    checkNumberOfItemInCart() {
        cy.xpath("//span[@class='ajax_cart_quantity unvisible']").then($number =>{
            cy.get("@randomQuantity").then(randomQuantity => {
                expect($number.text()).to.eq(randomQuantity);
            })
        
        });
    };

    randomClickMoreButton() {
        cy.xpath("//ul[@id='homefeatured']//a[@class='button lnk_view btn btn-default']//span").then(moreButton => {
            let randomMoreIndex = Math.floor(Math.random() * (moreButton.length))
            cy.xpath("//ul[@id='homefeatured']//a[@class='button lnk_view btn btn-default']//span").eq(randomMoreIndex).click();
        });
    } 

};

export const landingPage = new LandingPage();