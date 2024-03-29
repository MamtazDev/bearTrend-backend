
const userRoutes = require('./modules/user/user.routes')
const trendsRoutes = require('./modules/trends/trends.routes')

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const http = require("http");
const path = require("path");

const PORT = process.env.PORT || 8000;

const app = express();
const Server = http.createServer(app);


// Middleware
app.use(cors());
app.use(express.json());

connectDB();

// routes import 
// Routes

app.use("/api/user", userRoutes);
app.use("/api/trends", trendsRoutes);
app.use("/api/likes", trendsRoutes);

// redirecting the upload folder
app.use("/api/v1/uploads", express.static(path.join(__dirname, "/")));


// multer image upload 

// Testing API

app.get("/", (req, res) => {
  res.send(`Api is working fine!`);
});

Server.listen(PORT, () => {
  console.log(`Server is Running PORT: ${PORT}`);
});
