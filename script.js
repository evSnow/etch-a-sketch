function color(){
    return Math.floor(Math.random()*255);
}


const container = document.querySelector("#container");
let size=64;
for(let j=0; j<size; j++){
const row = document.createElement("div");
row.style.display = "flex";
//row.style.flex = "1 0 auto";
//width: 960px ;
row.style.background = "blue";
row.style.color = "red";
row.style.alignItems = "center";
row.style.justifyContent = "center";
row.style.maxWidth = "1000px";
row.style.maxHeight = "1000px";
row.style.minWidth = "10px";
row.style.minHeight = "5px";
row.style.width = "100%";

row.id= "row";

for(let i=0;i<size;i++){ 
const grid=document.createElement("div");

grid.textContent="";
row.style.flex = "1 1 0";
grid.style.maxWidth = "1000px";
grid.style.maxHeight = "1000px";
grid.style.minWidth = "5px";
grid.style.minHeight = "5px";

grid.style.width = "100%";
grid.style.height = "100%";
grid.style.backgroundColor = "white";
grid.style.border="1px solid black"
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
    hovers.style.backgroundColor = "rgb("+color()+", "+color()+", "+color()+")";
    
});
});

function hightCheck(){
    let repeat=0;
    let hight=0;
    hight=prompt("Enter the height of the grid between 0 - 100");
    while(repeat===0){
        if(hight<0){
            hight=prompt("value too low\n Enter the height of the grid between 0 - 100");
        }
        else if(hight>100){
            hight=prompt("value too high\n Enter the height of the grid between 0 - 100");
        }
        else{
            repeat = 1;
            console.log(hight);
            return hight
        }
    }
}
function widthCheck(){
    let repeat=0;
    let width=0
    width=prompt("Enter the width of the grid between 0 - 100");
    while(repeat===0){
        if(width<0){
            width=prompt("value too low\n Enter the width of the grid between 0 - 100");
        }
        else if(width>100){
            width=prompt("value too high\n Enter the width of the grid between 0 - 100");
        }
        else{
            repeat=1;
            return width
        }
    }
}  ///80> = 5px   
const buttons = document.querySelector("button");
buttons.addEventListener("click", () => {

    const container = document.querySelector("#container");
    for(let f=0; f<101; f++){
        const r = document.getElementById("row").remove();
        const ro = document.getElementById("row");
        if(ro===null){
            break;
        }
        console.log(1);
    }
    let size=hightCheck();
    size=parseInt(size)+1;
    console.log(size);
    for(let j=0; j<size; j++){
        const row = document.createElement("div");
        row.style.display = "flex";
        //row.style.flex = "1 0 auto";
        //width: 960px ;
        row.style.background = "blue";
        row.style.color = "red";
        row.style.alignItems = "center";
        row.style.justifyContent = "center";
        row.style.maxWidth = "1000px";
        row.style.maxHeight = "1000px";
        row.style.minWidth = "10px";
        row.style.minHeight = "5px";
        row.style.width = "100%";
        
        row.id= "row";
        
        for(let i=0;i<size;i++){ 
        const grid=document.createElement("div");
        
        grid.textContent="";
        row.style.flex = "1 1 0";
        grid.style.maxWidth = "1000px";
        grid.style.maxHeight = "1000px";
        grid.style.minWidth = "5px";
        grid.style.minHeight = "5px";
        
        grid.style.width = "100%";
        grid.style.height = "100%";
        grid.style.backgroundColor = "white";
        grid.style.border="1px solid black"
        //grid.classList.add("grid");
        grid.id= "grids";
        row.appendChild(grid);
        }
        container.appendChild(row)
        }
    const hoves = document.getElementById("grids");
    const hov = document.querySelectorAll("#grids");
hov.forEach((hoves)=> {
hoves.addEventListener("mouseenter", () => {
    hoves.style.backgroundColor = "rgb("+color()+", "+color()+", "+color()+")";
    
});
});
    });


/*
    if(g==null){
        break;
    }
    if(r==null){
        break;
    }
    for(let i=0;i<100;i++){ 
        g.remove(); 
    }
    for(let j=0; j<100; j++){
        r.remove();
    }
        */