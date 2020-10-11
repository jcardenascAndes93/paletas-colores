//var resemble = require('../resemble.js');
(function () {
  $("#run1").click(function(){compareImages("Login_antes.png", "Login_despues.png",1);});
  $("#run2").click(function(){compareImages("Crear_Desafio_antes.png", "Crear_Desafio_despues.png",2);});
  $("#run3").click(function(){compareImages("Crear_Habito_antes.png","Crear_Habito_despues.png",3);});

})();

function compareImages(image1, image2, result) {
  var response;
  resemble(image1).compareTo(image2).ignoreLess().onComplete(function (data) {
    console.log(data);
	response = 'RESULTADO: \n' + JSON.stringify(data);
	$('#result'+result).html(response);
  });

}