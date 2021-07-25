/*validaciones de formulario*/

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateForm(){
    var names = document.getElementById("form-names");
    var email = document.getElementById("form-email");
    var message = document.getElementById("form-message");
    
    
    if(names.value!="" ){
        if(email.value!="" ){
            if(message.value!="" ){
                swal("Gracias!", "Se enviaron correctamente los datos", "success");
            }else{
                
                swal("Ups!", "El mensaje es un campo requerido", "error");
            }
        }else{
            
            swal("Ups!", "El email es un campo requerido", "error");
        }
    }else{
        
        swal("Ups!", "Los nombres son un campo requerido", "error");
    }
    
}