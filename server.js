const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3000

app.use(express.static(__dirname+'/public'))

//Expres HBS engine
hbs.registerPartials( __dirname + '/views/partials')
app.set('view engine', 'hbs');


 
app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'pedro nEl builes mOreno'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        nombre: 'pedro nEl builes mOreno'
    })
})
 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
})