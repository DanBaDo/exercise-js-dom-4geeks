const container = document.getElementById("container");
const input = document.getElementById("input");

function deleteThisElement() {
  const idx = parseInt(document.getElementById("deleteInput").value); // Input value
  const parent = document.getElementById("container"); // Parent element
  const childs = parent.querySelectorAll(".col"); // Filtered parent's childs list
  // If idx in the range of childs (counting base 1) delete child #idx
  // Print a error if not.
  if (idx > 0 && idx <= childs.length) {
    parent.removeChild(childs[idx - 1]);
  } else {
    console.error(
      `You must to provide a number from 1 tp ${childs.length}. You have provided ${idx}.`
    );
  }
}

document
  .querySelector("#deleteThisButton")
  .addEventListener("click", deleteThisElement);

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
  // Get updated child list. Calling querySelectorAll from parent reduces DOM iteration.
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
