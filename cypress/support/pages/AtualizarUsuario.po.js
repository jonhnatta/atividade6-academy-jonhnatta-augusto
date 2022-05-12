class AtualizarUsuario {

  btnVerDetalhes = "#userDataDetalhe"
  btnEditar = "button[type='button']"
  inputNome = "#userName"
  inputEmail = "#userEmail"

  id = "037b7723-7ec7-4cf7-a9d7-991454a9d6fa"
  nome = "jonhnatta"
  email = "jonhnatta@gmail.com"
  pdatedAt = "2022-05-10T04:58:17.886Z"
  createdAt = "2022-05-10T04:58:17.886Z"

  clicarVerDetalhes() {
    cy.intercept("GET", `https://crud-api-academy.herokuapp.com/api/v1/users/${this.id}`, {
      statusCode: 200,
      body:
      {
        "id": this.id,
        "name": this.nome,
        "email": this.email,
        "createdAt": this.pdatedAt,
        "updatedAt": this.createdAt
      }
    })
    cy.get(this.btnVerDetalhes).click()
  }

  clicarEditar() {
    cy.get(this.btnEditar).click()
  }

  clicarSalvar(){
    cy.contains("Salvar").click()
  }

  alterarNome(nome, email) {
    email = this.email
    cy.get(this.inputNome).clear()
    cy.get(this.inputNome).type(nome)
    this.interceptarAlteracao(nome, email)
    this.clicarSalvar()
  }

  alterarEmail(nome,email) {
    cy.get(this.inputEmail).clear()
    cy.get(this.inputEmail).type(email)
    this.interceptarAlteracao(nome, email)
    this.clicarSalvar()
  }

  alterarEmailExistente(email) {
    cy.get(this.inputEmail).clear()
    cy.get(this.inputEmail).type(email)
    this.interceptarCadastroExistente()
    this.clicarSalvar()
  }

  interceptarAlteracao(nome, email) {
    cy.intercept("PUT",`https://crud-api-academy.herokuapp.com/api/v1/users/${this.id}`, {
      statusCode: 200,
      body: [{
        "id": this.id,
        "name": nome,
        "email": email,
        "updatedAt": this.updatedAt,
        "createdAt": this.createdAt
      }]
    })
  }

  interceptarCadastroExistente() {
    cy.intercept("PUT",`https://crud-api-academy.herokuapp.com/api/v1/users/${this.id}`, {
      statusCode: 422,
      body: { "error": this.mensagemApiErro }
    })
  }

  visualizarMensagemAtualizado(){
    cy.contains("Informações atualizadas com sucesso!").should("be.visible")
  }

  visualizarMensagemUsuarioExistente(){
    cy.contains("Este e-mail já é utilizado por outro usuário.").should("be.visible")
  }

  verificaBtnCancelar(){
    cy.contains("Cancelar").should("be.visible")
  }

  verificaNomeErro(){
    cy.contains("Informe no máximo 100 caracteres para o nome").should("be.visible")
  }

  verificaEmailErro(){
    cy.contains("Informe no máximo 60 caracteres para o e-mail").should("be.visible")
  }
  verificaEmailInvalido(){
    cy.contains("Formato de e-mail inválido").should("be.visible")
  }

}

export var atualizarUsuario = new AtualizarUsuario()