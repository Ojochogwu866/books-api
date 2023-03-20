const User = require("../models/user");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const user = await User.create({
    ...req.body,
  });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
  console.error(error);
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  //compare password
  if (!user) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  res
    .status(StatusCodes.OK)
    .json({
      user: { name: user.name, id: user._id, email: user.email },
      token,
    });
};
const getUserProfile = async (req, res) => {
  const { userId } = req.user;
  const user = await User.findById(userId);
  res
    .status(StatusCodes.OK)
    .json({ user: { name: user.name, email: user.email } });
};
module.exports = {
  register,
  login,
  getUserProfile,
};
