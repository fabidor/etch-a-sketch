let sketchBoard = document.querySelector(".sketchboard");
//let squareNum = prompt("Who Many Squares??", 0);
let squares;


function clearBoard(){
    while(sketchBoard.firstChild){
        sketchBoard.removeChild(sketchBoard.firstChild)
    }
}
function setBoard(squareNum){
    clearBoard();
    for(let i = 0; i < squareNum; i++){
        const sketchColumn=document.createElement('span');
        sketchColumn.classList.add('sketchColumn')
        //sketchColumn.textContent=`I am Column ${i}`
        sketchBoard.appendChild(sketchColumn);
        for(let j = 0; j < squareNum; j++){
            const sketchRow = document.createElement('span');
            sketchRow.classList.add('sketchRow');
            //sketchRow.textContent=`I am Row ${j}`;
            sketchColumn.appendChild(sketchRow);
        }
    }
    squares=document.querySelectorAll('.sketchRow');
}
setBoard(50);
 


function draw(){
    this.classList.add('activated');
}

sketchBoard.addEventListener('mousedown', () =>{
    console.log(true);
    squares.forEach(square => square.addEventListener('mouseover', draw))
    } 
);

 sketchBoard.addEventListener('mouseup', () => {
     squares.forEach(square => {
         square.removeEventListener('mouseover', draw);
     })
 })



