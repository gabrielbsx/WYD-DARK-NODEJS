module.exports = (application) => {
    application.get('/news', (req, res) => {
        application.src.controllers.news.index(application, req, res)
    })
}