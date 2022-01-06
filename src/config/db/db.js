const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_db');
        console.log("Connect successfully!");
    } catch (error) {
        console.log(error)
    }
}

module.exports = { connect };