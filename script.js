let sketchBoard = document.querySelector(".sketchboard");
for(let i = 0; i < 4; i++){
    const sketchColumn=document.createElement('div');
    sketchColumn.classList.add('sketchColumn')
    //sketchColumn.textContent=`I am Column ${i}`
    sketchBoard.appendChild(sketchColumn);
    for(let j = 0; j < 4; j++){
        const sketchRow = document.createElement('div');
        sketchRow.classList.add('sketchRow');
        sketchRow.textContent=`I am Row ${j}`;
        sketchColumn.appendChild(sketchRow);
    }
}