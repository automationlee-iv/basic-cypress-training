describe.skip('HTTP Request DELETE', () => {
    it('DELETE request', () => {
        cy.fixture('apiData/loginData.json').then((data) => {
            cy.request({
            method: 'DELETE',
            url: 'https://automationexercise.com/api/deleteAccount',
            form: true,
            body: data
        }).then((response) => {
            expect(response.status).to.eq(200)
            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
            cy.log('Response: '+response.status)
            cy.log('Response body: '+JSON.stringify(body))
            cy.log('Response message: '+body.message)
            expect(body.message).to.eq('Account deleted!')
        })
        })
    })
})