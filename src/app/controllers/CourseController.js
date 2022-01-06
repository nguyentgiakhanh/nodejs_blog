const { singleMongooseToObject } = require('../../util/mongoose')
const Course = require('../models/Course')
class SiteController{
    
    courseDetail(req,res,next){
        // res.send(req.params.slug)
        Course.findOne({slug: req.params.slug})
            .then(course => {
                res.render('courses/coursedetail', {
                    course: singleMongooseToObject(course)
                })
            })
            .catch(next)

        // Course.find({})
        //     .then(courses => {
        //         res.render('')
        //     })
    }
    

}

module.exports = new SiteController;