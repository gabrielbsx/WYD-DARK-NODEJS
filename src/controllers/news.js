module.exports.index = (application, req, res) => {
    //const newsModel = new application.src.models.news()
    const msg = []

    //newsModel.getLastNews((err, result) => {
        res.render('./pages/news', {
            //  news: result,
            title: 'Notícias',
            subtitle: 'Novidades',
            hero: true,
            message: msg
        })
    //})
}