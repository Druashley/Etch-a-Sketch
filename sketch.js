
gridContainer = document.getElementById('gridContainer');

restartButton = document.getElementById('restartButton');

colorRestart = document.getElementById('colorRestart');

box = document.getElementsByClassName('box');

title = document.getElementById('title');

titleColor = document.getElementById('titleColor');

titleColor.addEventListener('click', function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    title.setAttribute('style', `color: ${color}`)
});

colorRestart.addEventListener('click', function (e) {
    let newBoxCount = prompt('How big would you like the grid?');
    if (newBoxCount > 0) {
        boxClear();
        randomBoxColorMaker(newBoxCount);
    } else {
        newBoxCount = prompt('Your number must be above 0');
        boxClear();
        randomBoxColorMaker(newBoxCount);
    }

});


restartButton.addEventListener('click', function (e) {
    let newBoxCount = prompt('How big would you like the grid?');
    if (newBoxCount > 0) {
        boxClear();
        boxMaker(newBoxCount);
    } else {
        newBoxCount = prompt('Your number must be above 0');
        boxClear();
        boxMaker(newBoxCount);
    }

});



function boxMaker(boxCount) {
    for (i = 0; i < (boxCount * boxCount); i++) {
        var box = document.createElement('div');
        box.classList.add('box');
        document.getElementById('gridContainer').appendChild(box);

        box.addEventListener('mouseover', function () {
            this.setAttribute("style", "background-color: black;");
        });
    }
    gridContainer.setAttribute('style', `grid-template-rows: repeat(${boxCount},1fr);`);
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${boxCount},1fr);`);
}

function boxClear() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

// boxMaker(30);



function randomBoxColorMaker(boxCount) {


    for (i = 0; i < (boxCount * boxCount); i++) {
        var box = document.createElement('div');
        box.classList.add('box');
        document.getElementById('gridContainer').appendChild(box);

        box.addEventListener('mouseover', function () {
            this.setAttribute('style', `background-color: ${getRandomColor()};`);
        });
    }
    gridContainer.setAttribute('style', `grid-template-rows: repeat(${boxCount},1fr);`);
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${boxCount},1fr);`);
}




function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



boxMaker(30);





