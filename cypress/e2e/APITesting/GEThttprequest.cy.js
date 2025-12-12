describe('HTTP Request GET', () => {
    it('Get request', () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log('Products: '+response.body)
        })
    })

    it('GET request2', () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).its('status').should('eq', 200)
    })

    it('GET request3', () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).then((response) => {
            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
            const products = body.products

            if(!products) {
                cy.log('undefined')
                console.log('Response body:', body)
                return
            }

            expect(response.status).to.eq(200)
            cy.log('Products: '+response.body)
            cy.log('Response Code: '+body.responseCode)
            cy.log('Product01: '+ JSON.stringify(products[0]))
            cy.log('Category product01: '+products[0].category.category)
        })
    })

    it.only('GET request4', () => {
        cy.fixture('apiData/productList.json').then((data) => {
            cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).then((response) => {
            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
            const products = body.products

            if(!products) {
                cy.log('undefined')
                console.log('Response body:', body)
                return
            }

            expect(response.status).to.eq(200)
            expect(body).to.deep.equal(data)
            expect(products[0]).to.deep.equal(data.products[0])
            expect(products[0].category.category).to.equal(data.products[0].category.category)

            cy.log('Products: '+response.body)
            cy.log('Response Code: '+body.responseCode)
            cy.log('Product01: '+ JSON.stringify(products[0]))
            cy.log('Category product01: '+products[0].category.category)
        }) 
        })
    })
})