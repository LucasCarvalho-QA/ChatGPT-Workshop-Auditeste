class CadastroPage {
    visit() {
      cy.visit('https://front.serverest.dev/cadastrarusuarios');
    }
  
    fillNome(nome) {
      cy.get('input[name="nome"]').type(nome);
    }
  
    fillEmail(email) {
      cy.get('input[name="email"]').type(email);
    }
  
    fillSenha(senha) {      
      cy.get('[data-testid="password"]').type(senha);
    }
  
    uncheckAdministrador() {
      cy.get('input[name="administrador"]').uncheck();
    }
  
    checkAdministrador() {
      cy.get('input[name="administrador"]').check();
    }
  
    clickCadastrar() {
      cy.contains('button', 'Cadastrar').click();
    }
  
    verifyCadastroSuccessMessage(message) {
      cy.contains(message);
    }
  
    verifyCamposObrigatoriosErrorMessage(message) {
      cy.contains(message);
    }

    generateUniqueEmail() {
      const domain = 'example.com';
      const email = `user_${Math.floor(Math.random() * 10000)}@${domain}`;    
      return email;
    }

    verifyErrorMessage(message) {
      cy.contains('div', message);
    }
  }
  
  export const cadastroPage = new CadastroPage();
  