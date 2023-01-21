const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const url = process.env.MONGO_LOCAL_URL

mongoose.connect(url, {}, () => {
    console.log('database was connected successfully');
})