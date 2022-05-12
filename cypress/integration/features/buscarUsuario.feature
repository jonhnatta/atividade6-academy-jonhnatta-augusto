Feature: Buscar usuário
  Como uma pessoa qualquer
  Desejo remover um usuário
  Para que suas informações não estejam mais registradas

  Background: Listar todos os usuários
    Given acessei a tela de usuários
    And possuo usuários cadastrados

  Scenario: Buscar um usuário na lista por nome
    When busco por um usuário pelo nome
      | name | jonhnatta |
    Then verifico se o usuário buscado por nome foi listado na tela

  Scenario: Buscar um usuário na lista por email
    When busco por um usuário pelo email
      | email | jonhnatta@gmail.com |
    Then verifico se o usuário buscado por email foi listado na tela
