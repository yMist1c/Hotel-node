const express = require("express");
const router = express.Router();
const {body, validationResult} = require("express-validator");

const usuarioController = require("../controllers/usuarioController");
const { emit } = require("../../config/pool_conexoes");


router.get("/", (req, res)=>{
    res.render("pages/index");
});

router.get("/login", (req, res)=>{
    res.render("pages/login");
} )

router.get("/cadastro", (req, res)=>{
    res.render("pages/cadastro", 
        {"listaErros":null, "valores":{nome:"", senha:"","csenha":"", email:""}, "falha":null})
})

router.post("/cadastro", 
    usuarioController.validacaoFormularioCadastro, 
    (req, res) =>{
    usuarioController.inserirUsuario(req, res);
} )



router.get("/perfil", (req, res)=>{
    res.render("pages/perfil")
})

router.get("/teste",  (req, res)=>{
    //requisitar o model
    // const usuarioModel = require("../models/usuarioModel");

    //teste do findAll

    // let resultados = await usuarioModel.findAll();
    // console.log(resultados);
    
    //teste do create
    
    // let dadosParaInserir = {"nome":"Cecilia","senha":"ceci1234", "email":"cecili@gmail.com" }
    
    // let resultadoInsert = await usuarioModel.create(dadosParaInserir);
    
    // let resultados = await usuarioModel.findAll();

    const usuarioController = require("../controllers/usuarioController");
    
    console.log( usuarioController.validacaoFormularioCadastro);




})


module.exports = router