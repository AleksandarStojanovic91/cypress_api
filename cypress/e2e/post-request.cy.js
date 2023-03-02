describe('Post request', () => {
  it('Post request - Create project', () => {
    cy.request({
      method:"POST",
      url:"https://api.qase.io/v1/project",
      headers:{
        Token:"d2adf40cf532fb6ed8598a74360b9f5127e0207868ee591631ad6d6fdfaff4a9",
        accept: "application/json",
        "content-type": "application/json"
      },
      body:{
        title:"ProjectAPI",
        code:"API"
      }
    }).then(response=>{
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
      expect(response.body.result.code).eq("API")
    })
  })

  it('Post request - Create suite', () => {
    cy.request({
      method:"POST",
      url:"https://api.qase.io/v1/suite/API",
      headers:{
        Token:"d2adf40cf532fb6ed8598a74360b9f5127e0207868ee591631ad6d6fdfaff4a9",
        accept: "application/json",
        "content-type": "application/json"
      },
      body:{
        title:"TestSuiteAPI"
      }
    }).then(response=>{
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
      expect(response.body.result.id).eq(1)
    })
  })
  
  it('Post request - Create test case', () => {
    cy.getTestSuiteIdByTestSuiteName('API', 'TestSuiteAPI').then(id => {
      expect(id, 'There is no test suite with provided name. Test case has not been created.').not.to.be.null
      cy.request({
        method: "POST",
        url: "https://api.qase.io/v1/case/API",
        headers: {
          Token:"d2adf40cf532fb6ed8598a74360b9f5127e0207868ee591631ad6d6fdfaff4a9",
          accept: "application/json",
          "content-type": "application/json"
        },
        body: {
          title: "TestCase1",
          suite_id: id
        }
      }).then(response => {
        expect(response.status).eq(200)
        expect(response.body.status).eq(true)
      })
    })
  })

  it('Post request - Create test plan', () => {
    cy.getTestCaseIdByTestCaseName('API', 'TestCase1').then(id => {
      expect(id, 'There is no test case with provided name. Test plan has not been created.').not.to.be.null
      cy.request({
        method: "POST",
        url: "https://api.qase.io/v1/plan/API",
        headers: {
          Token:"d2adf40cf532fb6ed8598a74360b9f5127e0207868ee591631ad6d6fdfaff4a9",
          accept: "application/json",
          "content-type": "application/json"
        },
        body: {
          "cases": [
            id
          ],
          "title": "TestPlan1",
          "description": "Test plan 1 description"
        }
      }).then(response => {
        expect(response.status).eq(200)
        expect(response.body.status).eq(true)
      })
    })
  })

  it('Post request - Create defect', () => {
    cy.request({
      method:"POST",
      url:"https://api.qase.io/v1/defect/API",
      headers:{
        Token:"d2adf40cf532fb6ed8598a74360b9f5127e0207868ee591631ad6d6fdfaff4a9",
        accept: "application/json",
        "content-type": "application/json"
      },
      body:{
        title: "Defect1",
        actual_result: "Missing test parameter",
        severity: 2
      }
    }).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
    })
  })

  it('Post request - Create milestone', () => {
    cy.request({
      method:"POST",
      url:"https://api.qase.io/v1/milestone/API",
      headers:{
        Token:"d2adf40cf532fb6ed8598a74360b9f5127e0207868ee591631ad6d6fdfaff4a9",
        accept: "application/json",
        "content-type": "application/json"
      },
      body:{
        title: "TestMilestone1",
        description: "Milestone description",
        status: "active"
      }
    }).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
    })
  })

})