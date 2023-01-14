// Cambiar contenido de Etiqueta h1
    // Con JavaScript Puro
    // console.log("Pagina Funcionando")
    //console.log("pagina funcionando")
    //document.getElementById('titulo').innerHTML = "TITULO DE PAGINA";



    // Incorporar Libreria JQuery

$(document).ready(function(){
    console.log("Pagina Funcionando")
    
       // SELECCIONAR ELEMENTOS HTML
    $("h1").html("texto modificado por su etiqueta");
    $("#titulo").html("texto modificado por su id");
    //$(".display5").html("texto modificado por su clase5");
    
 
    
    
    // AGREGAR CLASE  [ jq.classAdd ]

    $("h1").addClass("text-center text-uppercase");
    $("#p2").addClass("text-danger");
    
    // QUITAR CLASE  [ jq.classRemove ]
    $("#parrafos").removeClass("display-5");


    // AGREGAR ELEMENTO [ jq.Append ]

    $("#parrafos").append("<p>cuarto parrafo agregado desde jquery</p>");
    
    // QUITAR ELEMENTO [ jq.Remove ]

  //$("#p3").remove();
   
    // MODIFICAR PROPIEDADES CSS [ jqCssSet ]
    $("#p1").css("color","blue" );
    $("#p3").css({color:'blue',background:'green',padding:'20px'});
    
    // METODO attr()      [ jqAttrSet]
    $('img').attr('scr', 'https://dinamicasgrupales.com.ar/wp-content/uploads/2020/06/imagen2.webp');
    
    // EVENTOS CON JQUERY
    //Evento click Agregando clase
    
    //Evento click Agregando estilo en css
    
    //Alternativa al evento click

})












