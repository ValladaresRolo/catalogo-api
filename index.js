
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const { readData, writeData } = require("./functions")
require('dotenv').config()

const port = process.env.PORT

//middleware
app.use(bodyParser.json())



//create and read
app.get("/", (req, res) => {
    res.send("welcome to my api with Node.js pueltno")
})
app.get("/dishes", (req, res) => {
    const data = readData()
    res.json(data.dishes)
})

app.post("/dishes", (req, res) => {
    const data = readData()
    const dish = req.body
    const newDish = {
        id: data.dishes.length + 1,
        ...dish
    }
    data.dishes.push(newDish)
    writeData(data)
    res.json(newDish)
})

// books

app.get("/books", (req, res) => {
    const data = readData()
    res.json(data.books)
})

app.post("/books", (req, res) => {
    const data = readData()
    const book = req.body
    const newBook = {
        id: data.books.length + 1,
        ...book
    }
    data.books.push(newBook)
    writeData(data)
    res.json(newBook)
})

// update y delete

app.put("/dishes/:id", (req, res) => {
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id)//convierte de string a numerico
    const dishIndex = data.dishes.findIndex(dish => dish.id === id)
    data.dishes[dishIndex] = {
        id, ...body
    }
    writeData(data)
    res.json({ message: "el plato esta ok" })

})

app.delete("/dishes/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id)//convierte de string a numerico
    const dishIndex = data.dishes.findIndex(dish => dish.id === id)
    data.dishes.splice(dishIndex, 1)
    writeData(data)
    res.json({ message: "el plato esta borrao" })
})


// books
app.put("/books/:id", (req, res) => {
    const data = readData();
    const body = req.body;
    const id = parseInt(req.params.id)//convierte de string a numerico
    const bookIndex = data.books.findIndex(book => book.id === id)
    data.books[bookIndex] = {
        id, ...body
    }
    writeData(data)
    res.json({ message: "el libro esta ok" })

})

app.delete("/books/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id)//convierte de string a numerico
    const bookIndex = data.books.findIndex(book => book.id === id)
    data.books.splice(bookIndex, 1)
    writeData(data)
    res.json({ message: "el plato esta borrao" })
})

app.listen(port, () => {
    console.log(`El Servidor esta funcando en el puerto ${process.env.BACKEND_BASEURL}`)
})
