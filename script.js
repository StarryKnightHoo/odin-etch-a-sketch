let body = document.body;
let container = document.createElement("div");

body.appendChild(container);

container.style.width = "640px";
container.style.height = "640px";
container.style.backgroundColor = "red";

for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.style.width = "40px";
    grid.style.height = "40px";
    grid.style.backgroundColor = "blue";
    container.appendChild(grid);
}
