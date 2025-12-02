exports.paginaInicial = (req, res) => {
    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send(`Formulário recebido! Nome: ${req.body.cliente}`);
}