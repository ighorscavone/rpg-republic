const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Olá mundo!');
})


app.get('/cadastro', (req, res) => {
    //res.send('Tela de cadastro!');
    res.render('teste');
})

app.listen(3000, () => {
    console.log('Server no ar!: http://localhost:3000/');
})