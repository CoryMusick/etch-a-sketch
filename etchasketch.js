let container = document.createElement("div");
let controlContainer = document.createElement("div");
let rowSize = 16;
let columnSize = 16;
container.setAttribute("class", "container");
controlContainer.setAttribute("class", "control-container")
document.querySelector("body").appendChild(container);
document.querySelector("body").appendChild(controlContainer);




//Create Grid
createGrid = (rows, columns) => {
for(let i = 0; i < rows * columns; i++){
  let gridItem = document.createElement("div");
  gridItem.addEventListener( "mouseover", () => {
      gridItem.classList.add("gray");
  });
  gridItem.className = "grid-item";
  container.appendChild(gridItem)
}
}


createGrid(rowSize, columnSize)
