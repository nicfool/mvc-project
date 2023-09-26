class Moeda{
    nome
    startMoeda
    genero
    tipo
    latitude
    longitude

    constructor(nome, valor, imagem){
        this.nome = nome
        this.valor = valor
        this.imagem = imagem
    }

    cadastrarMoeda(){
        console.log("Moeda cadastrada com sucesso!")
    }
    deletarMoeda(){
        console.log("Moeda deletada com sucesso!")
    }
    atualizarMoeda(){
        console.log("Moeda atualizada com sucesso!")
    }
    buscarMoeda(){
        console.log("Isso foi o que encontramos para essa busca.")
    }
    buscarTodosMoeda(){
        console.log("Aqui estão todos as Moedas já cadastrados.")
    }

    pegarInformacoes(){
        return{
            "nome": this.nome,
            "valor": this.valor,
            "imagem": this.imagem
        }
    }
}

module.exports = Moeda