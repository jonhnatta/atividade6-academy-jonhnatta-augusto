import { deletarUsuario } from "../pages/DeletarUsuario.po"

When ("clico para excluir o usuário pesquisado", () => {
  deletarUsuario.clicarDeletarUsuario()
})

When ("verifico a mensagem de confirmação na tela", () => {
  deletarUsuario.verificarMensagemAtencao()
  deletarUsuario.verificaBotaoConfirmar()
  deletarUsuario.verificaBotaoCancelar()
})

Then ("confirmo a exclusão do usuário",() => {
  deletarUsuario.confirmarExclusao()
})

