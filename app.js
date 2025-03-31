const express = require("express");
const app = express();
const env = require("dotenv").config();

app.use(express.static("./app/public"));

app.set("view engine", "ejs");
app.set("views", "./app/views");


//responsáveis por permitir a solicitação de analise de entrada 
//anexa o dados do formulário no objto body
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const rotaPrincipal = require("./app/routes/router");
app.use("/", rotaPrincipal);

const rotaAdm = require("./app/routes/router-adm");
app.use("/adm", rotaAdm);

app.listen(process.env.APP_PORT, ()=>{
    console.log(`Servidor onLine!\nhttp://localhost:${process.env.APP_PORT}`);
});