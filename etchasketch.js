//variables
let rowSize;
let columnSize;

// create html elements
let container = document.createElement("div");
let controlContainer = document.createElement("div");
let resetButton = document.createElement("button");
let rowInput = document.createElement("input");
let columnInput = document.createElement("input");

//modify html elements
container.setAttribute("class", "container");
controlContainer.setAttribute("class", "control-container");
resetButton.textContent = "Reset";
rowInput.setAttribute("id", "row-input");
rowInput.setAttribute("type", "number");
rowInput.setAttribute("min", "0");
rowInput.setAttribute("max", "50");
rowInput.setAttribute("value", "16")
columnInput.setAttribute("id", "column-input");
columnInput.setAttribute("type", "number");
columnInput.setAttribute("min", "0");
columnInput.setAttribute("value", "16")
columnInput.setAttribute("max", "50");


//insert html elements
document.querySelector("body").appendChild(container);
document.querySelector("body").appendChild(controlContainer);
document.querySelector(".control-container").appendChild(resetButton);
document.querySelector(".control-container").appendChild(rowInput);
document.querySelector(".control-container").appendChild(columnInput);





//get row and column size



//Create Grid
createGrid = () => {
  rows = document.getElementById("row-input").value;
  columns = document.getElementById("column-input").value;
  container.style.gridTemplateColumns = "repeat("+columns+", 1fr)";
  container.style.gridTemplateRows = "repeat("+rows+", 1fr)";

  for(let i = 0; i < rows * columns; i++){
    let gridItem = document.createElement("div");
    gridItem.addEventListener( "mouseover", () => {
      gridItem.classList.add("gray");
  });
  gridItem.className = "grid-item";
  container.appendChild(gridItem)
}

console.log("create grid fires")
  console.log("rows: " + rows)
  console.log("columns: " + columns)
}

//Reset Grid
let reset = () => {
  console.log("reset fires")
  let gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
  item.remove();
})
createGrid()       
}

//set reset event
resetButton.addEventListener("click", () => reset());



createGrid();
