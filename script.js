$(document).ready(function() {
    var generarColores = function(){
        var colors = paletteGenerator.generate(
            5, // Colors
            function(color){ 
            // This function filters valid colors
            var hcl = color.hcl();
            return (hcl[0]>=72 || hcl[0]<=72)
            && hcl[1]>=0 && hcl[1]<=100
            && hcl[2]>=0 && hcl[2]<=100;
            },
            false, // Using Force Vector instead of k-Means
            50, // Steps (quality)
            false, // Ultra precision
            'Default' // Color distance type (colorblindness)
            );
            return colors;
    }
        

    var generarPaleta = function(){
    // Sort colors by differenciation first
    const palette = paletteGenerator.diffSort(generarColores(), 'Default');
    const color1 = palette[0].hex();
    const color2 = palette[1].hex();
    const color3 = palette[2].hex();
    const color4 = palette[3].hex();
    const color5 = palette[4].hex();

    $("#color1").css('background-color', color1);
    $("#color2").css('background-color', color2);
    $("#color3").css('background-color', color3);
    $("#color4").css('background-color', color4);
    $("#color5").css('background-color', color5);

    $('#css-rules').val('.website-background{ color: '+color1+';}\n\n.element-text{ color: '+color2+';}\n\n.element-border{ border-color: '+color3+';}\n\n.element-background{ background-color: '+color4+';}\n\n.header{ color: '+color5+';}');

    }

    $('#generarPaleta').on('click', function(){
        generarPaleta();
    });

    $('#borrarPaleta').on('click', function(){
        $('.color-view').css('background-color', '#ffffff')
        $('#css-rules').val('.website-background{ color: #FFFFFF;}\n\n.element-text{ color: #FFFFFF;}\n\n.element-border{ border-color: #FFFFFF;}\n\n.element-background{ background-color: #FFFFFF;}\n\n.header{ color: #FFFFFF;}'); 
    })


    generarPaleta();
});
