import { criarUsuario } from "../pages/CriarUsuario.po"

Given("acessei a tela de listar usuários", () => {
  criarUsuario.visitar()
})

Given("acessei a tela de criar usuário", () => {
  criarUsuario.visitarTelaCadastroUsuario()
})

When("informo os dados para cadastro", (dados) => {
  let dado = dados.rowsHash()
  criarUsuario.interceptarCadastroCorreto(dado.nome, dado.email)
  criarUsuario.preencherCadastro(dado.nome, dado.email)
})

When("informo os dados para cadastro com email existente", (dados) => {
  let dado = dados.rowsHash()
  criarUsuario.interceptarCadastroExistente()
  criarUsuario.preencherCadastro(dado.nome, dado.email)
})

When ("informo os dados para cadastro com nome maior que 100 caracteres",(dados) => {
  let dado = dados.rowsHash()
  criarUsuario.CadastroNomeGrande(dado.nome, dado.email)
})

When ("informo os dados para cadastro com email maior que 60 caracteres",(dados) => {
  let dado = dados.rowsHash()
  criarUsuario.CadastroEmailGrande(dado.nome, dado.email)
})

Then("verifico se o usuário foi salvo com sucesso", () => {
  criarUsuario.verificaUsuarioSalvoComSucesso()
})

Then("verifico se a mensagem de usuário já existente foi exibida", () => {
  criarUsuario.verificaUsuarioCadastroExistente()
})

Then ("verifico a mensagem Informe no máximo 100 caracteres para o nome", () => {
  criarUsuario.verificaMensagemNomeErro()
})

Then ("verifico se a mensagem Informe no máximo 60 caracteres para o e-mail", () => {
  criarUsuario.verificaMensagemEmailErro()
})

Then ("verifico a mensagem de Formato de e-mail inválido", () => {
  criarUsuario.verificaMensagemEmailInvalido()
})



