const requestTimestamp = (req, res, next) => {
  req.requestTimestamp = new Date().toISOString();
  next()
}

module.exports = requestTimestamp;