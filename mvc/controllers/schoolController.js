const app = require('../../startup')
const schoolModel = require("../models/schoolModel")


app.get("/getSchool",(req, res)=> {
    

     school.Name = "Placidio"
     school.Endereco = "R. Abílio Nascimento, 1333 - Parque Alvorada, Pres. Prudente"
     school.Diretor = "José"
     school.Telefone =  3222-4999
     school.CNPJ = 938498419318
     res.send(`A escola se chama ${school.Name} seu endereço é ${school.Endereco} seu diretor se chama ${school.Diretor} e o telefone da escola é ${school.Telefone} e seu CNPJ é ${school.CNPJ}`)
 
})
    