const { app } = require("../app.js");
const db = require("../src/database/models");

//import * as faker from "faker"
//import supertest from "supertest"

//import { Authentication } from "../../services/Authentication"
console.log("Hola");

describe("test all the Users endpoints", () => {
  // Set the db object to a variable which can be accessed throughout the whole test file
  let thisDb = db;

  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true })
  })

  // This passes because 1 === 1
  it('Testing to see if Jest works', () => {
    expect(1).toBe(1)
  })

  describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  })
  



  /*
  it("should succeed when accessing an authed route with a valid JWT", async () => {
    const authentication = new Authentication()
    const randomString = faker.random.alphaNumeric(10)
    const email = `user-${randomString}@email.com`
    const password = `password`

    await authentication.createUser({ email, password })

    const { authToken } = await authentication.loginUser({
      email,
      password,
    })

    // App is used with supertest to simulate server request
    const response = await supertest(app)
      .post("/v1/auth/protected")
      .expect(200)
      .set("authorization", `bearer ${authToken}`)

    expect(response.body).toMatchObject({
      success: true,
    })
  })

  it("should fail when accessing an authed route with an invalid JWT", async () => {
    const invalidJwt = "OhMyToken"

    const response = await supertest(app)
      .post("/v1/auth/protected")
      .expect(400)
      .set("authorization", `bearer ${invalidJwt}`)

    expect(response.body).toMatchObject({
      success: false,
      message: "Invalid token.",
    })
  })
  */

  // After all tersts have finished, close the DB connection
  afterAll(async () => {
    await thisDb.sequelize.close()
  })
})