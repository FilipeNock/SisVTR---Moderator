function abrirURL(){
		if (document.getElementById('boxCodigo').value == "Número de Rastreio" || document.getElementById('boxCodigo').length == 0) {
			alert("Por favor insira um código de rastreio valido");
		} else {
			document.getElementById('frameRastreie').src = "http://www.rastreie.com/"+document.getElementById('boxCodigo').value;
			var img = document.getElementById('ImagemLoading'); 
			img.style.visibility = 'visible';
		}
	}
	
	function checarTextoAoSairFoco() {
		if (document.getElementById('boxCodigo').value.length == 0) {
			document.getElementById('boxCodigo').value = "Número de Rastreio";
		}
	}
	function checarTextoAoFocar() {
		if (document.getElementById('boxCodigo').value == "Número de Rastreio") {
			document.getElementById('boxCodigo').value = "";
		}
	}
	
	window.onload=function(){
		var ifr=document.getElementById('frameRastreie');
		ifr.onload=function(){
			document.getElementById('container').style.height = "1100px";
			document.getElementById('LabelQuadrado').style.height = "900px";
			this.style.display='block';
			var img = document.getElementById('ImagemLoading'); 
			img.style.visibility = 'hidden';
		};
};
