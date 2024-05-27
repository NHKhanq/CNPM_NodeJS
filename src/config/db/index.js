const mongoose = require('mongoose');

async function connect() {
    try {
        const DB_ENDPOINT = process.env.DB_ENDPOINT || "mongodb://localhost:27018/nodejs-dev";
        await mongoose.connect(DB_ENDPOINT, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Kết nối dữ liệu thành công!');
    } catch (error) {
        console.error('Kết nối thất bại!', error);
    }
}

module.exports = { connect };
