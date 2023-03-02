/**
 * @memberOf cy
 * @method getTestSuiteIdByTestSuiteName
 * @param testProjectCode Project code
 * @param testSuiteName Test suite name
 * @description use to get test suite id by providing test suite name
 */
Cypress.Commands.add('getTestSuiteIdByTestSuiteName', (testProjectCode, testSuiteName) => {
    cy.request({
        method: "GET",
        url: 'https://api.qase.io/v1/suite/' + testProjectCode,
        headers: {
            Token:"d2adf40cf532fb6ed8598a74360b9f5127e0207868ee591631ad6d6fdfaff4a9"
        }
    }).then(response => {
        var suites = response.body.result.entities
        for (let i = 0; i < suites.length; i++) {
            if (suites[i].title === testSuiteName) {
                return suites[i].id
            }
        }
        return null
    })
})

/**
 * @memberOf cy
 * @method getTestCaseIdByTestCaseName
 * @param testProjectCode Project code
 * @param testCaseName Test case name
 * @description use to get test case id by providing test case name
 */
Cypress.Commands.add('getTestCaseIdByTestCaseName', (testProjectCode, testCaseName) => {
    cy.request({
        method: "GET",
        url: 'https://api.qase.io/v1/case/' + testProjectCode,
        headers: {
            Token:"d2adf40cf532fb6ed8598a74360b9f5127e0207868ee591631ad6d6fdfaff4a9"
        }
    }).then(response => {
        var cases = response.body.result.entities
        for (let i = 0; i < cases.length; i++) {
            if (cases[i].title === testCaseName) {
                return cases[i].id
            }
        }
        return null
    })
})
