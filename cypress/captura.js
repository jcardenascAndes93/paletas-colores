describe('Taller 6 - Captura de screenshots', function() {
    it('Generando paleta de colores', function() {
      cy.visit('https://cmartinezbjmu.github.io/miso-4208-vrt/palette.html')
      cy.contains('Generar nueva paleta').click()
      cy.screenshot();		  
    })
})
