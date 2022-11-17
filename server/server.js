const express = require('express')
const app = express()

app.get("/apiFacturacion", (req, res) => {
    res.json({"users": ["user1", "user2", "user3"]})
})

app.listen(5000, () => { console.log("Servidor iniciado en el puerto 5000")})