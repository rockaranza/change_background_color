const button = document.getElementById('btn');
const colorName = document.getElementById('colorName');
const main = document.getElementById('main');
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


function randomNumber(arreglo) {
  let numeroHex;
  const number = []
  for(let i=0; i < 6; i++) {
    let numAux = Math.floor(Math.random() * arreglo.length);
    number.push(arreglo[numAux]);
  }
  numeroHex = number.join('');
  console.log(numeroHex);
  return numeroHex;
};

button.addEventListener('click', function(){
  let newColor = '#'+randomNumber(hex);
  colorName.textContent = newColor;
  colorName.style.color = newColor;
  main.style.backgroundColor = newColor;
});