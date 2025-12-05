const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login')
}

exports.register = async function (req, res) {
    try {
        const login = new Login(req.body)
        await login.register()

        if (login.errors.length > 0) {
            req.flash('errors', login.errors)
            req.session.save(function () {
                const backURL = req.header('Referer') || '/login';
                res.redirect(backURL);
            })

            return
        }

        req.flash('success', 'Usuário cadastrado com sucesso.')
        req.session.save(function () {
            const backURL = req.header('Referer') || '/login';
            return res.redirect(backURL);
        })
    } catch {
        console.log(e)
        return res.render('404')
    }
}