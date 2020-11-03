import { addItemToCartPage } from "../support/pages/addItemToCartPage";
import {productControllerPage} from "../support/pages/productControllerPage";
import { landingPage } from "../support/pages/landingPage"

describe('Operation in /index.php?id_product=1&controller=product', () => {
    beforeEach(() => {
        landingPage.randomClickMoreButton();
        productControllerPage.chooseRandomQuantity();
        productControllerPage.chooseSize();
        productControllerPage.chooseFirstColor();
        productControllerPage.clickAddToCartButton();
    })

     it('Click More button and click cross button', () => {
        addItemToCartPage.checkNumberOfItem();
        addItemToCartPage.clickCrossButton();
        addItemToCartPage.checkClosingOfPopup();
        landingPage.checkNumberOfItemInCart();
     });

    it('Click More button and continue shopping', () => {
        addItemToCartPage.checkNumberOfItem();
        addItemToCartPage.clickContinueShoppingButton();
        addItemToCartPage.checkClosingOfPopup();
        landingPage.checkNumberOfItemInCart();
    });

     it('Click More button and proceed to checkout', () => {
        addItemToCartPage.checkNumberOfItem();
        addItemToCartPage.clickProceedToCheckoutButton();
     });
})