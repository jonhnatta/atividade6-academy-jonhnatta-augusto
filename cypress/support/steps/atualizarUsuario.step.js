import { atualizarUsuario } from "../pages/AtualizarUsuario.po"

When("clico para ver detalhes do usuário pesquisado", () => {
  atualizarUsuario.clicarVerDetalhes()
})

When("clico no botão editar", () => {
  atualizarUsuario.clicarEditar()
})

Then("atualizo o nome do usuário", (dados) => {
  let dado = dados.rowsHash()
  atualizarUsuario.alterarNome(dado.nome)
})

Then("atualizo o email do usuário", (dados) => {
  let dado = dados.rowsHash()
  atualizarUsuario.alterarEmail(dado.nome, dado.email)
})

Then("verifico a mensagem atualizado com sucesso", () => {
  atualizarUsuario.visualizarMensagemAtualizado()
})

Then("atualizo o email do usuário para um existente", (dados) => {
  let dado = dados.rowsHash()
  atualizarUsuario.alterarEmailExistente(dado.email)
})

Then("verifico se a mensagem de usuário já existente foi exibida", () => {
  atualizarUsuario.visualizarMensagemUsuarioExistente()
  atualizarUsuario.verificaBtnCancelar()
})

Then("verifico a mensagem Informe no máximo 100 caracteres para o nome", ()=>{
  atualizarUsuario.verificaNomeErro()
})

Then("verifico a mensagem Informe no máximo 60 caracteres para o email", ()=>{
  atualizarUsuario.verificaEmailErro()
})

Then("verifico a mensagem de alterar com email invalido", ()=>{
  atualizarUsuario.verificaEmailInvalido()
})


