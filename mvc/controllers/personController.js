//Este arquivo guarda as configurações do servidor

const app = require('../../startup.js')
const PersonagemModel = require('../models/CharacterModel.js')

app.get("/getAllPersons",(req, res)=> {

    res.setHeader("Acess-Control-Allow-Origin", "*")

    const pokemon = new Personagem("Charmander", "Masculino", "12", "Fogo")
    const powerRanger = new Personagem("Preto", "Masculino", "56", "mamute")
    const cavaleiroZodiago = new Personagem("Shiryu", "Masculino", "18", "Dragão")

    res.json(pokemon.pegarInformacoes())
})
    