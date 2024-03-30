
import express from 'express'

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { res.json({
    Tittle: 'Practica js API',
    Version: '1.0.1',
    Author: "Angel Molina",
  })
});

const PORT = process.env.APP_PORT || 3000;

 app.listen(PORT, () => { 
    console.log(`Server is up and running on port ${PORT}`)});
     