describe('HTTP Request POST examples', () => {
    it('POST request 01', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            form: true,
            body: {
                search_product: "Blue Top"
            }
            }).then((response) => {
            expect(response.status).to.eq(200)

            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
            
            cy.log('Response code: ', response.status)
            cy.log('Response body: ', JSON.stringify(body))
        })
    })

    it('POST request 02', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: {
                email:'leetest@yopmail.com',
                password: 'P@ssword1!'
            }
            }).then((response) => {
            expect(response.status).to.eq(200)

            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
            
            cy.log('Response code:', response.status)
            cy.log('Response message:', body.message)
        })
    })

    it('POST request 03 fixture', () => {
        cy.fixture('apiData/loginData.json').then((data) => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: data
            }).then((response) => {
                const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
                
                cy.log('Response code:', response.status)
                cy.log('Response message:', body.message)
            })
        })
        
    })

    it('POST request 04 fixture', () => {
        cy.fixture('apiData/productList.json').then((expected) => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/searchProduct',
            form: true,
            body: {
                search_product: "Blue Top"
            }
            }).then((response) => {
                const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body

                expect(response.status).to.eq(200)
                expect(body.products[0]).to.deep.equal(expected.products[0])
                
                cy.log('Response code:', response.status)
            })
        })
        
    })

    it.only('POST request 05 fixture data and fixture expected', () => {
        cy.fixture('apiData/productToSearch.json').then((data) => {
            cy.fixture('apiData/productList.json').then((expected) => {
                cy.request({ method: 'POST',
                    url: 'https://automationexercise.com/api/searchProduct',
                    form: true, 
                    body: data
                }).then((response) => {
                expect(response.status).to.equal(200)

                const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body

                cy.log('Response code: ' + response.status)
                cy.log('Response body: ' + JSON.stringify(body))
                expect(body.products[0]).to.deep.equal(expected.products[0])
                })
            })
        })
        
    })
})