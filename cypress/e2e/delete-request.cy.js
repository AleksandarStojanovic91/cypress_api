describe('Delete request', () => {
  it('Delete request', () => {
    cy.request({
      method:"DELETE",
      url:"https://api.qase.io/v1/project/SMOKE",
      headers:{
        Token:"d2adf40cf532fb6ed8598a74360b9f5127e0207868ee591631ad6d6fdfaff4a9"
      }
    }).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
    })
  })
})