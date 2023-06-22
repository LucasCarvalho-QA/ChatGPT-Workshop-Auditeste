import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import {cadastroPage} from '@pages/CadastroPage'

Given('que estou na página de cadastro de usuários', () => {
  cadastroPage.visit();
});

When('preencho o campo Nome com {string}', (nome) => {
  cadastroPage.fillNome(nome);
});

When('preencho o campo Email com {string}', (email) => {
  const emailDinamico = cadastroPage.generateUniqueEmail();
  cadastroPage.fillEmail(emailDinamico);
});

When('preencho o campo Senha com {string}', (senha) => {
  cadastroPage.fillSenha(senha);
});

When('desmarco a opção Administrador', () => {
  cadastroPage.uncheckAdministrador();
});

When('marco a opção Administrador', () => {
  cadastroPage.checkAdministrador();
});

When('clico no botão Cadastrar', () => {
  cadastroPage.clickCadastrar();
});

When('clico no botão Cadastrar sem preencher os campos obrigatórios', () => {
  cadastroPage.clickCadastrar();
});

Then('vejo uma mensagem de sucesso informando que o usuário foi cadastrado sem privilégios de administrador', () => {
  cadastroPage.verifyCadastroSuccessMessage('Cadastro realizado com sucesso');
});

Then('vejo uma mensagem de sucesso informando que o usuário foi cadastrado com privilégios de administrador', () => {
  cadastroPage.verifyCadastroSuccessMessage('Cadastro realizado com sucesso');
});

Then('vejo as seguintes mensagens de erro:', (dataTable) => {
  const expectedMessages = dataTable.rawTable.slice(1).flat();
  expectedMessages.forEach((message) => {
    cadastroPage.verifyErrorMessage(message);
  });
});
