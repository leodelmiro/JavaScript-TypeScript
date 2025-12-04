exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariabelLocal = 'Este é o valor da variável local'
    console.log(`Método: ${req.method} - URL: ${req.url}`);
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err) {
        return res.render('404')
    }

    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}