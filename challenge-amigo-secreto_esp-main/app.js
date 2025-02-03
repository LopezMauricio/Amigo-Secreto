// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    const Amigo = document.getElementById("amigo");
    const nombreAmigo = Amigo.value.trim();

    if(nombreAmigo === ""){
        alert("Por favor, se debe insertar un nombre");
        return;
    }

    amigos.push(nombreAmigo);

    ActualizarLista();

    Amigo.value = "";
    Amigo.focus();
}

function ActualizarLista(){
    const listaAmigoU1 = document.getElementById("listaAmigos")
    listaAmigoU1.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoU1.appendChild(li);
    });
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("No se encuentra ningun nombre de su amigo, deberia agregar los nombres");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random()*amigos.length);

    const amigosSorteado = amigos[indiceAleatorio];

    const resultadoU1 = document.getElementById("resultado");
    resultadoU1.innerHTML = `<li>${amigosSorteado}</li>`;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById("btnAdicionar").addEventListener("click",agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click",sortearAmigo);
})