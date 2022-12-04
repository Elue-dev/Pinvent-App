const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const GlobalError = require("./utils/global_error");
const errorHandler = require("./controllers/error_controller");

const userRouter = require("./routes/user_route");

const app = express();

app.use(cors());

app.use(express.json({ limit: "10kb" }));

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(
    new GlobalError(`Oops! Can't find ${req.originalUrl} on this server`, 404)
  );
});

app.use(errorHandler);

module.exports = app;
