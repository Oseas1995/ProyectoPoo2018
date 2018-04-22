function validar(){
	
	if (((validarCorreo($("#txt-correo").val())) == false) || $("#txt-contrasena").val() == "") {
		$("#txt-correo").removeClass("is-valid");
		$("#txt-correo").addClass('is-invalid');
		$("#div-validar").show();
		
	}else{
		$("#txt-correo").removeClass("is-invalid");
		$("#txt-correo").addClass('is-valid');
		$("#div-validar").hide();
	}

	if (((validarCorreo($("#txt-correo").val())) == false) || $("#txt-contrasena").val() == ""){
		$("#txt-contrasena").removeClass("is-valid");
		$("#txt-contrasena").addClass('is-invalid');
		$("#div-validar").show();
	}
	else{
		$("#txt-contrasena").removeClass('is-invalid');
		$("#txt-contrasena").addClass('is-valid');
		$("#div-validar").hide();		
	}
	
	/*
	if (((validarCorreo($("#txt-correo").val())) == false) ||  validarContrasena($("#txt-contrasena").val())){
		$("#txt-contrasena").removeClass("is-valid");
		$("#txt-contrasena").addClass('is-invalid');
		$("#div-validar").show();
	}
	else{
		$("#txt-contrasena").removeClass('is-invalid');
		$("#txt-contrasena").addClass('is-valid');
		$("#div-validar").hide();		
	}*/

}

function validarCorreo(correo){
	var patron = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	return patron.test(correo);
}
/*
function validarContrasena(cont){
	if (cont.value.length<7) {
		//cont.classList.remove("is-valid");
		//cont.classList.add("is-invalid");
		$("#div-validar").show();
	}
	else{
		//cont.classList.remove("is-invalid");
		//cont.classList.add("is-valid");
		$("#div-validar").hide();
	}
}
*/
$("#btn-login").click(function(){
	validar();
});
