describe('Post request', () => {
  xit('Post request - Create project', () => {
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

  xit('Post request - Create suite', () => {
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
      expect(response.body.result.id).eq(3)
    })
  })

  xit('Post request - Create test case', () => {
    cy.request({
      method:"POST",
      url:"https://api.qase.io/v1/case/API",
      headers:{
        Token:"d2adf40cf532fb6ed8598a74360b9f5127e0207868ee591631ad6d6fdfaff4a9",
        accept: "application/json",
        "content-type": "application/json"
      },
      body:{
        title:"TestCase2",
        suite_id:2
      }
    }).then(response=>{
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
      expect(response.body.result.id).eq(2)
    })
  })

})