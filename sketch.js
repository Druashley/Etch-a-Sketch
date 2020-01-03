
gridContainer = document.getElementById('gridContainer');

//let box = document.createElement('div');

// box.classList.add('box');


// gridContainer.appendChild(box);
// gridContainer.appendChild(box);
// gridContainer.appendChild(box);
// gridContainer.appendChild(box);

let boxCount = 16;
 
for (i = 0; i < (boxCount * boxCount) ; i++){
    var box = document.createElement('div');
    box.classList.add('box');
    document.getElementById('gridContainer').appendChild(box);
}

gridContainer.setAttribute('style', `grid-template-rows: repeat(${boxCount},1fr);`);

gridContainer.setAttribute('style', `grid-template-columns: repeat(${boxCount},1fr);`);