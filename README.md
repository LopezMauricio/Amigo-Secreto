# Sorteo de Amigos

Este es un proyecto simple en JavaScript que permite agregar amigos a una lista y luego realizar un sorteo para elegir un ganador al azar.

## Características
- Agregar amigos a la lista.
- Ver la lista de amigos agregados.
- Realizar un sorteo y seleccionar un ganador al azar.

## Tecnologías utilizadas
- JavaScript
- HTML
- CSS

## Instalación y uso
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/tuusuario/sorteo-amigos.git
   ```
2. Abrir el archivo `index.html` en un navegador web.
3. Agregar amigos y realizar el sorteo.

## Explicación de funciones

### `agregarAmigo()`
Esta función permite agregar un amigo a la lista verificando que el nombre no esté vacío.
```javascript
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
```

### `ActualizarLista()`
Actualiza la lista de amigos en la interfaz.
```javascript
function ActualizarLista(){
    const listaAmigoU1 = document.getElementById("listaAmigos")
    listaAmigoU1.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoU1.appendChild(li);
    });
}
```

### `sortearAmigo()`
Elige un amigo aleatoriamente de la lista y lo muestra en pantalla.
```javascript
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
```

### `EventListener para botones`
Agrega eventos a los botones cuando se carga la página.
```javascript
document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById("btnAdicionar").addEventListener("click",agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click",sortearAmigo);
})
```

![image](https://github.com/user-attachments/assets/5e8d65f9-aa3d-4af5-a7a3-63cfbaf5ef91)
![image](https://github.com/user-attachments/assets/b5fc8cda-9950-4120-b9f0-5af37018de2d)
![image](https://github.com/user-attachments/assets/2e82181a-b186-4bb8-9016-58f035a0b07f)
![image](https://github.com/user-attachments/assets/0f8e6223-da63-4742-be41-10123ecdf236)

