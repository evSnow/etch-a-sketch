const container = document.querySelector("#container");
for(let j=0; j<16; j++){
const row = document.createElement("div");
row.style.display = "flex";
//width: 960px ;
row.style.width = "960px";
row.style.background = "blue";
row.style.color = "red";
row.style.textAlign = "center";
row.style.alignItems = "center";
row.style.justifyContent = "center";
row.style.width = "900px";

for(let i=0;i<16;i++){ 
const grid=document.createElement("div");
grid.textContent="";
grid.style.width = "30px";
grid.style.height = "30px";
grid.style.backgroundColor = "white";
grid.style.border="2px solid black"
//grid.classList.add("grid");
grid.id= "grids";
row.appendChild(grid);
}
container.appendChild(row)
}


const hovers = document.getElementById("grids");
const hove = document.querySelectorAll("#grids");
hove.forEach((hovers)=> {
hovers.addEventListener("mouseenter", () => {
    hovers.style.backgroundColor = "purple";
    console.log(1);
});
});