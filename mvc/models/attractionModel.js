class atrativoTuristico{
    nome
    foto
    latitude
    longitude
    descricao

    constructor(nome, foto, latitude, longitude, descricao){
        this.nome = nome
        this.foto = foto
        this.latitude = latitude
        this.longitude = longitude
        this.descricao = descricao
    }

    cadastrarAtrativo(){
        console.log("Atrativo Turístico cadastrado com sucesso!")
    }
    deletarAtrativo(){
        console.log("Atrativo Turístico deletado com sucesso!")
    }
    atualizarAtrativo(){
        console.log("Atrativo Turístico atualizado com sucesso!")
    }
    buscarAtrativo(){
        console.log("Isso foi o que encontramos para essa busca.")
    }
    buscarTodosAtrativo(){
        console.log("Aqui estão todos os Atrativos Turísticos já cadastrados.")
    }

    pegarInformacoes(){
        return{
            "nome": this.nome,
            "foto": this.foto,
            "latitude": this.latitude,
            "longitude": this.longitude,
            "descricao": this.descricao
        }
    }
}

module.exports = atrativoTuristico