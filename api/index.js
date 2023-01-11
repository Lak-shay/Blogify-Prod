// nodemon will help us to make changes without starting the server again and again
// See default ports for all the used languages.
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// see how does authRoute works
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const catRoute = require("./routes/categories");
const multer = require("multer");
const cors = require("cors");
const path = require("path");


app.use(
  cors({
    origin: "*"
  })
);

dotenv.config();
const port = process.env.PORT || 5000;

// api calls are taken from postman desktop agent from chrome.
// after doing the app.use api call starts to work. The users also starts to get saved in the mongodb cloud server.
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// THIS IS FOR UPLOADING IMAGES TO THE IMAGES FOLDER.
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    // here req.body.name will decide the filename of the image uplaoded
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// see what this does.
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", catRoute);

app.use("/", (req, res) => {
  console.log("Hey this is main url.");
})

app.listen(port, () => {
  console.log("Backend is running");
})