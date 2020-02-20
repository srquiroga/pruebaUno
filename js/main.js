$(document).ready(function () {
    
    // metedo load 
    //$("#data").load(url); carga todo el html de la url que le pasemos, usa el metodo get

    // metodos get y post

    var cajaRespuesta = $('#data');
    var cajaPost = $('#dataPost');
    var btnGet = $('#btnGet');
    var btnPost = $('btnSubmit');
    var formulario = $('form');
    var formularioAjax = $('#formAjax');

    btnGet.click(function (e) { 
        cajaRespuesta.append("<ul id ='lista'></ul>");
        var lista = $('#lista');

        
        $.get('https://reqres.in/api/users?page=2',
            function (respuesta) {
                
                respuesta.data.forEach((element, index )=> {
                    lista.append("<li>"+ element.first_name + " "+ element.last_name + "</li>")
                });


            }
            
        );
        
    });

  
    /*formulario.submit(function (e) { 
        e.preventDefault(); // evita que el redireccionamiento a la pagina que indica el action del formulario
        var datos = formulario.serialize()
        console.log(datos);

       
        
        $.post(formulario.attr("action")  , datos,
            function (respusta) {
                console.log(respusta);
            }
        );
    });*/

    formularioAjax.submit(function (e) { 
        e.preventDefault();

        var usuarioUno = {
            
            'name': $('input[name="name"]').val(),
            'job': $('input[name="job"]').val()
        }

        console.log(usuarioUno);
        //console.log(usuarioUno);

        $.ajax({
            type: "POST",
            url: formularioAjax.attr("action"),
            data: usuarioUno,
        
            success: function (response) {
                console.log(response);
            },
            beforeSend: function () {
                console.log("enviado");
            },
            error: function () {
                console.log("error");
            }
        });
        
    });
   
    




});