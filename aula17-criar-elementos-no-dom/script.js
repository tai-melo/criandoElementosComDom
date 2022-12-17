const arrayPostagens = [
  {
    titulo: "Pop Vegan",
    subtitulo: "Comida vegana para todos!",
    data: "06/07/2022",
    texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
  },
  {
    titulo: "Make Hommus. Not War",
    subtitulo: "Só delivery, para curtir em casa!",
    data: "18/08/2022",
    texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos os kibes e a kafta bonina."
  },
  {
    titulo: "Churrascada do Mar",
    subtitulo: "Melhor do que estar na praia!",
    data: "30/08/2022",
    texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focado em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
  },
]


//criando o elemento

let novoArticle = document.createElement("article");

novoArticle.id = "post-02" //inserido id no novo elemento criado


let novoArticle2 = document.createElement("article");

//popular elemento -> é o msm que preencher

novoArticle.innerHTML = `<h3>${arrayPostagens[2].titulo}</h3>
<p class="subtitulo">${arrayPostagens[2].subtitulo}</p>
<div class="data">${arrayPostagens[1].data}</div>
<p>${arrayPostagens[2].texto}</p>`


novoArticle2.innerHTML = `<h3>${arrayPostagens[1].titulo}</h3>
<p class="subtitulo">${arrayPostagens[1].subtitulo}</p>
<div class="data">${arrayPostagens[2].data}</div>
<p>${arrayPostagens[1].texto}</p>`

//inserindo no local
let main = document.querySelector("main"); //capturando a main para ser usada com a propri

main.appendChild(novoArticle);

main.appendChild(novoArticle2);