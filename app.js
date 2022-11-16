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

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})