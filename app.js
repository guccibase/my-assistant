const express = require("express")
const bodyparser = require("body-parser")

const app = express()



app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(express.static("public"))


app.listen(3000, () => {
    console.log("Listening on port 3000")
})


var date = new Date()
var days = date.getDay()
var day = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    weekday: "long",
    year: "numeric"
})
var items = []


app.get("/", (reg, res) => {




    res.render("list", {
        day: day,
        items: items
    })

})



app.post("/", (reg, res) => {
    items.push(reg.body.newItem)

    res.redirect("/")
})