it('returns 200 when hit  /register', () => {
    cy.request('POST', 'http:localhost:3333/api/user/register')
        .then((response) => {
            expect(response.status).to.eq(200);
        })
})