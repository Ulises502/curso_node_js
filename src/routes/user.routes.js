const router = require("express").Router();

router.get("/:name", (req, res) => {
  const { name } = req.params;
  res.send("Bienvenido " + name);
});

router.post("/:name", (req, res) => {
    const { name } = req.params;
    res.send("Bienvenido " + name);
  });

router.get("/:name/:apellido", (req, res) => {
  const { name } = req.params;
  const { apellido } = req.params;
  res.send("Bienvenido " + name + " " + apellido);
});

module.exports = router;