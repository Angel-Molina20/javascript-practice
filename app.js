import express from 'express'

const app = express();

app.get('/', (req, res) => { res.json({
    Tittle: 'Practica js API',
    Version: '1.0.0',
    Author: "Angel Molina",
  })
});
