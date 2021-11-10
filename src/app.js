const container = document.getElementById("container");
const input = document.getElementById("input");

function showError(msg) {
  window.alert(msg);
  console.error(msg);
}

function deleteThisElement() {
  const idx = parseInt(document.getElementById("deleteInput").value); // Input value
  const parent = document.getElementById("container"); // Parent element
  const childs = parent.querySelectorAll(".col"); // Filtered parent's childs list
  if (childs.length > 0) {
    if (idx > 0 && idx <= childs.length) {
      // If idx in the range of childs (counting base 1) delete child #idx
      // Print a error if not.
      parent.removeChild(childs[idx - 1]);
    } else
      showError(
        `You must to provide a number from 1 tp ${childs.length}. You have provided ${idx}.`
      );
  } else showError("There is no elemets to delete.");
}

function setTextContent(nodeArray, string) {
  // Verify arguments
  if (nodeArray instanceof NodeList && typeof string === "string") {
    for (let item of nodeArray.values()) {
      // Verify HTML has .innerText property and set it.
      if ("innerText" in item) item.innerText = string;
    }
  } else {
    showError("You must provide a NodeList and a string");
  }
}

function newChild() {
  const hLevel = Math.floor(Math.random() * 6 + 1);
  let div = document.createElement("div");
  div.setAttribute("class", "col");
  div.innerHTML = `<h${hLevel}>${input.value.toUpperCase()}</h${hLevel}>`;
  container.appendChild(div);
}

function removeLastChild() {
  // Get updated child list. Calling querySelectorAll from parent reduces DOM iteration.
  let columnas = container.querySelectorAll(".col");
  if (columnas.length > 0) {
    container.removeChild(columnas[columnas.length - 1]);
  } else {
    console.log("No hay nadie a quien eliminar");
  }
}

document
  .querySelector("#myForm")
  .addEventListener("submit", ev => ev.preventDefault());

document
  .querySelector("#deleteThisButton")
  .addEventListener("click", deleteThisElement);

document.getElementById("button").addEventListener("click", newChild);

document
  .getElementById("deleteButton")
  .addEventListener("click", removeLastChild);

input.addEventListener("keyup", ev => {
  if (ev.keyCode == 13) {
    const text = document.getElementById("input").value;
    const items = container.querySelectorAll(".col>*:first-child");
    setTextContent(items, text);
  }
});
