describe('Taller 7 - Captura de screenshots', function() {
    it('Generando paleta de colores', function() {
      cy.visit('https://jcardenascandes93.github.io/colors-palette/')
      cy.wait(1000)
      cy.screenshot('screen-1', {timeout: 50000})
      cy.contains('Generar nueva paleta').click()
      cy.screenshot('screen-2', {timeout: 50000})
    })
})
