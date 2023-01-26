let xAtor = 230;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(PodeSeMover())
    yAtor += 3;
  }
  if (keyIsDown(LEFT_ARROW)){
   if(PodeSeMoverEsquerda())
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    if(PodeSeMoverDireita())
    xAtor += 3;
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaParaInicio();
      somDaColisao.play();
      if(PontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaParaInicio(){
  yAtor = 366;
}

function incluiPontos(){
  fill(color(255, 240, 60))
  textAlign(CENTER);
  textSize(32);
  text(meusPontos, width / 5, 29)
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
  somDoPonto.play();
    voltaParaInicio();
  }
}

function PontosMaiorQueZero(){
  return meusPontos > 0;
}

function PodeSeMover(){
  return yAtor < 366;
}

function PodeSeMoverEsquerda(){
  return xAtor > -4;
}

function PodeSeMoverDireita(){
  return xAtor < 473;
}