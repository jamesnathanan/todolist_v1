const express = require('express')
const bodyParser = require('body-parser')

const app = express()

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

    
    res.render('list', { kindOfDay: day })

})

app.post("/", (req, res) => {
    console.log("Posting ...")
    console.log(req.body.newItem);
    res.send("<h1>You post a list</h1>")
})

app.listen(3000, () => {
    console.log('Server start on port 3000');
})