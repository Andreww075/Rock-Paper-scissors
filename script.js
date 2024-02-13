const _comp_p = document.querySelector('.comp-p');
const _pers_p = document.querySelector('.pers-p');
const contenedor1 = document.querySelector('.persona');
const contenedor2 = document.querySelector('.computadora');

function generarAleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

let contadorComputadora = 0;
let contadorPersona = 0;

_comp_p.textContent = 'computadora: ' + contadorComputadora;
_pers_p.textContent = 'persona: ' + contadorPersona;

let ultimo = '';

function alea() {
  let gene = generarAleatorio(0, 3)
  if(gene == 0) {
    ultimo = 'piedra'
    return '✊'
  }
  if(gene == 1) {
    ultimo = 'papel'
    return '✋'
  }
  if(gene == 2) {
    ultimo = 'tijera'
    return '✌'
  }
}

function tems (texto) {

  alea();

  contenedor1;
  template = document.querySelector('#p').content;
  fragment1 = document.createDocumentFragment();
  pcontent1 = [];
            
  pcontent1.push({
            p: texto
  });
            
  pcontent1.forEach(el => {
    template.querySelector('p').textContent = el.p;
                
    let clone1 = document.importNode(template, true)
    fragment1.appendChild(clone1)
  })

  contenedor1.appendChild(fragment1)

    
  contenedor2;
  fragment2 = document.createDocumentFragment();
  pcontent2 = [];

  pcontent2.push({
            p: alea()
  });
                       
  pcontent2.forEach(el => {
    template.querySelector('p').textContent = el.p;
                
    let clone2 = document.importNode(template, true);
    fragment2.appendChild(clone2);
  });
  contenedor2.appendChild(fragment2);
}



document.querySelector('.piedra').addEventListener('click', () => {

  contenedor1.innerHTML = '';
  contenedor2.innerHTML = '';

  tems('✊');
  if (ultimo == 'tijeras') {
     contadorPersona++
  } else if (ultimo == 'papel') {
    contadorComputadora++;
  }

  _pers_p.textContent = 'Persona: ' + contadorPersona;
  _comp_p.textContent = 'Computadora: ' + contadorComputadora;

  if (contadorComputadora < contadorPersona) {
    _comp_p.style.color = '#dd7070'
    _pers_p.style.color = 'lightgreen'
  } else if (contadorComputadora > contadorPersona) {
    _comp_p.style.color = 'lightgreen'
    _pers_p.style.color = '#dd7070'
  } else {
    _comp_p.style.color = '#000'
    _pers_p.style.color = '#000'
  }
});

document.querySelector('.papel').addEventListener('click', () => {

  contenedor1.innerHTML = '';
  contenedor2.innerHTML = '';

  tems('✋');
  if (ultimo == 'piedra') {
     contadorPersona++
  } else if (ultimo == 'tijera') {
    contadorComputadora++;
  }

  _pers_p.textContent = 'Persona: ' + contadorPersona;
  _comp_p.textContent = 'Computadora: ' + contadorComputadora;

  if (contadorComputadora < contadorPersona) {
    _comp_p.style.color = '#dd7070'
    _pers_p.style.color = 'lightgreen'
  } else if (contadorComputadora > contadorPersona) {
    _comp_p.style.color = 'lightgreen'
    _pers_p.style.color = '#dd7070'
  } else {
    _comp_p.style.color = '#000'
    _pers_p.style.color = '#000'
  }
});

document.querySelector('.tijera').addEventListener('click', () => {

  contenedor1.innerHTML = '';
  contenedor2.innerHTML = '';

  tems('✌');
  if (ultimo == 'papel') {
     contadorPersona++
  } else if (ultimo == 'piedra') {
    contadorComputadora++;
  }

  _pers_p.textContent = 'Persona: ' + contadorPersona;
  _comp_p.textContent = 'Computadora: ' + contadorComputadora;

  if (contadorComputadora < contadorPersona) {
    _comp_p.style.color = '#dd7070'
    _pers_p.style.color = 'lightgreen'
  } else if (contadorComputadora > contadorPersona) {
    _comp_p.style.color = 'lightgreen'
    _pers_p.style.color = '#dd7070'
  } else {
    _comp_p.style.color = '#000'
    _pers_p.style.color = '#000'
  }
});






















/* 
function numer(minimo, maximo) {
  let number = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return number;
}

let piedra = 0;
let papel = 1;
let tijera = 2;

let options = ['piedra', 'papel', 'tijera'];

let opcionUser = prompt('¿Qué eliges?\n Piedra: 0\n Papel: 1\n Tijera: 2\n', 2);
let opcionMachine = numer(0, 2);

alert('Elegiste ' + options[opcionUser]);
alert('JavaScript eligió: ' + options[opcionMachine]);

if (opcionUser == piedra) {

  if (opcionMachine == piedra) {
    alert('¡Empate!');
  }
  else if (opcionMachine == papel) {
    alert('Perdiste :( ');
  }
  else {
    alert('¡Ganaste!');
  }
}
else if (opcionUser == papel) {

  if (opcionMachine == piedra) {
    alert('¡Ganaste!');
  }
  else if (opcionMachine == papel) {
    alert('¡Empate!');
  }
  else {
    alert('Perdiste :( ');
  }
}
else if (opcionUser == tijera) {

  if (opcionMachine == piedra) {
    alert('Perdiste :( ');
  }
  else if (opcionMachine == papel) {
    alert('¡Ganaste!');
  }
  else {
    alert('¡Empate!');
  }
}
else {
  alert('WHAT THE FUCK!?');
}
*/