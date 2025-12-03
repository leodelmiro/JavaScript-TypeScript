require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
// const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');

// Middleware para ler corpo de formularios (POST)
app.use(express.urlencoded({ extended: true }));
// Referenciando arquivos staticos
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());

// Desabilitando sem HTTPS
//app.use(helmet)

const sessionOptions = session({
    secret: 'podeserqualquercoisa',
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions)
app.use(flash())

//  Set para usar as views, não precisa usar path, pode usar caminho absoluto.
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(csrf());
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

const PORT = process.env.PORT || 3000;
app.on('pronto', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

