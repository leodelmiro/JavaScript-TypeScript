const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')

// Middleware para ler corpo de formularios (POST)
app.use(express.urlencoded({ extended: true }));
// Middleware para JSON (POST)
app.use(express.json());
//  Set para usar as views, não precisa usar path, pode usar caminho absoluto.
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')


app.use(routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
