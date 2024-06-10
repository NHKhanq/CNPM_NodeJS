const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs-dev');
        console.log("OK")
    } catch (error) {
        console.log("NO OK")

    }
}

module.exports = { connect }