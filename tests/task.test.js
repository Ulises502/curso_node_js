const { app } = require("../app.js");
const db = require("../src/database/models");
const request = require('supertest');
const { date } = require("faker/locale/zh_TW");
//import * as faker from "faker"


describe("Now test all the Task endpoints", () => {
    // Set the db object to a variable which can be accessed throughout the whole test file
    let thisDb = db;
    var token;

    // Before any tests run, clear the DB and run migrations with Sequelize sync()
    beforeAll(async () => {
        await thisDb.sequelize.sync({ force: true });
    })


    // ADD USER TEST
    it('should create a new task', async () => {
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

        const userId = 1;
        const res = await request(app)
            .post('/api/v1/tasks/')
            .send({
                name: "tarea1",
                fechaCreacion: new Date(),
                fechaVencimiento: new Date(),
                descripcion: "jajajaja",
                completada: false
            })
            .set({
                "x-access-token": token,
            });
        //console.log(res);
        expect(res.statusCode).toEqual(201);
        //expect(res.body).toHaveProperty('post');
    });


    // GET USERS TEST
    it('should fetch all Tasks', async () => {
        const res = await request(app).get("/api/v1/tasks").set({
            "x-access-token": token,
        });
        expect(res.statusCode).toEqual(200);
        //expect(res.body).toHaveProperty('post');
    });


    // UPDATE TASKS TEST
    it('should update a Task', async () => {
        const taskId = 1;
        const res = await request(app).put("/api/v1/tasks/" + taskId).send({
            name: "tarea1",
            fechaCreacion: new Date(),
            fechaVencimiento: new Date(),
            descripcion: "LOLOLOL",
            completada: true
        }).set({
            "x-access-token": token,
        });
        expect(res.statusCode).toEqual(200);
        //expect(res.body).toHaveProperty('post');
    });


    // DELETE USERS TEST
    it('should delete a Task', async () => {
        const taskId = 1;
        const res = await request(app).put("/api/v1/tasks/" + taskId).set({
            "x-access-token": token,
        });
        expect(res.statusCode).toEqual(200);
        //expect(res.body).toHaveProperty('post');
    });


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