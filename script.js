
var textoIngresado = document.querySelector(".entrada-texto"); //trabajo con .entrada-texto que es una clase
var textoSalida = document.querySelector(".salida-texto");

var arraycodigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
textoIngresado.focus();


function SaltarLinea(){
	document.write("<br>");
	document.write("<br>");
	}

function llamadaencriptar(){
	var cadenaEncriptada = encriptar(textoIngresado.value);
	textoSalida.value = cadenaEncriptada;
	}



//Seccion de Encriptacion


function encriptar(textoACodificar){
	//var arraycodigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
			
	textoACodificar = textoACodificar.toLowerCase();
	for (var indice=0; indice<arraycodigos.length;indice++){
		if(textoACodificar.includes(arraycodigos[indice][0])){
			textoACodificar = textoACodificar.replaceAll(arraycodigos[indice][0],arraycodigos[indice][1]);

		}
	}

	return textoACodificar;
					
}


//Seccion de Desencriptacion

function llamadadesencriptar(){
	var cadenaDesencriptada = desencriptar(textoIngresado.value);
	textoSalida.value = cadenaDesencriptada;
	}


function desencriptar(textoADecodificar){
	//var arraycodigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
				
	for (var indice=0; indice<arraycodigos.length;indice++){
		if(textoADecodificar.includes(arraycodigos[indice][1])){
			textoADecodificar = textoADecodificar.replaceAll(arraycodigos[indice][1],arraycodigos[indice][0]);
	
		}
	}
	
		return textoADecodificar;
						
}


//Seccion de evento que desaparece la capa si hay contenido, si ambos textarea estan vacios entonces que se muestre la imagen
function ocultardiv(){
	var x = document.getElementById('cartel');
	var codificacionBox = document.getElementById('entrada-texto');
	var decodificacionBox = document.getElementById('salida-texto');

	if (codificacionBox.value != "" || decodificacionBox.value != "") {
		x.style.visibility = "hidden";
	}else{
		x.style.visibility = "visible";
	}
}


// Funcion que copia el contenido que esta en la caja de desencriptacion
function copiar() {
	var copyText = document.querySelector("#salida-texto"); //utilizo el querySelector con id
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
	navigator.clipboard.writeText(copyText.value);    /* Copy the text inside the text field */

	copyText.value="";
	textoIngresado.focus();
	//alert("Copied the text: " + copyText.value);
}
  
