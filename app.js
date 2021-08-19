const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const items = []

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    var today = new Date()

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    var day = today.toLocaleDateString("en-US", options)

    
    res.render('list', { kindOfDay: day, newListItems: items })

})

app.post("/", (req, res) => {

    var item = req.body.newItem
    items.push(item)

    res.redirect("/")
})

app.listen(3000, () => {
    console.log('Server start on port 3000')
})