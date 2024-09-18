class SignupPage {
    visit() {
      cy.visit('/customer/account/create/');
    }
  
    fillOutForm(email, password, firstName, lastName) {
      cy.get('#firstname').type(firstName);
      cy.get('#lastname').type(lastName);
      cy.get('#email_address').type(email);
      cy.get('#password').type(password);
      cy.get('#password-confirmation').type(password);
    }
  
    submitForm() {
      cy.get('[title="Create an Account"]').click();
    }
  
    checkSuccessMessage() {
      cy.get('.message-success').should('contain', 'Thank you for registering with Main Website Store.');
    }

    logout(){
        cy.contains('Sign Out').click({force:true});
    }

    loginUrl(){
        cy.contains(' Sign In ').click();

    }

    login(email, password) {
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
      cy.get('#send2').click();
      cy.wait(5000)
      // Add a check to verify successful login, if needed
      cy.get('.base').should('contain', 'My Account');
    }
  }
  
  export default SignupPage;
  