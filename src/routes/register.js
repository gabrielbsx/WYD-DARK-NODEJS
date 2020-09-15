module.exports = (application) => {
    application.get('/register', (req, res) => {
        application.src.controllers.register.index(application, req, res)
    })
    application.post('/register', (req, res) => {
        application.src.controllers.register.index(application, req, res)
    })
}