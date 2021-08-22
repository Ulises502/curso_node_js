const { app } = require("../app.js");
const db = require("../src/database/models");
const request = require('supertest');
//import * as faker from "faker"



describe("Test all the Users endpoints", () => {
  // Set the db object to a variable which can be accessed throughout the whole test file
  let thisDb = db;
  var token;

  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true });
  })


  // ADD USER TEST
  it('should create a new user', async () => {
    const resp = await request(app).post('/auth/register').send({
      firstName: "tokenUser",
      lastName: "Lastname",
      phone: "9999999999",
      email: "tokenjose@test.com",
      username: "tokenUser",
      password: "1234"
    }).then(v => {
      token = v.body.token;
      //console.log(token);
    });

    const res = await request(app)
      .post('/api/v1/users')
      .send({
        firstName: "Test User",
        lastName: "Last name",
        phone: "221999888",
        email: "pepitojose@test.com",
        username: "Test User",
        password: "123456"
      })
      .set({
        "x-access-token": token,
      }).then((response) => {
        expect(response.statusCode).toEqual(201);
        // Check type and length
        //console.log(response.body);
        expect(response.body).toHaveProperty('inserted');
        expect(response.body.inserted).toHaveProperty('id');
        expect(response.body.inserted).toHaveProperty('firstName');
        expect(response.body.inserted).toHaveProperty('lastName');
        expect(response.body.inserted).toHaveProperty('phone');
        expect(response.body.inserted).toHaveProperty('email');
        expect(response.body.inserted).toHaveProperty('username');
        expect(response.body.inserted).toHaveProperty('password');

        // Check data
        //expect(response.body.inserted.id).toBe(id);
        expect(response.body.inserted.firstName).toBe("Test User");
        expect(response.body.inserted.lastName).toBe("Last name");
      });
  });


  // GET USERS TEST
  it('should fetch all Users', async () => {
    const res = await request(app).get("/api/v1/users").set({
      "x-access-token": token,
    }).then((response) => {
      expect(response.statusCode).toEqual(200);
      //console.log(response.body);

      expect(Array.isArray(response.body.users)).toBeTruthy();
      expect(response.body.users[0]).toHaveProperty('Tasks');
      expect(Array.isArray(response.body.users[0].Tasks)).toBeTruthy();
    });
  });


  // UPDATE USERS TEST
  it('should update an User', async () => {
    const userId = 1;
    const res = await request(app).put("/api/v1/users/" + userId).send({
      firstName: "Test User",
      lastName: "Last name",
      phone: "0000",
      email: "pepitojose@test.com",
      username: "Test User",
      password: "123456"
    }).set({
      "x-access-token": token,
    });
    expect(res.statusCode).toEqual(200);
    //console.log(res.body);
    expect(res.body.user).toHaveProperty('id');
    expect(res.body.user.phone).toEqual('0000');
  });


  // DELETE USERS TEST
  it('should delete an User', async () => {
    const userId = 1;
    const res = await request(app).put("/api/v1/users/" + userId).set({
      "x-access-token": token,
    });
    expect(res.statusCode).toEqual(200);
  });



  // After all tersts have finished, close the DB connection
  afterAll(async () => {
    await thisDb.sequelize.close()
  })
})