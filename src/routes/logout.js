module.exports = (application) => {
    application.get('/logout', (req, res) => {
        if (req.session.user) {
            req.session.user = null
        }
        res.redirect('/')
    })
}