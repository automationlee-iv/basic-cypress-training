describe('Intercept Examples', () => {
    it('Intercept Request - wait', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://automationexercise.com/products'
        }).as('products')
        cy.visit('https://automationexercise.com/')
        cy.get('[href="/products"]').click()
        cy.wait('@products').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)
        })
    })

    it('Intercept Request - action', () => {
        cy.intercept('GET', 'https://automationexercise.com/api/productsList').as('products')
        cy.visit('https://automationexercise.com/')
        cy.get('[href="/api_list"]').first().click()
        cy.get('[data-toggle="collapse"]').first().click()
        cy.get('[href*="/productsList"]').first().invoke('removeAttr', 'target').click()
        cy.wait('@products').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)

            const body = typeof interception.response.body === 'string' ? JSON.parse(interception.response.body) : interception.response.body
            
            expect(body.products[0].id).to.equal(1)
            expect(body.products[0].name).to.equal('Blue Top')
        })
    })

    it('Intercept - using fixture', () => {
        cy.fixture('apiData/productList.json').then((expected) => {
            cy.intercept('GET', 'https://automationexercise.com/api/productsList', 
            {
                fixture: 'apiData/injectedData.json'
            }).as('products')
                cy.visit('https://automationexercise.com/api_list')
                cy.get('[data-toggle="collapse"]').first().click()
                cy.get('[href*="/productsList"]').first().invoke('removeAttr', 'target').click()
                cy.wait('@products').then((interception) => {
                    const injectedProducts = interception.response.body.products
                    expect(interception.response.statusCode).to.eq(200)
                    expect(injectedProducts[0].name).to.equal(expected.products[0].name)
                    expect(injectedProducts[0]).to.deep.include(expected.products[0])
                })
        })
    })
})