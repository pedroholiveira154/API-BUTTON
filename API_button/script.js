//Criar JSON
var json = `{
    "id": 1,
    "nome": "The Knight",
    "sobrenome": "Our Savior",
    "cidade": "São Paulo",
    "pais": "Brasil",
    "imagem": "<img src='img/hollow.jpg' width='600px'>",
    "link": "https://hollowknight.fandom.com/wiki/Knight",

    "id2": 2,
    "nome2": "Hornet",
    "sobrenome2": "The Princess",
    "cidade2": "São Paulo",
    "pais2": "Brasil",
    "imagem2": "<img src='img/silksong.jpg' width='900px'>",
    "link2": "https://hollowknight.fandom.com/wiki/Hornet",

    "id3": 3,
    "nome3": "Hollow Knight",
    "sobrenome3": "The Vessel",
    "cidade3": "São Paulo",
    "pais3": "Brasil",
    "imagem3": "<img src='img/B_Hollow_Knight.jpg'>",
    "link3": "https://hollowknight.fandom.com/wiki/Hollow_Knight",

    "id4": 4,
    "nome4": "Grimm",
    "sobrenome4": "King of Nightmares",
    "cidade4": "São Paulo",
    "pais4": "Brasil",
    "imagem4": "<img src='img/B_Grimm.jpg' width='640px'>",
    "link4": "https://hollowknight.fandom.com/wiki/Grimm",

    "id5": 5,
    "nome5": "Sisters of Battle",
    "sobrenome5": "The Mantis Lords",
    "cidade5": "São Paulo",
    "pais5": "Brasil",
    "imagem5": "<img src='img/sistersofbattle.jpg' width='600px'>",
    "link5": "https://hollowknight.fandom.com/wiki/Sisters_of_Battle"
}`;

//Converter o texto STRING para JSON
var dados = JSON.parse(json);

//criar variavel para o link
var link = `<a href="${dados.link}">Wiki</a>`;
var link2 = `<a href="${dados.link2}">Wiki</a>`;
var link3 = `<a href="${dados.link3}">Wiki</a>`;
var link4 = `<a href="${dados.link4}">Wiki</a>`;
var link5 = `<a href="${dados.link5}">Wiki</a>`;

console.log(dados);

function apertar1() {
  document.getElementById("link").innerHTML = link;
  document.getElementById("imagem").innerHTML = dados.imagem;
  document.getElementById("nome").innerHTML = dados.nome;
  document.getElementById("sobrenome").innerHTML = dados.sobrenome;
  document.getElementById("cidade").innerHTML = dados.cidade;
  document.getElementById("pais").innerHTML = dados.pais;
}

function apertar2() {
    document.getElementById("link").innerHTML = link2;
    document.getElementById("imagem").innerHTML = dados.imagem2;
    document.getElementById("nome").innerHTML = dados.nome2;
    document.getElementById("sobrenome").innerHTML = dados.sobrenome2;
    document.getElementById("cidade").innerHTML = dados.cidade2;
    document.getElementById("pais").innerHTML = dados.pais2;
}

function apertar3() {
    document.getElementById("link").innerHTML = link3;
    document.getElementById("imagem").innerHTML = dados.imagem3;
    document.getElementById("nome").innerHTML = dados.nome3;
    document.getElementById("sobrenome").innerHTML = dados.sobrenome3;
    document.getElementById("cidade").innerHTML = dados.cidade3;
    document.getElementById("pais").innerHTML = dados.pais3;
}

function apertar4() {
    document.getElementById("link").innerHTML = link4;
    document.getElementById("imagem").innerHTML = dados.imagem4;
    document.getElementById("nome").innerHTML = dados.nome4;
    document.getElementById("sobrenome").innerHTML = dados.sobrenome4;
    document.getElementById("cidade").innerHTML = dados.cidade4;
    document.getElementById("pais").innerHTML = dados.pais4;
}

function apertar5() {
    document.getElementById("link").innerHTML = link5;
    document.getElementById("imagem").innerHTML = dados.imagem5;
    document.getElementById("nome").innerHTML = dados.nome5;
    document.getElementById("sobrenome").innerHTML = dados.sobrenome5;
    document.getElementById("cidade").innerHTML = dados.cidade5;
    document.getElementById("pais").innerHTML = dados.pais5;
}
