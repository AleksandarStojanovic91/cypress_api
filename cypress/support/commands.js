/**
 * @method postRequest Sends a post request
 * @param url endpoint url
 * @param body json body
 */
Cypress.Commands.add('postRequest', (url,body) => {
    return cy.request({
        method: "POST",
        url: url,
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: body
    })
})