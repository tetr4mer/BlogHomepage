require('dotenv').config();

const postData = require('./data/postData');
const connectDB = require('./config/db');
const postModel = require('./models/postModelSchema');

connectDB();

//delete everything in database and insert the items
const importData = async () => {
    try {
        await postModel.deleteMany({});

        await postModel.insertMany(postData); //insert many from data folder hard coded post content array       
        console.log("Data import Success");

        process.exit();
    } catch (error) {
        console.error("Error with data import");
        console.error(error);
        process.exit(1);
    }
}

importData();