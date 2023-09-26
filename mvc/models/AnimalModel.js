class Animal{
    tamanho
    cor
    raca
    tipo

    constructor(tamanho, cor, raca, tipo){
        this.tamanho = tamanho
        this.cor = cor
        this.raca = raca
        this.tipo = tipo
    }

    anda(){
        console.log("Andou!")
    }
}

let gato = new Animal("24cm", "Marrom", "Siamês", "Felino")
let cachorro = new Animal("39cm", "Preto", "Pinscher", "Canino")

console.log(gato.cor)