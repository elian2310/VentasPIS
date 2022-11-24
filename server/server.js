const express = require('express');
const app = express();
var now = new Date();


// const siat_api_url = '/solicitudCUFD'

// const response = await fetch(siat_api_url);
// const jsonSiat = await response.json()


app.get("/api", (req, res) => {
    res.json({"ControlCode": "12345"});
})


app.listen(5000, () => { console.log("Servidor iniciado en el puerto 5000")})