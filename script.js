// Verifique a distância da primeira imagem
// em relação ao topo da página

const imagem = document.querySelector("img");

const distancia = imagem.offsetTop;
console.log(distancia);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((item) => {
    soma += item.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");

let altura = 0;
let largura = 0;

links.forEach((link) => {
  altura = link.offsetWidth;
  largura = link.offsetHeight;

  console.log(altura, largura);

  if (altura >= 48 && largura >= 48) {
    console.log(link, "Acessível");
  } else {
    console.log(link, "Inacessível");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menor = window.matchMedia("(max-width: 720px)");
const menuMobile = document.querySelector(".menu");

if (menor.matches) {
  menuMobile.classList.add("menu-mobile");
  console.log("Classe adicionada");
}
