Feature: Criar Usuário
  Como uma pessoa qualquer
  Desejo registrar informações de usuário
  Para poder manipular estas informações livremente

  Background:  Acessar a listar usuários
    Given acessei a tela de listar usuários
    And acessei a tela de criar usuário

  Scenario: Cadastro de usuário com sucesso
    When informo os dados para cadastro
      | nome  | Jonhnatta           |
      | email | jonhnatta@gmail.com |
    Then verifico se o usuário foi salvo com sucesso

  Scenario: Cadastro usuário com email já existente
    When informo os dados para cadastro com email existente
      | nome  | Jonhnatta           |
      | email | jonhnatta@gmail.com |
    Then verifico se a mensagem de usuário já existente foi exibida

  Scenario: Cadastrar usuário com nome maior que 100 caracteres
    When informo os dados para cadastro com nome maior que 100 caracteres
      | nome  | Jonhnattaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa |
      | email | jonhnatta@gmail.com                                                                                   |
    Then verifico a mensagem Informe no máximo 100 caracteres para o nome

  Scenario: Cadastrar usuário com email maior que 60 caracteres
    When informo os dados para cadastro com email maior que 60 caracteres
      | nome  | Jonhnatta                                                     |
      | email | jonhnataaaaaaaaaaaaaaaaaaaaaaaaata@gmaillllllllllllllllll.com |
    Then verifico se a mensagem Informe no máximo 60 caracteres para o e-mail

  Scenario: cadastro usuário email errado
    When informo os dados para cadastro
      | nome  | Jonhnatta          |
      | email | jonhnattagmail.com |
    Then verifico a mensagem de Formato de e-mail inválido



