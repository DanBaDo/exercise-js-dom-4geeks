const container = document.getElementById("container");
const input = document.getElementById("input");

//TODO: crea una funcion que elimine de pantalla la columna que corresponda con el indice introducido en deleteInput
// si pongo un id que no existe debe mostrar un error

document
  .querySelector("#myForm")
  .addEventListener("submit", ev => ev.preventDefault());

document.getElementById("button").addEventListener("click", () => {
  //crear el elemento
  let div = document.createElement("div");
  div.setAttribute("class", "col");

  //TODO: CREAR UN HN AL AZAR (H1-H2...H6)
  div.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
  container.appendChild(div);
});

document.getElementById("deleteButton").addEventListener("click", () => {
  // Obtenemos la lista actualizada de elementos susceptibles de ser borrados
  // y comprobamos que existan elementos a borrar.
  // Llamamos al querySelectorAll desde contaniners para hacerlo más selectivo
  // y minimizar el recorrido del DOM.
  let columnas = container.querySelectorAll(".col");
  if (columnas.length > 0) {
    container.removeChild(columnas[columnas.length - 1]);
  } else {
    console.log("No hay nadie a quien eliminar");
  }
});

//crear evento
input.addEventListener("keyup", ev => {
  if (ev.keyCode == 13) {
    console.log("Estamos cambiando el evento");
    //TODO: REFACTORIZAR
    for (let value of container.childNodes) {
      console.log(value);
      value.innerHTML = `<h1>${input.value.toUpperCase()}</h1>`;
    }
  }
});
