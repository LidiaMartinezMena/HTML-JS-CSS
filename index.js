function compruebanombre(){
	var name = document.getElementById("nombre");
	if (!/^[a-zA-Z ]+$/.test(name.value)){
		name.classList.remove("textoverde");
		name.classList.add("textorojo");
		document.getElementById("no1").style = "display:block";
		document.getElementById("nombre").value='';
	} 
	else {
		document.getElementById("no1").style = "display:none";
		name.classList.remove("textorojo");
		name.classList.add("textoverde");
	}	
}

function compruebaemail(){
	var mail = document.getElementById("email");
	if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(mail.value)){
		mail.classList.remove("textoverde");
		mail.classList.add("textorojo");
		document.getElementById("no2").style = "display:block";
	} 
	else {
		document.getElementById("no2").style = "display:none";
		mail.classList.remove("textorojo");
		mail.classList.add("textoverde");
	}
}
function compruebaclave(){
	var clave = document.getElementById("clave1");
	if(clave.value.length<8){
		clave.classList.remove("textoverde");
		clave.classList.add("textorojo");
		document.getElementById("no3").style = "display:block";
		document.getElementById("clave1").value='';
	} 
	else {
		if(clave2.value !==""){
			if(clave.value != clave2.value){
				document.getElementById("no4").style = "display:block";
				clave.classList.remove("textoverde");
				clave.classList.add("textorojo");	
			}
			else{
				clave.classList.remove("textorojo");
				clave.classList.add("textoverde");
				document.getElementById("no3").style = "display:none";
				document.getElementById("no4").style = "display:none";
			}
		}else{
			clave.classList.remove("textorojo");
			clave.classList.add("textoverde");
			document.getElementById("no3").style = "display:none";
			document.getElementById("no4").style = "display:none";
		}
	}
}
function compruebaclave2(){
	var clave = document.getElementById("clave1");
	var clave2 = document.getElementById("clave2");
	if(clave2.value.length<8){
		clave2.classList.remove("textoverde");
		clave2.classList.add("textorojo");
		document.getElementById("no5").style = "display:block";
		document.getElementById("clave2").value='';
	} 
	else {
		if(clave.value !==""){
			if(clave.value != clave2.value){
				document.getElementById("no6").style = "display:block";
				clave2.classList.remove("textoverde");
				clave2.classList.add("textorojo");	
			}
			else{
				clave2.classList.remove("textorojo");
				clave2.classList.add("textoverde");
				document.getElementById("no5").style = "display:none";
				document.getElementById("no6").style = "display:none";
			}
		}else{
			clave2.classList.remove("textorojo");
			clave2.classList.add("textoverde");
			document.getElementById("no5").style = "display:none";
			document.getElementById("no6").style = "display:none";
		}
	}
}
function comprobar(){
	compruebanombre();
	compruebaemail();
	compruebaclave();
	compruebaclave2();
	var name = document.getElementById("nombre");
	var mail = document.getElementById("email");
	var clave = document.getElementById("clave1");
	var clave2 = document.getElementById("clave2");
	if (name.className=="textoverde" && mail.className=="textoverde" && clave.className== "textoverde" && clave2.className=="textoverde"){
		window.alert("La inscripción ha sido correcta");
	} 
	else {
		window.alert("Por favor, introduzca bien todos los campos");
	}
}