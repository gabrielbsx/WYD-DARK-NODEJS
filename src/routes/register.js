module.exports = (application) => {
    application.get('/register', (req, res) => {
        if (req.session.user == undefined) {
            application.src.controllers.dashboard.index(application, req, res)
        } else {
            application.src.controllers.register.index(application, req, res)
        }
    })
    application.post('/register', (req, res) => {
        if (req.session.user == undefined) {
            application.src.controllers.register.index(application, req, res)
        } else {
            application.src.controllers.dashboard.index(application, req, res)
        }
    })
}