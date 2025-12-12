describe('HTTP Request PUT Examples', () => {
    it('PUT request', () => {
        cy.fixture('apiData/updateData.json').then((data) => {
            cy.request({
            method: 'PUT',
            url: 'https://automationexercise.com/api/updateAccount',
            form: true,
            body: data
        }).then((response) => {
            expect(response.status).to.eq(200)
            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body

            cy.log('Response code:', response.status)
            cy.log('Response body:', JSON.stringify(body))
            cy.log('Response message:', body.message)
            expect(body.message).to.eq('User updated!')
            })
        }) 
    })
})