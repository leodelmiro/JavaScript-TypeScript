require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes')
const path = require('path')
const meuMiddleware = require('./src/middlewares/middleware')

// Middleware para ler corpo de formularios (POST)
app.use(express.urlencoded({ extended: true }));
// Referenciando arquivos staticos
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
//  Set para usar as views, não precisa usar path, pode usar caminho absoluto.
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')


app.use(routes)

const PORT = process.env.PORT || 3000;
app.on('pronto', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

