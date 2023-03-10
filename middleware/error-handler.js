const { customAPIError } = require("../errors");
const { StatusCodes, getReasonPhrase } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).send({
      error: err.message,
    });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
  });
};
module.exports = errorHandlerMiddleware;
