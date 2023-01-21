const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/userRouter");
require("./dbconnect/connection")
dotenv.config();
const app = express();

// middleware
app.use(express.json())

app.use("/api", router)
const port = process.env.PORT || 8000
app.listen(port, ()=> {
    console.log(`server is running on port on http://localhost:${port}`);
})