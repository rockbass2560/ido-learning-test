require("dotenv").config();

const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

require("./jwt-strategy");
const routes = require('./routes');

app.use("/", routes);

//errores globales
app.use((err, req, res, next)=>{
    res.status(err.status || 500).send({
        message: err.message || "Error interno en el servidor"
    });
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor ejecutandose en puerto: ${port}`);
});