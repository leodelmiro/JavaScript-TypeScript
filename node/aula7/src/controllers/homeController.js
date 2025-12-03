exports.paginaInicial = (req, res) => {
    res.render('index');
    return
};

exports.trataPost = (req, res) => {
    res.send(`Formulário recebido! Nome: ${req.body.cliente}`);
    return
};