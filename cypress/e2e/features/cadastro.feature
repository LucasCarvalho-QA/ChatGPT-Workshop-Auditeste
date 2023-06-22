# language: pt

Funcionalidade: Cadastro de Usuários

  Cenário: Cadastro de usuário sem privilégios de administrador
    Dado que estou na página de cadastro de usuários
    Quando preencho o campo Nome com "John Doe"
    E preencho o campo Email com "john.doe@example.com"
    E preencho o campo Senha com "password123"
    E desmarco a opção Administrador
    E clico no botão Cadastrar
    Então vejo uma mensagem de sucesso informando que o usuário foi cadastrado sem privilégios de administrador

  Cenário: Cadastro de usuário com privilégios de administrador
    Dado que estou na página de cadastro de usuários
    Quando preencho o campo Nome com "Jane Smith"
    E preencho o campo Email com "jane.smith@example.com"
    E preencho o campo Senha com "password456"
    E marco a opção Administrador
    E clico no botão Cadastrar
    Então vejo uma mensagem de sucesso informando que o usuário foi cadastrado com privilégios de administrador

Cenário: Tentativa de cadastro sem preencher campos obrigatórios
    Dado que estou na página de cadastro de usuários
    Quando clico no botão Cadastrar sem preencher os campos obrigatórios
    Então vejo as seguintes mensagens de erro:
      | Mensagem                   |
      | Nome é obrigatório         |
      | Password é obrigatório        |
      | Email é obrigatório        |