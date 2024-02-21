import asynHandler from "./asyncHandler.js";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

const authentificateUser = asynHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({ error: "Not authorized, no token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    console.error(error);
    res.status(401).send({ error: "Not authorized, token failed" });
  }
});

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ error: "Not authorized as an admin" });
  }
};

export { authentificateUser, authorizeAdmin };