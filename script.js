//a - ai 
//e - enter 
//i - imes 
//o - ober 
//u - ufat 

//amarillo --> aimairillo
//aimairillo --> aimesmaimesrimesllo
//aimesmaimesrimesllo --> aimesmaimesrimesllober

//aimesmaimesrimesllober -! aimairemesllober 

//e --> enter 
//o --> ober 
//i --> imes 
//a --> ai 
//u --> ufat 

function encriptar() {
    var texto = document.getElementById("inputtexto".toLowerCase().value);
    //i es para que afecte a tanto mayus como minus
    //g afecta a toda la linea
    //m afecta a multiples lineas
    var txtcifrado = texto.replace(/e/igm,"enter");
    var txtcifrado = txtcifrado.replace(/o/igm,"ober");
    var txtcifrado = txtcifrado.replace(/i/igm,"imes");
    var txtcifrado = txtcifrado.replace(/a/igm,"ai");
    var txtcifrado = txtcifrado.replace(/u/igm,"ufat");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }
  
  function desencriptar() {
    var texto = document.getElementById("inputtexto".toLowerCase().value);
    var txtcifrado = texto.replace(/enter/igm,"e");
    var txtcifrado = txtcifrado.replace(/ober/igm,"o");
    var txtcifrado = txtcifrado.replace(/imes/igm,"i");
    var txtcifrado = txtcifrado.replace(/ai/igm,"a");
    var txtcifrado = txtcifrado.replace(/ufat/igm,"u");
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("copiar").style.display = "show";
    document.getElementById("texto2").innerHTML = txtcifrado;
    document.getElementById("inputtexto").innerHTML = " ";
    document.getElementById("copiar").style.display = "inherit";
  }

function copiar(){
    var contenido= document.querySelector("#texto2");
    contenido.select();
    document.execCommand("cut")
    alert("!SE COPIO!");
}