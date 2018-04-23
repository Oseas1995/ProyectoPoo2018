function validar(){
	validarCampoVacio("txt-nombre");
	validarCampoVacio("txt-apellido");
	validarCampoVacio("txt-correo");
	validarCampoVacio("txt-contrasena");
}

function validarCampoVacio(id){
	if ($("#"+id).val() == "") {
		$("#"+id).removeClass("is-valid");
		$("#"+id).addClass("is-invalid");
	}else{
		$("#"+id).removeClass("is-invalid");
		$("#"+id).addClass("is-valid");
	}
}



function validarCorreo(correo){
	var patron = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	return patron.test(correo);
	/*if ((patron.test(String(correo.value).toLowerCase()))){
		correo.classList.remove("is-invalid");
    	correo.classList.add("is-valid");
	}else{
		correo.classList.remove("is-valid");
    	correo.classList.add("is-invalid");
	}*/
}	

$("#btn-registrar").click(function(){
	validar();
});