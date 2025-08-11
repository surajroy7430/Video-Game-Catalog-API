const express = require("express");
const router = express.Router();
const {
  newGamePublisher,
  getPublishersList,
  getPublisher,
  updatePublisher,
  deletePublisher,
  retrieveAllGames,
} = require("../controllers/publisherController");

router.post("/", newGamePublisher);
router.get("/", getPublishersList);
router.get("/:id", getPublisher);
router.put("/:id", updatePublisher);
router.delete("/:id", deletePublisher);

// relationship-based endpoint
router.get("/:publisherId/games", retrieveAllGames);

module.exports = router;
