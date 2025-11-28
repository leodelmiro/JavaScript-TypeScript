const express = require('express');
const app = express();
const routes = require('./routes')

// Middleware para ler corpo de formularios (POST)
app.use(express.urlencoded({ extended: true }));
// Middleware para JSON (POST)
app.use(express.json());

app.use(routes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
