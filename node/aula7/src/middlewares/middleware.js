module.exports = (req, res, next) => {
    console.log(`Método: ${req.method} - URL: ${req.url}`);
    next();
}