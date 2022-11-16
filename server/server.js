require('dotenv').config();

const express = require('express');
const connectDB = require("./config/db");
const postRoutes = require('./routes/postRoutes');
// const cors = require('cors');





connectDB();

const app = express();

app.use(express.json());
// app.use(cors());

app.get("/", (req,res) => {
    res.json({ message: "API running..."});
   
})

app.use("/api/posts/", postRoutes);


const PORT = process.env.PORT || 5000;

app.use(express.static("../client/build")); //tried this., then changed pre-fixed with <url> and appended to /api/posts
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

