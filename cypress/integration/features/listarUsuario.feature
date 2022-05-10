Feature: Listar Usuário
  Como uma pessoa qualquer
  Desejo consultar todos os usuários cadastrados
  Para ter as informações de todos os usuários

  Scenario: Listar todos os usuários cadastrados
    Given acessei a tela de usuários
    When possuo usuários cadastrados
    Then verifico se os usuários foram listados na tela

  Scenario: Quando não existe usuários cadastrados
    Given acessei a tela de usuários
    When não possuo usuários cadastrados
    Then verifico se existe a opção para cadastrar um usuário