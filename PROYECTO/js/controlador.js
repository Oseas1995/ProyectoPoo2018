function validar(){
	var resultado = true;
	validarCamposVacios("txt-correo");
	validarCamposVacios("txt-contrasena");
}

function validarCamposVacios(id){
	if ($("#"+id).val() == "") {
		$("#"+id).removeClass("is-valid");
		$("#"+id).addClass('is-invalid');
		return false;
	}else{
		$("#"+id).removeClass('is-invalid');
		$("#"+id).addClass('is-valid');
		return true;
	}
}

$("#btn-login").click(function(){
	validar();
});
