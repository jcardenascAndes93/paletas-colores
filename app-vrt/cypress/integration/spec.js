describe('Taller 7 - Captura de screenshots', function() {
    it('Generando paleta de colores', function() {
      cy.visit('https://cmartinezbjmu.github.io/miso-4208-vrt/palette.html')
      cy.wait(1000)
      cy.screenshot('screen-1', {timeout: 50000})
      cy.contains('Generar nueva paleta').click()
      cy.screenshot('screen-2', {timeout: 50000})
    })
})