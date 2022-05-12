Feature: Atualizar usuário
  Como uma pessoa qualquer
  Desejo atualizar as informações de determinado usuário
  Para ter o registro de suas informações atualizadas

  Background: Listar todos os usuários
    Given acessei a tela de usuários
    And possuo usuários cadastrados

  Scenario: Atualizar nome do usuário
    When busco por um usuário pelo nome
      | name | jonhnatta |
    And clico para ver detalhes do usuário pesquisado
    And clico no botão editar
    Then atualizo o nome do usuário
      | nome | jonhnatta alterado |
    And verifico a mensagem atualizado com sucesso

  Scenario: Atualizar email do usuário
    When busco por um usuário pelo nome
      | name | jonhnatta |
    And clico para ver detalhes do usuário pesquisado
    And clico no botão editar
    Then atualizo o email do usuário
      | name  | jonhnatta                    |
      | email | jonhnatta_alterado@gmail.com |
    And verifico a mensagem atualizado com sucesso

  Scenario: Atualizar usuário com email já existente
    When busco por um usuário pelo nome
      | name | jonhnatta |
    And clico para ver detalhes do usuário pesquisado
    And clico no botão editar
    Then atualizo o email do usuário para um existente
      | email | jonhnatta_existente@gmail.com |
    Then verifico se a mensagem de usuário já existente foi exibida

  Scenario: Atualizar nome do usuário maior que 100 caracteres
    When busco por um usuário pelo nome
      | name | jonhnatta |
    And clico para ver detalhes do usuário pesquisado
    And clico no botão editar
    Then atualizo o nome do usuário
      | nome | Jonhnattaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa |
    And verifico a mensagem Informe no máximo 100 caracteres para o nome

  Scenario: Atualizar email do usuário maior que 60 caracteres
    When busco por um usuário pelo nome
      | name | jonhnatta |
    And clico para ver detalhes do usuário pesquisado
    And clico no botão editar
    Then atualizo o email do usuário
      | name  | jonhnatta                                                     |
      | email | jonhnataaaaaaaaaaaaaaaaaaaaaaaaata@gmaillllllllllllllllll.com |
    And verifico a mensagem Informe no máximo 60 caracteres para o email


  Scenario: Atualizar email do usuário com email invalido
    When busco por um usuário pelo nome
      | name | jonhnatta |
    And clico para ver detalhes do usuário pesquisado
    And clico no botão editar
    Then atualizo o email do usuário
      | name  | jonhnatta           |
      | email | jonhnatta.gmail.com |
    And verifico a mensagem de alterar com email invalido
