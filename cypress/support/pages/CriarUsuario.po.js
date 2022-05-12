class CriarUsuario {

  id = "037b7723-7ec7-4cf7-a9d7-991454a9d6fa"
  inputNome = "#name"
  inputEmail = "#email"
  pdatedAt = "2022-05-10T04:58:17.886Z"
  createdAt = "2022-05-10T04:58:17.886Z"
  mensagemApiErro = "User already exists."

  visitar() {
    cy.visit("/")
  }

  visitarTelaCadastroUsuario() {
    cy.get("a[href='/users/novo'").click()
  }

  preencherCadastro(nome, email) {
    this.preencherNome(nome)
    this.preencherEmail(email)
    cy.get("button[type='submit']").click()
  }


  CadastroNomeGrande(nome, email) {
    this.preencherNome(nome)
    this.preencherEmail(email)
    cy.get("button[type='submit']").click()
  }

  CadastroEmailGrande(nome, email) {
    this.preencherNome(nome)
    this.preencherEmail(email)
    cy.get("button[type='submit']").click()
  }

  preencherNome(nome) {
    cy.get(this.inputNome).type(nome)
  }

  preencherEmail(email) {
    cy.get(this.inputEmail).type(email)
  }

  verificaUsuarioSalvoComSucesso() {
    cy.contains("Usuário salvo com sucesso!").should("be.visible")
  }

  verificaUsuarioCadastroExistente() {
    cy.contains("Este e-mail já é utilizado por outro usuário.").should("be.visible")
  }

  verificaMensagemNomeErro() {
    cy.contains("Informe no máximo 100 caracteres para o nome").should("be.visible")
  }

  verificaMensagemEmailErro() {
    cy.contains("Informe no máximo 60 caracteres para o e-mail").should("be.visible")
  }
  verificaMensagemEmailInvalido() {
    cy.contains("Formato de e-mail inválido").should("be.visible")
  }

  interceptarCadastroCorreto(nome, email) {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
      statusCode: 201,
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
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
      statusCode: 422,
      body: { "error": this.mensagemApiErro }
    })
  }


}

export var criarUsuario = new CriarUsuario()