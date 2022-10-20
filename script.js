function encriptar() {
    var texto = document.getElementById("textareaTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/e/gim, "enter");
    var txtCifrado = txtCifrado.replace(/o/gim, "ober").replace(/i/gim, "imes").replace(/a/gim, "ai").replace(/u/gim, "ufat");
    document.getElementById("texto2").style.display = "inline-flex";
    document.getElementById("texto2").style.backgroundImage="none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("descripcion").style.display= "none";
    document.getElementById("texto2").value = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("textareaTexto").value = "";
  }
  
  function desencriptar() {
    var texto = document.getElementById("textareaTexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/gim, "e");
    var txtCifrado = txtCifrado.replace(/ober/gim, "o");
    var txtCifrado = txtCifrado.replace(/imes/gim, "i");
    var txtCifrado = txtCifrado.replace(/ai/gim, "a");
    var txtCifrado = txtCifrado.replace(/ufat/gim, "u");
    document.getElementById("texto2").style.display = "inline-flex";
    document.getElementById("texto2").style.backgroundImage="none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("descripcion").style.display= "none";
    document.getElementById("texto2").value = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("textareaTexto").value = "";
  }
  
  function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió el mensaje!");

    document.getElementById("texto2").value = "";

    document.getElementById("texto2").style.display = "show";
    document.getElementById("texto2").style.backgroundImage = "url(imagenes/Personaje.png)";
    document.getElementById("texto2").style.display = "inherit";
    document.getElementById("texto").style.display = "show";
    document.getElementById("texto").style.display = "inherit";
    document.getElementById("descripcion").style.display= "show";
    document.getElementById("descripcion").style.display = "inherit";
    document.getElementById("copiar").style.display = "none";
  }