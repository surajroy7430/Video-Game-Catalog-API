const Publisher = require("../models/publisherModel");
const Game = require("../models/gameModel");

const newGamePublisher = async (req, res, next) => {
  try {
    const publisher = await Publisher.create(req.body);
    res.status(201).json({ msg: "Game publisher is created", publisher });
  } catch (error) {
    next(error);
  }
};

const getPublishersList = async (req, res, next) => {
  try {
    const publishers = await Publisher.find();
    res.status(200).json({
      msg: "All game publishers",
      count: publishers.length,
      publishers,
    });
  } catch (error) {
    next(error);
  }
};

const getPublisher = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ err: "Game publisher not found" });

    const publisher = await Publisher.findById(id);
    res.status(200).json(publisher);
  } catch (error) {
    next(error);
  }
};

const updatePublisher = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ err: "Game publisher not found" });

    const publisher = await Publisher.findByIdAndUpdate(id, req.body);
    res.status(200).json({ msg: "Game Publisher Updated", publisher });
  } catch (error) {
    next(error);
  }
};

const deletePublisher = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ err: "Game publisher not found" });

    const publisher = await Publisher.findByIdAndDelete(id);
    res.status(200).json({ msg: "Game Publisher Deleted", publisher });
  } catch (error) {
    next(error);
  }
};

const retrieveAllGames = async (req, res, next) => {
  try {
    const { publisherId } = req.params;
    if (!publisherId) return res.status(404).json({ err: "Games not found" });

    const games = await Game.find({ publisher: publisherId }).populate(
      "publisher",
      "name location"
    );
    res.status(200).json({
      msg: "All games list via publisher",
      count: games.length,
      games,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  newGamePublisher,
  getPublishersList,
  getPublisher,
  updatePublisher,
  deletePublisher,
  retrieveAllGames,
};
