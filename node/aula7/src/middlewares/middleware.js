module.exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariabelLocal = 'Este é o valor da variável local'
    console.log(`Método: ${req.method} - URL: ${req.url}`);
    next();
}