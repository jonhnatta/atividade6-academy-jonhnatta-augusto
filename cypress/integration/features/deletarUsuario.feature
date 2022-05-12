Feature: Remover usuário
  Como uma pessoa qualquer
  Desejo remover um usuário
  Para que suas informações não estejam mais registradas

  Background: Listar todos os usuários
    Given acessei a tela de usuários
    And possuo usuários cadastrados

  Scenario: Deletar um Usuário
    When busco por um usuário pelo nome
      | name | jonhnatta |
    And clico para excluir o usuário pesquisado
    And verifico a mensagem de confirmação na tela
    Then confirmo a exclusão do usuário
