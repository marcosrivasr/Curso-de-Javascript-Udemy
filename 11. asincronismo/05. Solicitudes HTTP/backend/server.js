const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`
        <html>
            <header>
                <title>Sitio web!</title>
            </header>
            <body>
                <h1>Hola mundo! Esta es una respuesta desde el servidor</h1>
            </body>
        </html>
    `);
});

app.get('/api', (req,res) => {
    res.status(200).json({
        mensaje: "Hola Mundo",
        datos: [
            {
                id: 0,
                title: 'Lavar el carro',
                completed: false
            },
            {
                id: 1,
                title: 'Hacer la comida',
                completed: true
            }
        ]
    });
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json({"resultado": "exitoso desde POST", "datos": req.body});
});

app.listen(3000, () => {
    console.log('servidor iniciado...');
});