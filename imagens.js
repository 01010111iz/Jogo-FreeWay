let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload(){
  imagemDaEstrada = loadImage("image/estrada.png");
  imagemDoAtor = loadImage("image/ator-1.png");
  imagemCarro = loadImage("image/carro-1.png");
  imagemCarro2 = loadImage("image/carro-2.png");
  imagemCarro3 = loadImage("image/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro, imagemCarro3];


 somDaTrilha = loadSound("sounds/trilha.mp3");
 somDoPonto = loadSound("sounds/pontos.wav");
 somDaColisao = loadSound("sounds/colidiu.mp3");
}