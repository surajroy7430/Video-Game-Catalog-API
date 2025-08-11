const Game = require("../models/gameModel");
const Publisher = require("../models/publisherModel");

const createGame = async (req, res, next) => {
  try {
    const publisherExists = await Publisher.findById(req.body.publisher);
    if (!publisherExists)
      return res.status(400).json({ err: "Invalid publiser Id" });

    const game = await Game.create(req.body);
    res.status(201).json({ msg: "new game is created", game });
  } catch (error) {
    next(error);
  }
};

const getGamesList = async (req, res, next) => {
  try {
    const games = await Game.find().populate("publisher", "name location");
    res.status(200).json({ msg: "All Game Lists", count: games.length, games });
  } catch (error) {
    next(error);
  }
};

const getGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ err: "Game not found" });

    const game = await Game.findById(id).populate(
      "publisher",
      "name location year"
    );
    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
};

const updateGame = async (req, res, next) => {
  try {
    const publisherExists = await Publisher.findById(req.body.publisher);
    if (!publisherExists)
      return res.status(400).json({ err: "Invalid publiser Id" });

    const { id } = req.params;
    if (!id) return res.status(404).json({ err: "Game not found" });

    const game = await Game.findByIdAndUpdate(id, req.body);
    res.status(200).json({ msg: "Game is updated", game });
  } catch (error) {
    next(error);
  }
};

const deleteGame = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ err: "Game not found" });

    const game = await Game.findByIdAndDelete(id);
    res.status(200).json({ msg: "Game is deleted", game });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createGame,
  getGamesList,
  getGame,
  updateGame,
  deleteGame,
};
