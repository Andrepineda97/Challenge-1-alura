document.getElementById('texto-in').focus;

const sonidos = [
  new Audio('../music/secret-tone.mp3'),
  new Audio('../music/SC2_Attack25.wav'),
  new Audio('../music/OOT_Navi_Hey1.wav'),
  new Audio('../music/SSBM_Ganondorf_Taunt.wav'),
  new Audio('../music/Song_of_time.ogg')
];

const sonidosReversos = [
  new Audio('../music/reverse-secret-tone.mp3'),
  new Audio('../music/reverse-SC2_Attack25.wav'),
  new Audio('../music/reverse-OOT_Navi_Hey1.wav'),
  new Audio('../music/reverse-SSBM_Ganondorf_Taunt.wav'),
  new Audio('../music/reverse-Song_of_time.ogg')
];

const letraA = 'ai';
const letraE = 'enter';
const letraI = 'imes';
const letraO = 'ober';
const letraU = 'ufat';

function encrypt() {
  const text = document.getElementById('texto-in').value;

  let secreto_text = text.toUpperCase();

  switch (secreto_text) {
    case 'ZELDA':
      sonidos[0].play();
      break;

    case 'LINK':
      sonidos[1].play();
      break;

    case 'NAVI':
      sonidos[2].play();
      break;

    case 'GANON':
      sonidos[3].play();
      break;

    case 'OCARINA':
      sonidos[4].play();
      break;

    default:
      let textBoxElement = document.getElementById('texto-in');
      let textEncrypted = text;

      textEncrypted = textEncrypted.replace(/e/gi, letraE);
      textEncrypted = textEncrypted.replace(/i/gi, letraI);
      textEncrypted = textEncrypted.replace(/a/gi, letraA);
      textEncrypted = textEncrypted.replace(/o/gi, letraO);
      textEncrypted = textEncrypted.replace(/u/gi, letraU);

      textBoxElement.value = '';
      document.getElementById('texto_out').value = textEncrypted;

      document.getElementById('imagen-mostrar').style.display = 'none';
      document.getElementById('box-text-mostrar').style.display = 'block';
      document.getElementById('button-show-copy').style.display = 'block';
      document.getElementById('text-miss').style.display = 'none';
      document.getElementById('cofre-cerrado').style.display = '';
      break;
  }
}

function decrypt() {
  const text = document.getElementById('texto-in').value;

  let secreto_text = text.toUpperCase();

  switch (secreto_text) {
    case 'ZELDA':
      sonidosReversos[0].play();
      break;

    case 'LINK':
      sonidosReversos[1].play();
      break;

    case 'NAVI':
      sonidosReversos[2].play();
      break;

    case 'GANON':
      sonidosReversos[3].play();
      break;

    case 'OCARINA':
      sonidosReversos[4].play();
      break;

    default:
      let textBoxElement = document.getElementById('texto-in');
      let textDecrypted = text;

      textDecrypted = textDecrypted.replace(/enter/gi, 'e');
      textDecrypted = textDecrypted.replace(/imes/gi, 'i');
      textDecrypted = textDecrypted.replace(/ai/gi, 'a');
      textDecrypted = textDecrypted.replace(/ober/gi, 'o');
      textDecrypted = textDecrypted.replace(/ufat/gi, 'u');

      textBoxElement.value = '';
      document.getElementById('texto_out').value = textDecrypted;

      document.getElementById('imagen-mostrar').style.display = 'none';
      document.getElementById('box-text-mostrar').style.display = 'block';
      document.getElementById('button-show-copy').style.display = 'block';
      document.getElementById('text-miss').style.display = 'none';
      document.getElementById('cofre-cerrado').style.display = 'none';
      document.getElementById('cofre-abierto').style.display = '';
      break;
  }
}

function actualizar() {
  location.reload(true);
}
setTimeout('actualizar()', 40000);

function copyText() {
  var content = document.getElementById('texto_out');
  content.select();
  document.execCommand('copy');

  alert('Se copio el mensaje');

  document.getElementById('cofre-cerrado').style.display = '';
  document.getElementById('imagen-mostrar').style.display = 'none';
  document.getElementById('box-text-mostrar').style.display = 'none';
  document.getElementById('button-show-copy').style.display = 'block';
  document.getElementById('text-miss').style.display = 'none';
}
