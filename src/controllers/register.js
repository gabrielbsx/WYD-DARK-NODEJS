const emailValidator = require('email-validator')
const bcrypt = require('bcrypt')
const { User } = require('../models/user')

module.exports.index = async (application, req, res) => {
    const msg = []
    const saltRounds = 10
    const rName = /^[a-zA-Z ]{4,16}$/
    const rUser = /^[a-zA-Z0-9]{4,12}$/
    const rPass = /^[a-zA-Z0-9]{4,12}$/

    if (req.body.user || req.body.pass || req.body.email || req.body.pass2 || req.body.name) {
        if (!req.body.name.match(rName)) {
            msg.push({
                type: 'error',
                content: 'Nome inválido, utilize apenas 4 a 16 caracteres alfanuméricos!'
            })
        }
        if (!req.body.user.match(rUser)) {
            msg.push({
                type: 'error',
                content: 'Usuário inválido, utilize apenas 4 a 12 caracteres alfanuméricos!'
            })
        }
        if (!req.body.pass.match(rPass)) {
            msg.push({
                type: 'error',
                content: 'Senha inválida, utilize apenas 4 a 12 caracteres alfanuméricos!'
            })
        }
        if (req.body.pass != req.body.pass2) {
            msg.push({
                type: 'error',
                content: 'As duas senhas não coincidem!'
            })
        }
        if (!emailValidator.validate(req.body.email)) {
            msg.push({
                type: 'error',
                content: 'E-mail inválido, digite um e-mail válido!'
            })
        }

        var pass = await bcrypt.hashSync(req.body.pass, saltRounds)

        if (msg.length == 0) {
            var CreateUser = await User.create({
                name: req.body.name,
                password: pass,
                user: req.body.user,
                email: req.body.email,
            }).then((user) => {
                return true
            }).catch((err) => {
                return false
            })
            
            if (CreateUser) {
                msg.push({
                    type: 'success',
                    content: 'Cadastro efetuado com sucesso!'
                })
            } else {
                msg.push({
                    type: 'error',
                    content: 'Não foi possível efetuar o cadastro!'
                })
            }
        }

    }

    res.render('./pages/register', {
        title: 'Cadastro',
        subtitle: 'Registrar conta',
        hero: true,
        message: msg
    })
}