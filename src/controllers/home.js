module.exports.index = (application, req, res) => {
    //var newsModel = new application.src.models.home()
    var msg = []
    //newsModel.getLastNews((err, result) => {
        res.render('./pages/home', {
            //news: result,
            title: 'Home',
            hero: false,
            message: msg
        })
    //})
}