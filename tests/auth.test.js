const { app } = require("../app.js");
const db = require("../src/database/models");
const request = require('supertest');
//import * as faker from "faker"



describe("Test all the Authentication endpoints", () => {
  // Set the db object to a variable which can be accessed throughout the whole test file
  let thisDb = db;

  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true });
  })


  // REGISTER USER TEST
  it('should register a user', async () => {
    const res = await request(app).post('/auth/register').send({
      firstName: "tokenUser",
      lastName: "Lastname",
      phone: "9999999999",
      email: "tokenjose@test.com",
      username: "tokenUser",
      password: "1234"
    });
    expect(res.statusCode).toEqual(201);
  });


  // LOGIN USER TEST
  it('should login an User', async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({
        username: "tokenUser",
        password: "1234"
      });
    expect(res.statusCode).toEqual(200);
    //expect(res.body).toHaveProperty('post');
  });



  // After all tersts have finished, close the DB connection
  afterAll(async () => {
    await thisDb.sequelize.close()
  })
})