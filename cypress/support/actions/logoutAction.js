import { burgerMenu, logoutBtn } from "../pages/logoutPage"

export const userLogout = () => {
    cy.get(burgerMenu).click()
    cy.get(logoutBtn).click()
}