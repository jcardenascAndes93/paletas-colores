$(document).ready(function() {

    $body = $("body");

    $(document).on({
        ajaxStart: () => $body.addClass("loading"),
        ajaxStop: () => $body.removeClass("loading") 
    });

    function generarReporte(data) {
        var reporte = '<div class="row">';
        reporte += `<div class="col-1">${data.time}</div>`;
        reporte += `<div class="col-3"><img src="${data.base}" height="250" width="150"></div>`;
        reporte += `<div class="col-3"><img src="${data.modified}" height="250" width="150"></div>`;
        reporte += `<div class="col-3"><img src="${data.comparsion}" height="250" width="150"></div>`;
        reporte += `<div class="col-2">${JSON.stringify(data.resemble)}</div>`;
        reporte += '</div>';
        return reporte;
    }

    $( "#generador" ).click(function() {
        $.ajax({
            url: "http://localhost:3000/execute",
            crossDomain: true
        }).done(function(data) {
            $('#reportes').append(generarReporte(data));
        }).catch(function(error) {
            alert('Algo salió mal. Revisa la consola');
            console.log(error);
        });
    });
})