const express = require('express')
const route = express.Router()
const courseController = require('../app/controllers/CourseController')

route.use('/:slug', courseController.courseDetail)

module.exports = route
