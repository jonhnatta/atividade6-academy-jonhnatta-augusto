class ListarUsuario {


  visitar() {
    cy.visit("/users")
  }

  listarUsuarios() {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", { fixture: "../fixtures/usuarios.json" })
   }

  listarSemRegistro() {
    cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
      statusCode: 200,
      body: []
    });
  }

  verificaListaUsuarios() {
    cy.get("#listaUsuarios").should("be.visible")
  }

  verificarOpcaoCadastrar(){
    cy.contains("p", "Cadastre um novo usuário").should("be.visible")
  }

}

export var listarUsuario = new ListarUsuario()