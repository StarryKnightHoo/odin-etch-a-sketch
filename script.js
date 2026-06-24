let body = document.body;
let container = document.createElement("div");

body.appendChild(container);

container.style.width = "640px";
container.style.height = "640px";
container.style.backgroundColor = "red";
container.setAttribute("class", "container");

for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.style.width = "40px";
    grid.style.height = "40px";
    grid.style.backgroundColor = "grey";
    grid.style.border = "1px solid black";
    grid.setAttribute("class", "grid");
    container.appendChild(grid);
    grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = "purple";
    });
}
