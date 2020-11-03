import { addItemToCartPage } from "../support/pages/addItemToCartPage";
import { landingPage } from "../support/pages/landingPage"

describe('Operation in cart', () => {

    beforeEach(() => {
        landingPage.chooseRandomItem();
    })
     it('Add item to cart and click cross button', () => {
         addItemToCartPage.checkNumberOfItem();
         addItemToCartPage.clickCrossButton();
         addItemToCartPage.checkClosingOfPopup();
         landingPage.checkNumberOfItemInCart();
     });

    it('Add item to cart and continue shopping', () => {
        addItemToCartPage.checkNumberOfItem();
        addItemToCartPage.clickContinueShoppingButton();
        addItemToCartPage.checkClosingOfPopup();
        landingPage.checkNumberOfItemInCart();
    });

     it('Add item to cart and proceed to checkout', () => {
         addItemToCartPage.checkNumberOfItem();
         addItemToCartPage.clickProceedToCheckoutButton();
     });


})