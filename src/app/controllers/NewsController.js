
class NewsController{
    
    // [GET] /news
    index(req,res) {
        res.render('page2')
    }

    // [GET] /news/:slug
    learningNodeJS(req,res){
        res.render('page')
    }

}

module.exports = new NewsController;