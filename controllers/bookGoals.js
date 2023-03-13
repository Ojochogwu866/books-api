const BookGoals = require("../models/bookGoals");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const createBookGoals = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const bookGoals = await BookGoals.create(req.body);
  res.status(StatusCodes.CREATED).json({ bookGoals });
};
const getAllBookGoals = async (req, res) => {
  const books = await BookGoals.find({ createdBy: req.user.userId }).sort(
    "createdAt"
  );
  res.status(StatusCodes.OK).json({ books, count: books.length });
};
const deleteBookGoals = async (req, res) => {
  const {
    user: { userId },
    params: { id: bookId },
  } = req;
  const book = await BookGoals.findByIdAndRemove({
    _id: bookId,
    createdBy: userId,
  });
  if (!book) {
    throw new NotFoundError(`No book with id ${bookId}`);
  }
  res.status(StatusCodes.OK).send("Book removed succesfully");
};
const updateBookGoals = async (req, res) => {
  const {
    body: { totalRead, monthlyRead, pagesPerWeek, pagesPerDay },
    user: { userId },
    params: { id: booksId },
  } = req;
  if (
    totalRead === "" ||
    monthlyRead === "" ||
    pagesPerWeek === "" ||
    pagesPerDay === ""
  ) {
    throw new BadRequestError("fields cannot be empty");
  }
  const book = await BookGoals.findByIdAndUpdate(
    {
      _id: booksId,
      createdBy: userId,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!book) {
    throw new NotFoundError(`No book with id ${booksId}`);
  }
  res.status(StatusCodes.OK).json({ book });
};
const getBookGoals = async (req, res) => {
  const {
    user: { userId },
    params: { id: bookId },
  } = req;
  const book = await BookGoals.findOne({
    _id: bookId,
    createdBy: userId,
  });
  if (!book) {
    throw new NotFoundError(`No book goal with id ${bookId}`);
  }
  res.status(StatusCodes.OK).json({ book });
};

module.exports = {
  deleteBookGoals,
  getBookGoals,
  createBookGoals,
  updateBookGoals,
  getAllBookGoals,
};
