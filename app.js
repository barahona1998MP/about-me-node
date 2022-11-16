const express = require('express')

const port = 8001

const app = express()

app.get('/profile', (req, res) => {
    res.json({
        name: 'Marcos Plata',
        age: 24,
        country: 'Ecuador'
    })
});

app.post('/profile', (req, res) => {
    res.json([
        'Digital House',
        'Globant',
        'Amazon'
    ])
});

app.patch('/profile', (req, res) => {
    res.json([['Learn Programation'], ['Play soccer'], ['Listen to music']])
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})