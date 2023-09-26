class Personagem{
    nome
    startMoeda
    genero
    tipo
    latitude
    longitude

    constructor(nome, startMoeda, genero, tipo, latitude, longitude){
        this.nome = nome
        this.startMoeda = startMoeda
        this.genero = genero
        this.tipo = tipo
        this.latitude = latitude
        this.longitude = longitude
    }

    cadastrarPersonagem(){
        console.log("Personagem cadastrado com sucesso!")
    }
    deletarPersonagem(){
        console.log("Personagem deletado com sucesso!")
    }
    atualizarPersonagem(){
        console.log("Personagem atualizado com sucesso!")
    }
    buscarPersonagem(){
        console.log("Isso foi o que encontramos para essa busca.")
    }
    buscarTodosPersonagem(){
        console.log("Aqui estão todos os Personagens já cadastrados.")
    }

    pegarInformacoes(){
        return{
            "nome": this.nome,
            "startMoeda": this.startMoeda,
            "genero": this.genero,
            "tipo": this.tipo,
            "latitude": this.latitude,
            "longitude": this.longitude
        }
    }
}

module.exports = Personagem