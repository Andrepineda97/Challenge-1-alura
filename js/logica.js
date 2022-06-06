document.getElementById("texto-in").focus;

const letraA = "ai";
const letraE = "enter";
const letraI = "imes";
const letraO = "ober";
const letraU = "ufat";

function encrypt() {


    const text = document.getElementById("texto-in").value;
    let textBoxElement = document.getElementById("texto-in");
    let textEncrypted = text;

    textEncrypted = textEncrypted.replace(/e/gi, letraE);
    textEncrypted = textEncrypted.replace(/i/gi, letraI);
    textEncrypted = textEncrypted.replace(/a/gi, letraA);
    textEncrypted = textEncrypted.replace(/o/gi, letraO);
    textEncrypted = textEncrypted.replace(/u/gi, letraU);

    textBoxElement.value = "";
    document.getElementById("texto_out").value = textEncrypted;

    document.getElementById('imagen-mostrar').style.display = 'none';
    document.getElementById('box-text-mostrar').style.display = "block";
    document.getElementById('button-show-copy').style.display = "block";
    document.getElementById('text-miss').style.display = "none";
    document.getElementById('cofre-cerrado').style.display = "";
}


function decrypt() {

    const text = document.getElementById("texto-in").value;
    let textBoxElement = document.getElementById("texto-in");
    let textDecrypted = text;

    textDecrypted = textDecrypted.replace(/enter/gi, "e");
    textDecrypted = textDecrypted.replace(/imes/gi, "i");
    textDecrypted = textDecrypted.replace(/ai/gi, "a");
    textDecrypted = textDecrypted.replace(/ober/gi, "o");
    textDecrypted = textDecrypted.replace(/ufat/gi, "u");

    textBoxElement.value = "";
    document.getElementById("texto_out").value = textDecrypted;

    document.getElementById('imagen-mostrar').style.display = 'none';
    document.getElementById('box-text-mostrar').style.display = "block";
    document.getElementById('button-show-copy').style.display = "block";
    document.getElementById('text-miss').style.display = "none";
    document.getElementById('cofre-cerrado').style.display = "none";
    document.getElementById('cofre-abierto').style.display = "";

}

function actualizar(){location.reload(true);}
  setTimeout("actualizar()",40000);


function copyText() {

    var content = document.getElementById('texto_out');
    content.select();
    document.execCommand('copy');

    alert("Se copio el mensaje");

    document.getElementById('cofre-cerrado').style.display = "";
    document.getElementById('imagen-mostrar').style.display = 'none';
    document.getElementById('box-text-mostrar').style.display = "none";
    document.getElementById('button-show-copy').style.display = "block";
    document.getElementById('text-miss').style.display = "none";
   

}


