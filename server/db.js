const mongoose = require("mongoose");

const conn = async() => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect("mongodb+srv://mean1:Mean12014@clustermean1.wyjylsq.mongodb.net/mern1?retryWrites=true&w=majority", connectionParams);
        console.log("Connected to database is successful.");
    } catch (error) {
        console.log("Unable to connect to the database.", error);
    }
};

module.exports = conn;