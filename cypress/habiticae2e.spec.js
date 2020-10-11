context('Login Tests', () => {
   
    it('Login', () => {
        cy.visit('https://habitica.com/static/home')
        cy.wait(2000)
            // Login
        cy.get('.login-button').click();
		cy.screenshot("Login_antes");
        cy.get('#usernameInput').type('e.mantilla@uniandes.edu.co');
        cy.get('#passwordInput').type('Habitica@uniandes.edu.co');
        cy.get('.btn-info[type="submit"]').click()
		cy.screenshot("Login_despues");

    });

    it('Create public challenge', () => {

        cy.visit('https://habitica.com/static/home');
        cy.wait(2000)
            // Login        
        cy.get('.login-button').click();
        cy.wait(2000)
        cy.get('#usernameInput').type('e.mantilla@uniandes.edu.co');
        cy.get('#passwordInput').type('Habitica@uniandes.edu.co');
        cy.get('.btn-info[type="submit"]').click()

        // Access to challenge    
        cy.wait(1000)
        cy.get('a[href*="/challenges/myChallenges"]').first().click();
        cy.wait(1000)
        cy.get('.create-challenge-button').click();
        cy.wait(1000)

        cy.screenshot("Crear_Desafio_antes");
		// Complete form
        cy.get('input[placeholder="¿Cómo se llama tu desafío?"]').type('Mi primer desafìo');
        cy.get('input[placeholder="¿Qué nombre corto podemos usar para identificar tu Desafío?"]').type('First');
        cy.get('textarea[class="summary-textarea form-control"]').type('Mi primer desafío en Habitica generado de forma auotamitazada');
        cy.get('textarea[class="description-textarea form-control"]').type('Esta es la descripción del challenge.');
        cy.get('select').select('00000000-0000-4000-A000-000000000000');
        cy.contains('Ninguno').click({ force: true })
        cy.wait(500);
        cy.get('input[id="challenge-modal-cat-creativity"]').check({ force: true });
        cy.get('.alert-warning').should('be.visible');
		cy.screenshot("Crear_Desafio_despues");

    });

    it('Create habit', () => {
        cy.visit('https://habitica.com/static/home');
        cy.wait(2000)
            // Login        
        cy.get('.login-button').click();
        cy.wait(2000)
        cy.get('#usernameInput').type('e.mantilla@uniandes.edu.co');
        cy.get('#passwordInput').type('Habitica@uniandes.edu.co');
        cy.get('.btn-info[type="submit"]').click()

        // Access to plus button
        cy.wait(2000)
		cy.screenshot("Crear_Habito_antes");
        cy.get('.diamond-btn').click({ force: true });
        cy.wait(300)
        cy.get('div[class="create-task-btn diamond-btn"]').first().click({ force: true });
        cy.wait(500)

        // Complete form
        cy.get('input[placeholder="Añadir un título"]').type('Mi hábito No. 1');
        cy.get('textarea[placeholder="Añadir notas"]').type('Algunas notas');
        cy.get('div[class="items-none"]').click({ force: true });
        cy.contains('Exercise').click({ force: true });
        cy.get('.btn-footer').click();
		cy.screenshot("Crear_Habito_despues");
    });

   
});