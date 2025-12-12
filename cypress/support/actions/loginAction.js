import { loginButton, password, userName } from "../pages/loginPage"

export const userLogin = (user, userPassword) => {
    cy.get(userName, { timeout: 10000 }).should('be.visible').type(user)
    cy.get(password).type(userPassword)
    cy.get(loginButton).click()
}