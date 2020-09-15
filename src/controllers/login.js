const { User } = require('../models/user')

module.exports.index = async (application, req, res) => {
    const regex = /^[a-zA-Z0-9]{4,12}$/
    const msg = []

    if (req.body.user || req.body.pass) {
        if (!req.body.user.match(regex)) {
            msg.push({
                type: 'error',
                content: 'Usuário inválido. Escreva apenas 4 a 12 caracteres alfanuméricos!'
            })
        }
        if (!req.body.pass.match(regex)) {
            msg.push({
                type: 'error',
                content: 'Senha inválida. Escreva apenas 4 a 12 caracteres alfanuméricos!'
            })
        }
        if (msg.length == 0) {
            var loginUser = await User.findOne({
                where: {
                    user: req.body.user
                }
            }).then((user) => {
                return user
            }).catch((err) => {
                return false
            })
            
            if (loginUser !== false) {
                if ()
            } else {
                msg.push({
                    type: 'error',
                    content: 'Não foi possível efetuar o login!'
                })
            }

            msg.push({
                type: 'success',
                content: 'login efetuado com sucesso'
            })
        }
    }
    
    res.render('./pages/login', {
        title: 'Login',
        subtitle: 'Efetuar login',
        hero: true,
        message: msg
    })
}