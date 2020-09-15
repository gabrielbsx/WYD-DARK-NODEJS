module.exports = (application) => {
    application.get('/login', (req, res) => {
        application.src.controllers.login.index(application, req, res)
    })
    application.post('/login', (req, res) => {
        application.src.controllers.login.index(application, req, res)
    })
}