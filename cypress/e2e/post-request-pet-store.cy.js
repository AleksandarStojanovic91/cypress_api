import petBody from "../fixtures/petBody.json"
import petBodyTestData from "../fixtures/petBodyTestData.json"
import data from "../fixtures/petBodyTestData2.json"
import api from "../fixtures/endpoints.json"
const url = Cypress.env("url");

describe('Pet store tests', () => {
    xit('Post request - Create pet with valid name', () => {
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/pet",
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            body: {
                "id": 123456,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": "Ares",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 0,
                        "name": "string"
                    }
                ],
                "status": "available"
            }
        }).then(response => {
            expect(response.status).eq(200)
            expect(response.body.id).eq(123456)
            expect(response.body.name).eq("Ares")
            cy.log(response.body.tags.id)
        })
    })
    xit('Post request - Create pet with empty name', () => {
        cy.request({
            method: "POST",
            url: "https://petstore.swagger.io/v2/pet",
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            body: {
                "id": 123456,
                "category": {
                    "id": 0,
                    "name": "string"
                },
                "name": "",
                "photoUrls": [
                    "string"
                ],
                "tags": [
                    {
                        "id": 0,
                        "name": "string"
                    }
                ],
                "status": "available"
            }
        }).then(response => {
            expect(response.status).eq(400)
            expect(response.body.errorMessage).eq("Name is required")
        })
    })

    xit('Post request - Create pet with empty name', () => {
        cy.postRequest(url+api.pet.postPet, petBody)
            .then(response => {
                expect(response.status).eq(200)
                expect(response.body.id).eq(12345678)
                expect(response.body.name).eq("Ares")
            })
    })
    xit('Post request - Create pet with empty name', () => {
        petBody.id = 123456789;
        cy.postRequest(url+api.pet.postPet, petBody)
            .then(response => {
                expect(response.status).eq(200)
                expect(response.body.id).eq(123456789)
                expect(response.body.name).eq("Ares")
            })
    })

    petBodyTestData.forEach((petBodyData) => {
        xit("Post request - Create pet with different id's", () => {
            cy.postRequest(url+api.pet.postPet, petBodyData)
                .then(response => {
                    expect(response.status).eq(200)
                    expect(response.body.id).eq(petBodyData.id)
                    expect(response.body.name).eq(petBodyData.name)
                })
        })
    })

    Object.entries(data.postPetTests).forEach(([key, value]) => {
        xit(key + " Post request - Create pet", () => {
            cy.postRequest(url + api.pet.postPet, value)
                .then(response => {
                    expect(response.status).eq(200)
                    expect(response.body.id).eq(value.id)
                    expect(response.body.name).eq(value.name)
                })
        })
    })

})