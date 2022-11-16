const express = require('express')

const port = 8001

const app = express()

app.get('/profile', (req, res) => {
    res.json([
        {name: 'Marcos Plata'},
        {age: 24},
        {country: 'Ecuador'}
    ])
});

app.post('/profile', (req, res) => {
    res.json([
        {company: 'Digital House'},
        {company:'Globant'},
        {company: 'Amazon'}
    ])
});


app.patch('/profile', (req, res) => {
    res.json([{1: 'Learn Programation'}, {2:'Play soccer'}, {3:'Listen to music'}])
})

//? Petición -> request -> req
//? respuesta  -> response -> res
app.get('/text/:mensaje', (req, res) => {
    const mensaje= req.params.mensaje
    res.json({
        message: `Este es el mensaje por parametro: ${mensaje}`
    })
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})