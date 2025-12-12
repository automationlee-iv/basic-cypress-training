import { addToCartBtn, cartIcon, item } from "../pages/itemPage"

export const addItemToCart = () => {
    cy.get(item).should('be.visible')
    cy.get(item).should('have.length', 6)
    cy.get(item).eq(0).find(addToCartBtn).click()
    cy.get(cartIcon, { timeout: 10000 }).should('be.visible').click()
}