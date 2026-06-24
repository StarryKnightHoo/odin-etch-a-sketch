let body = document.body;
let container = document.createElement("div");
let btn = document.createElement("button");
let gridPerSide = 16;

btn.style.width = "320px";
btn.style.height = "40px";
btn.style.margin = "8px 160px";
btn.textContent = "New Grid";
btn.style.fontSize = "30px";
btn.style.fontFamily = "Roboto";
btn.setAttribute("class", "button");
body.appendChild(btn);
body.appendChild(container);

container.style.width = "640px";
container.style.height = "640px";
container.style.backgroundColor = "red";
container.setAttribute("class", "container");

for (let i = 0; i < (gridPerSide * gridPerSide); i++) {
    const grid = document.createElement("div");
    grid.style.width = `${640 / gridPerSide}px`;
    grid.style.height = `${640 / gridPerSide}px`;
    grid.style.backgroundColor = "grey";
    grid.style.border = "1px solid black";
    grid.setAttribute("class", "grid");
    container.appendChild(grid);
    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = "purple";
    });
}

btn.addEventListener("click", () => {
    container.innerHTML = "";
    
    let input = prompt("Enter grid size: ");
    if (input > 100) {
        gridPerSide = prompt("Please enter a smaller number: ");
    } else {
        gridPerSide = input;
    }

    for (let i = 0; i < (gridPerSide * gridPerSide); i++) {
        const grid = document.createElement("div");
    grid.style.width = `${640 / gridPerSide}px`;
    grid.style.height = `${640 / gridPerSide}px`;
    grid.style.backgroundColor = "grey";
    grid.style.border = "1px solid black";
    grid.setAttribute("class", "grid");
    container.appendChild(grid);
    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = "purple";
    })
    }

});
