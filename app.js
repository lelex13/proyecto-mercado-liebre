const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, './public')));
app.listen(8000,() => {
    console.log('Servidor corriendo en el puerto 8000')
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});
/*app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})*/