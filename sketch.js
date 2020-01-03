
gridContainer = document.getElementById('gridContainer');

//let box = document.createElement('div');

// box.classList.add('box');


// gridContainer.appendChild(box);
// gridContainer.appendChild(box);
// gridContainer.appendChild(box);
// gridContainer.appendChild(box);

 
for (i = 0; i < (16 * 16) ; i++){
    var box = document.createElement('div');
    box.classList.add('box');
    document.getElementById('gridContainer').appendChild(box);
}

