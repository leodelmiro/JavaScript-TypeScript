const express = require('express');
const app = express();

// Middleware para ler corpo de formularios (POST)
app.use(express.urlencoded({ extended: true }));
// Middleware para JSON (POST)
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`<form action="/" method="post">
                <input type="text" name="nome" />
                <button type="submit">Enviar</button>
              </form>`);
});

app.get('/testes/:idUsuarios', (req, res) => {
    console.log(req.query);
    res.send(req.params.idUsuarios);
});

app.post('/', (req, res) => {
    req.body;
    res.send('POST request to /testes ' + req.body.nome);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
