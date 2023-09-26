const Student={
    RA: "",
    Nome: "",
    DtIngressoCurso: "",
    Curso:"",
    Hobbie: "",
    VerCarterinha: function(){
        return "Carterinha"+this.Nome+"RA:"+this.RA
    },
    RegistroJSON:function(){
             return {
       "RA": this.RA,
       "Nome":this.Nome ,
       "DtIngressoCurso":this.DtIngressoCurso ,
       "Curso": this.Curso,
       "Hobbie": this.Hobbie
    }
    }
    
   
}

module.exports = Student