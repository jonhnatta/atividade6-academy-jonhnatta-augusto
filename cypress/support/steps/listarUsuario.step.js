
import { listarUsuario } from "../pages/ListarUsuario.po"


Given ("acessei a tela de usuários", () => {
  listarUsuario.visitar()
})

When ("possuo usuários cadastrados",() =>{
  listarUsuario.listarUsuarios()
})

When ("não possuo usuários cadastrados",() =>{
  listarUsuario.listarSemRegistro()
})

Then("verifico se os usuários foram listados na tela", () =>{
  listarUsuario.verificaListaUsuarios()
})

Then("verifico se existe a opção para cadastrar um usuário", () => {
  listarUsuario.verificarOpcaoCadastrar()
})