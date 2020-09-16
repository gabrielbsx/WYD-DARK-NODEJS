module.exports = (application) => {
    application.get('/dashboard', (req, res) => {
        if (req.session.user != undefined) {
            application.src.controllers.dashboard.index(application, req, res)
        } else {
            application.src.controllers.home.index(application, req, res)
        }
    })
    application.post('/dashbaord', (req, res) => {
        if (req.session.user != undefined) {
            application.src.controllers.dashboard.index(application, req, res)
        } else {
            application.src.controllers.home.index(application, req, res)
        }
    })
}