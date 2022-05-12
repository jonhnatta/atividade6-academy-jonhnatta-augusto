class BuscarUsuario {

  inputBusca = ".sc-gKXOVf"
  id = "037b7723-7ec7-4cf7-a9d7-991454a9d6fa"
  nome = "jonhnatta"
  email = "jonhnatta@gmail.com"
  pdatedAt = "2022-05-10T04:58:17.886Z"
  createdAt = "2022-05-10T04:58:17.886Z"
  metodo = "GET"
  statusCode = 200

  preencherBuscaPorNome(nome) {
    this.listarUsuarioBuscadoPorNome()
    cy.get(this.inputBusca).click().type(nome)
  }

  preencherBuscaPorEmail(email) {
    this.listarUsuarioBuscadoPorEmail()
    cy.get(this.inputBusca).click().type(email)
  }

  verificaNomeTela(nome){
    nome = this.nome
    cy.contains(nome).should("be.visible")
  }

  verificaEmailTela(email){
    email = this.email
    cy.contains(email).should("be.visible")
  }

  listarUsuarioBuscadoPorNome(){
    cy.intercept(this.metodo,`https://crud-api-academy.herokuapp.com/api/v1/search?value=${this.nome}`,{
         statusCode: this.statusCode,
         body:[
            {
                "id": this.id,
                "name": this.nome,
                "email": this.email,
                "createdAt": this.pdatedAt,
                "updatedAt": this.createdAt
            }
        ]
      })
  }

  listarUsuarioBuscadoPorEmail(){
    cy.intercept('GET',`https://crud-api-academy.herokuapp.com/api/v1/search?value=${this.email}`,{
         statusCode: 200,
         body:[
            {
                "id": this.id,
                "name": this.nome,
                "email": this.email,
                "createdAt": this.pdatedAt,
                "updatedAt": this.createdAt
            }
        ]
      })
  }

}

export var buscarUsuario = new BuscarUsuario()