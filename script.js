let sketchBoard = document.querySelector(".sketchboard");
let squareNum = prompt("Who Many Squares??", 0);
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

let squares = document.querySelectorAll('.sketchRow');
squares.forEach(square => square.addEventListener('mouseover', () => {
     square.classList.add('activated')
     setTimeout(()=>square.classList.remove('activated'), 50)
}));