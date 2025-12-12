import { userLogin } from "../../support/actions/loginAction"
import { userLogout } from "../../support/actions/logoutAction"
import { userData } from "../../fixtures/userData"  
import { addItemToCart } from "../../support/actions/itemAction"
import { fillCheckoutForm, userCheckout, verifyProductData } from "../../support/actions/checkoutActions"
import { checkoutInfo } from "../../fixtures/checkoutData"
import { productItemData } from "../../fixtures/productData"

describe('sace Demo test2', { testIsolation: false }, () => {
    before('Loading Page',() => {
        cy.visit('/')
    })

    it('Login', () => {
        userLogin(userData.username, userData.password)
    })

    it('Selecting an item', () => {
        addItemToCart()
    })

    it('Checkout flow', () => {
        userCheckout();
        fillCheckoutForm(checkoutInfo);
        verifyProductData(productItemData[0]);
        
    })

    after('Logout',() => {
        userLogout()
    })
})