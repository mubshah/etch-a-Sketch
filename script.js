
const RGB = "0123456789abcdef";
var randomIsClicked = false;
var blackIsClicked = true;
var grid_size = 16;
function reset(){
    let allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => cell.style.backgroundColor="#FFFFFF");
}
function setGridSize(size){
    var e = document.getElementById('grid-size');
    size= e.options[e.selectedIndex].value;
    console.log("hello size is "+size);
    grid_size=size;
    remove();
    generate(size);
}
function remove(){
    const container = document.getElementById('container');
    let allCells =document.querySelectorAll('.cell');
    allCells.forEach(cell => container.removeChild(cell));
}
function generate(grid_size){
    let cellSize = 512 / grid_size;
    const container = document.getElementById('container');
    for(var i=1;i<=grid_size;i++){
        for(var j=1;j<=grid_size;j++){
            const div = document.createElement('div');
            div.className="cell";
            div.style.width = `${cellSize}px`;
            div.style.height = `${cellSize}px`;
            console.log("hello");
            container.appendChild(div);
        }
    }
    changeColor();
}
function autoFill(){
    console.log("hahaha");
    for(var i=0;i<grid_size;i++){
    let allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => cell.style.backgroundColor = `${randomColor()}`);
}
}
function changeColor(){
    let allCells = document.querySelectorAll('.cell');
    if(randomIsClicked==true){
    allCells.forEach(cell => cell.addEventListener('mouseenter', function () {
        cell.style.backgroundColor = `${randomColor()}`;
    }));
    allCells.forEach(cell => cell.addEventListener('mouseleave', function () {
        cell.style.backgroundColor = `${randomColor()}`;
    }));
    allCells.forEach(cell => cell.addEventListener('mouseover', function () {
        cell.style.backgroundColor = `${randomColor()}`;
    }));
}
else{
    allCells.forEach(cell => cell.addEventListener('mouseenter', function () {
        cell.style.backgroundColor = "#000000";
    }));
    allCells.forEach(cell => cell.addEventListener('mouseleave', function () {
        cell.style.backgroundColor = "#000000";
    }));
    allCells.forEach(cell => cell.addEventListener('mouseover', function () {
        cell.style.backgroundColor = "#000000";
    }));
}
    console.log("hello");   
}
function randomColor(){
    // var r = Math.random()*255;
    // var g = Math.random()*255;
    // var b = Math.random()*255;
    // let myRgb = "rgb("+r+","+g+","+b+")";
    let myRgb="#";
    for (i = 0; i < 6; i++) {
        myRgb += RGB[Math.floor(Math.random() * 16)];
    }
    return myRgb;
}
function setRandomIsClicked(){
    randomIsClicked=true;
    changeColor();
}
function black(){
    blackIsClicked=true;
    randomIsClicked=false;
    changeColor();
}
generate(grid_size);
changeColor();

