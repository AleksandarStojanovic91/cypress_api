describe('Get request', () => {
  it('Get request', () => {
    cy.request({
      method:"GET",
      url:"https://api.qase.io/v1/project/API",
      headers:{
        Token:"d2adf40cf532fb6ed8598a74360b9f5127e0207868ee591631ad6d6fdfaff4a9"
      }
    }).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
      expect(response.body.result.title).eq("ProjectAPI")
      expect(response.body.result.code).eq("API")
    })
  })
})