class DeletarUsuario {

  btnDelete = "button[data-test='userDataDelete']"
  mensagemAtencao = "Deseja realmente remover este usuário ?"
  btnConfirmarExclusao = ".gBlXkK"

  clicarDeletarUsuario() {
    cy.get(this.btnDelete).click()
  }

  verificarMensagemAtencao() {
    cy.contains(this.mensagemAtencao).should("be.visible")
  }

  verificaBotaoConfirmar() {
    cy.contains("Confirmar").should("be.visible")
  }
  verificaBotaoCancelar() {
    cy.contains("Cancelar").should("be.visible")
  }

  confirmarExclusao(){
    cy.get(this.btnConfirmarExclusao).click()
    cy.intercept("DELETE","https://crud-api-academy.herokuapp.com/api/v1/users/",{
         statusCode: 204,
    })
    this.verificaMensagemExclusao()
  }

  verificaMensagemExclusao(){
    cy.contains("Usuário removido!").should("be.visible")
  }

}

export var deletarUsuario = new DeletarUsuario()