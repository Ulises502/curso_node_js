const router = require("express").Router(); // importa "Router" del modulo express
const {
  getUsers,
  addUser,
  deleteUser,
  updateUser,
} = require("../controller/user.controller"); // importa el controlador y todas las peticiones posibles
const { authJwt } = require("../middleware"); // trae el middleware

// construye las rutas, les pone el middleware y los manda al controlador/peticion correspondiente
router.get("/", [authJwt.check], getUsers);
router.post("/", [authJwt.check], addUser);
router.delete("/:id", [authJwt.check], deleteUser);
router.put("/:id", [authJwt.check], updateUser);

module.exports = router; // exporta el router como una variables, NO como función