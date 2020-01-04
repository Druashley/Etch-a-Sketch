
gridContainer = document.getElementById('gridContainer');

restartButton = document.getElementById('restartButton');

colorRestart = document.getElementById('colorRestart');

box = document.getElementsByClassName('box');

title = document.getElementById('title');

titleColor = document.getElementById('titleColor');

allButtons = document.getElementsByClassName('button');


titleColor.addEventListener('click', function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    for (i = 0; i < allButtons.length; i++) {
        allButtons[i].setAttribute('style', `background-color: ${color};`);
    }
    title.setAttribute('style', `color: ${color}; border-bottom: 3px ${color} solid`);
});

colorRestart.addEventListener('click', function (e) {
    let newBoxCount = prompt('How big would you like the grid?');
    if (newBoxCount > 0) {
        boxClear();
        setColor(getRandomColor());
        randomBoxColorMaker(newBoxCount);
    } else {
        newBoxCount = prompt('Your number must be above 0');
        boxClear();
        setColor(getRandomColor());
        randomBoxColorMaker(newBoxCount);
    }

});


restartButton.addEventListener('click', function (e) {
    let newBoxCount = prompt('How big would you like the grid?');
    if (newBoxCount > 0) {
        boxClear();
        setColor(getRandomColor());
        boxMaker(newBoxCount);
    } else {
        newBoxCount = prompt('Your number must be above 0');
        boxClear();
        setColor(getRandomColor());
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


function setColor(color) {
    for (i = 0; i < allButtons.length; i++) {
        allButtons[i].setAttribute('style', `background-color: ${color};`);
    }
    title.setAttribute('style', `color: ${color}; border-bottom: 3px ${color} solid`);
}

setColor(getRandomColor());

boxMaker(30);





