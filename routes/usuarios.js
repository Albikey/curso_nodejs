const { Router } = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuarioSignin,
} = require("../controllers/usuarios");

const router = Router();

// localhost:3001/usuarios/
router.get("/", usuariosGet);
router.post("/", usuariosPost);
router.put("/", usuariosPut);
router.delete("/", usuariosDelete);
router.post("/signin/", usuarioSignin);

module.exports = router;
