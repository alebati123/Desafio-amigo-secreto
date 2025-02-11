
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

  let amigoSecreto = [];

  function asignarTextoElemento(elemento, texto) {
      let elementoHTML = document.querySelector(elemento);
      elementoHTML.innerHTML = texto;
  }
  
  function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value.trim();

    if (nombreDeAmigo === "") {
        alert("Completa el campo con un nombre");
        return;
    }

    if (amigoSecreto.includes(nombreDeAmigo)) {
        alert("El nombre ya está en la lista, ingresa uno nuevo");
        return;
    }

    amigoSecreto.push(nombreDeAmigo);
    actualizarLista();
    limpiarCaja();
    console.log(amigoSecreto);
}

  
  function actualizarLista() {
      let lista = document.querySelector('ul');
      lista.innerHTML = ""; 
  
      for (let amigo of amigoSecreto) {
          let elemento = document.createElement('li');
          elemento.textContent = amigo;
          lista.appendChild(elemento);
      }
  }
  
  function limpiarCaja() {
      document.getElementById('amigo').value = '';
  }
  
  function sortearAmigo() {
    if (amigoSecreto.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigoSecreto.length);
    let amigoSorteado = amigoSecreto[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `🎉 Amigo secreto: <strong>${amigoSorteado}</strong>`;
}
