const errorHandling = (err, req, res, next) => {
  const errorCode = err.message || "Internal server error";
  const statusCode = err.status || 500;

  res.status(statusCode).json({
    message: errorCode,
  });
};

module.exports = errorHandling;
