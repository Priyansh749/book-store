const express = require('express')
const app = express()
const mg = require("mongoose")
const router = require("./routes/bookRoutes")
const cors = require("cors")

// Middlewares

app.use(cors())

app.use(express.json())
app.use("/books", router)

mg.connect("mongodb+srv://admin:BookStore_123@cluster0.vy0djak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
)
    .then(() => console.log("Database connected!!"))
    .then(() => {
        app.listen(5000)
    }).catch((err) => console.log(err))



// admin
// BookStore_123