const { MongoClient } = require("mongodb")
const express = require("express")
let db

const app = express()
app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("public"))

app.get("/", async (req, res) => {
    const allUsers = await db.collection("users").find().toArray()
    res.render("home", { allUsers })
})

app.get("/admin", (req, res) => {
    res.render("admin")
})

app.get("/api/users", async (req, res) => {
    const allUsers = await db.collection("users").find().toArray()
    res.json(allUsers)
})

let port = 55432
app.listen(port, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
})
async function start() {
    //const client = new MongoClient("mongodb+srv://root:root@cluster0.axpqb61.mongodb.net/test")
    //?retryWrites=true&w=majority
    const client = new MongoClient("mongodb+srv://root:root@cluster0.axpqb61.mongodb.net/AmazingMernApp");

    await client.connect()
    db = client.db()


}

start()