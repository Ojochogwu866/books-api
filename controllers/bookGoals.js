const BookGoals = require("../models/bookGoals");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const createBookGoals = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const bookGoals = await BookGoals.create(req.body);
  res.status(StatusCodes.CREATED).json({ bookGoals });
};

// const deleteBookGoals = async (req, res) => {
//   const {
//     user: { userId },
//     params: { id: bookId },
//   } = req;
//   const book = await Books.findByIdAndRemove({
//     _id: bookId,
//     createdBy: userId,
//   });
//   if (!book) {
//     throw new NotFoundError(`No book with id ${bookId}`);
//   }
//   res.status(StatusCodes.OK).send("Book removed succesfully");
// };
// const updateBookGoals = async (req, res) => {
//   const {
//     body: { bookTitle, bookAuthor, bookPages, bookGenre, pagesLeft },
//     user: { userId },
//     params: { id: booksId },
//   } = req;
//   if (
//     bookAuthor === "" ||
//     bookPages === "" ||
//     bookTitle === "" ||
//     bookGenre === "" ||
//     pagesLeft === ""
//   ) {
//     throw new BadRequestError("fields cannot be empty");
//   }
//   const book = await Books.findByIdAndUpdate(
//     {
//       _id: booksId,
//       createdBy: userId,
//     },
//     req.body,
//     { new: true, runValidators: true }
//   );
//   if (!book) {
//     throw new NotFoundError(`No book with id ${booksId}`);
//   }
//   res.status(StatusCodes.OK).json({ book });
// };
// const getBookGoals = async (req, res) => {
//   const {
//     user: { userId },
//     params: { id: bookId },
//   } = req;
//   const book = await Books.findOne({
//     _id: bookId,
//     createdBy: userId,
//   });
//   if (!book) {
//     throw new NotFoundError(`No job with id ${bookId}`);
//   }
//   res.status(StatusCodes.OK).json({ book });
// };

module.exports = {
  //   deleteCurrentBookGoals,
  //   getCurrentBookGoals,
  createBookGoals,
  //   updateCurrentBookGoals,
};
