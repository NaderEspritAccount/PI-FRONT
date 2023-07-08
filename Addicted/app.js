const http = require("http");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const challengesRouter = require("./routes/challenges");
const postRouter = require("./routes/post");
const commRouter = require("./routes/comm");
const likeRouter = require("./routes/like");
const app = express();

mongoose.set("strictQuery", true);

// Connect to MongoDB database
mongoose
  .connect("mongodb://127.0.0.1:27017/ahla", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the DB!");
  })
  .catch((err) => {
    console.log(err.message);
  });

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:4200"],

    // "true" will copy the domain of the request back
    // to the reply. If you need more control than this
    // use a function.

    credentials: true, // This MUST be "true" if your endpoint is
    // authenticated via either a session cookie
    // or Authorization header. Otherwise the
    // browser will block the response.

    methods: "POST,GET,PUT,OPTIONS,DELETE,PATCH", // Make sure you're not blocking
    // pre-flight OPTIONS requests
  })
);
// Route handlers
app.use("/", indexRouter); // Routes for the homepage
app.use("/users", usersRouter); // Routes for user-related operations
app.use("/challenges", challengesRouter);
app.use("/posts", postRouter);
app.use("/comms", commRouter);
app.use("/likes", likeRouter);

// Enable CORS for all routes

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404)); // Passes a 404 error to the next middleware
});

// Error handler
app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

const server = http.createServer(app);
server.listen(5000, () => {
  console.log("App is running on port 5000");
});
