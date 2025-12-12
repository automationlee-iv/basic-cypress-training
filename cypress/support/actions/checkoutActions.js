import { firsName,  continueBtn, lastName, zipCode, itemName, itemPrice, checkoutBtn, finishBtn, backHomeBtn } from "../pages/checkoutPage"

export const userCheckout = () => {
    cy.get(checkoutBtn).click()
}

export const fillCheckoutForm = (data) => {
    cy.get(firsName).type(data.firstName)
    cy.get(lastName).type(data.lastName)
    cy.get(zipCode).type(data.zipCode)
    cy.get(continueBtn).click()
}

export const verifyProductData = (product) => {
    cy.get(itemName).should('contain', product.name)
    cy.get(itemPrice).should('contain', product.price)
    cy.get(finishBtn).click()
}

export const goBackHome = () => {
    cy.get(backHomeBtn).click()
}