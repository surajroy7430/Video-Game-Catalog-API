const errorHandler = (error, req, res, next) => {
  console.log(error);

  res.status(500).json({ error: error.message || "Interval server error" });
};

module.exports = errorHandler;
