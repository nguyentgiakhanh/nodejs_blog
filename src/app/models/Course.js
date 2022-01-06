const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    _id: ObjectId,
    name: {type: String},
    desc: {type: String},
    image: {type: String},
    slug: {type: String},
    detail: {type: String},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Course', Course)