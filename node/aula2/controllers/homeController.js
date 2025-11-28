exports.paginaInicial = (req, res) => {
    res.send(`<form action="/" method="post">
                <input type="text" name="nome" />
                <button type="submit">Enviar</button>
              </form>`);
}

exports.trataPost = (req, res) => {
    res.send(`Formulário recebido! Nome: ${req.body.nome}`);
}