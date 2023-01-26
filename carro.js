let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 98, 150, 210, 270, 318]; 
let velocidade = [3, 6, 9, 10, 8, 6];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
  image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
  xCarros[i] -= velocidade[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1)
  if (concluiATela(xCarros[i])){
    xCarros[i] = 600;
  }
}

function concluiATela(xCarro){
  return xCarro < -50;
}