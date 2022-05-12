import { buscarUsuario } from "../pages/BuscarUsuario.po"

When ("busco por um usuário pelo nome", (dados) => {
  let dado = dados.rowsHash()
  buscarUsuario.preencherBuscaPorNome(dado.name)
})

When ("busco por um usuário pelo email", (dados) => {
  let dado = dados.rowsHash()
  buscarUsuario.preencherBuscaPorEmail(dado.email)
})

Then ("verifico se o usuário buscado por nome foi listado na tela", () => {
  buscarUsuario.verificaNomeTela()
})

Then ("verifico se o usuário buscado por email foi listado na tela",() => {
  buscarUsuario.verificaEmailTela()
})