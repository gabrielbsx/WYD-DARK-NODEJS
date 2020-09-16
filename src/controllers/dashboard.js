module.exports.index = (application, req, res) => {
    console.log(req)
    var msg = []
    res.render('./pages/dashboard/home', {
        title: 'Painel de Controle',
        subtitle: 'Bem-vindo ao painel de controle',
        hero: true,
        message: msg
    })
}