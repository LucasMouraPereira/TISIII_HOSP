const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

//rotas
const records = require("./router/recordRouter");
const filter = require("./router/filterRouter");

//View engine
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Database

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso");
    }).catch((error) => {
        console.log(error);
    });

app.use("/", records);
app.use("/filter", filter);

app.listen(8080, () => {
    console.log("O servidor esta rodando");
});