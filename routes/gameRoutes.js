const express = require("express");
const router = express.Router();
const {
  createGame,
  getGamesList,
  getGame,
  updateGame,
  deleteGame,
} = require("../controllers/gameController");

router.post("/", createGame);
router.get("/", getGamesList);
router.get("/:id", getGame);
router.put("/:id", updateGame);
router.delete("/:id", deleteGame);

module.exports = router;
