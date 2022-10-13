const express = require("express");
const router = express.Router();
const {
  list,
  create,
  show,
  update,
  remove,
} = require("../controllers/appointments");

router.get("/appointments", list);

router.get("/appointments/:id", show);

//create route
router.post("/appointments/", create);

//update route
router.put("/appointments/:id", update);

//delete
router.delete("/appointments/:id", remove);

module.exports = router;
