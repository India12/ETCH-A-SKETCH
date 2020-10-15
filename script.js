const container = document.querySelector('.container');
container.classList.add('container');

// LEFT CONTAINER
const leftContainer = document.createElement('div');
leftContainer.classList.add('left-container');
container.appendChild(leftContainer);

const selectSizeBox = document.createElement('div');
selectSizeBox.classList.add('select-size-container');
leftContainer.appendChild(selectSizeBox);

const title = document.createElement('h1');
title.textContent = 'ETCH - A - SKETCH';
selectSizeBox.appendChild(title);

const subTitle = document.createElement('h2');
subTitle.textContent = 'Select Grid Size';
selectSizeBox.appendChild(subTitle);

const buttons = document.createElement('div');
buttons.classList.add('buttons');
selectSizeBox.appendChild(buttons);

const btn1 = document.createElement('button');
btn1.id = 'btn1';
btn1.textContent = '16 x 16';
buttons.appendChild(btn1);

const btn2 = document.createElement('button');
btn2.id = 'btn2';
btn2.textContent = '32 x 32';
buttons.appendChild(btn2);

const btn3 = document.createElement('button');
btn3.id = 'btn3';
btn3.textContent = '64 x 64';
buttons.appendChild(btn3);

const br = document.createElement('br');
buttons.appendChild(br);

const btn4 = document.createElement('button');
btn4.id = 'btn4';
btn4.textContent = 'Custom Size';
buttons.appendChild(btn4);

const selectColorBox = document.createElement('div');
selectColorBox.classList.add('select-color-box');
leftContainer.appendChild(selectColorBox);

const subTitle2 = document.createElement('h2');
subTitle2.textContent = 'Select Color';
selectColorBox.appendChild(subTitle2);

const colorInputDiv = document.createElement('div');
colorInputDiv.classList.add('color-input-div');
selectColorBox.appendChild(colorInputDiv);

const colorInput = document.createElement('input');
colorInput.id = 'ci';
colorInput.type = 'color';
colorInput.value = "#030303";
colorInputDiv.appendChild(colorInput);

const rainbowInputDiv = document.createElement('div');
rainbowInputDiv.classList.add('rainbow-input-div');
selectColorBox.appendChild(rainbowInputDiv);

const btn5 = document.createElement('button');
btn5.id = 'btn5';
btn5.textContent = 'Rainbow';
rainbowInputDiv.appendChild(btn5);

const darkenInputDiv = document.createElement('div');
darkenInputDiv.classList.add('darken-input-div');
selectColorBox.appendChild(darkenInputDiv);

const btn6 = document.createElement('button');
btn6.id = 'btn6';
btn6.textContent = 'Darken';
darkenInputDiv.appendChild(btn6);

const br2 = document.createElement('br');
selectColorBox.appendChild(br2);

const btn7 = document.createElement('button');
btn7.id = 'btn7';
btn7.textContent = ' RESET ';
selectColorBox.appendChild(btn7);

// RIGHT CONTAINER
const rightContainer = document.createElement('div');
rightContainer.classList.add('right-container');
container.appendChild(rightContainer);

const grid = document.createElement('div');
grid.classList.add('grid');
grid.id = 'grid';
rightContainer.appendChild(grid);

// grid size 
function createCustomGrid(customSize) {
    grid.style.gridTemplateColumns = `repeat(${customSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${customSize}, 1fr)`;

    for (let i = 0; i < customSize*customSize; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        grid.appendChild(gridItem); 
    }
    reset();
    colorGrid();
}
function colorGrid() {
   let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.background = colorInput.value;
            //gridItem.style.opacity = '1';
        });
    });
}
function colorRainbowGrid(){
    let gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => { 
            gridItem.style.background = generateRandomColor();
            //gridItem.style.opacity = '1';
        });
    });
}
function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function darken() {
    let gridItems = document.querySelectorAll('.grid-item'); 

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            
            gridItem.counter = gridItem.counter || 0;
            gridItem.counter += 1;
            
            if (gridItem.counter === 1) {
                gridItem.style.background = '#000000';
                gridItem.style.opacity = '0.1';
            } else if (gridItem.counter === 2) {
                gridItem.style.background = '#000000';
                gridItem.style.opacity = '0.2';
            } else if (gridItem.counter === 3) {
                gridItem.style.background = '#000000';
                gridItem.style.opacity = '0.3';
            } else if (gridItem.counter === 4) {
                gridItem.style.background = '#000000';
                gridItem.style.opacity = '0.4';
            } else if (gridItem.counter === 5) {
                gridItem.style.background = '#000000';
                gridItem.style.opacity = '0.5';
            } else if (gridItem.counter === 6) {
                gridItem.style.background = '#000000';
                gridItem.style.opacity = '0.6';
            } else if (gridItem.counter === 7) {
                gridItem.style.background = '#000000';
                gridItem.style.opacity = '0.7';
            } else if (gridItem.counter === 8) {
                gridItem.style.background = '#000000';
                gridItem.style.opacity = '0.8';
            } else if (gridItem.counter === 9) {
                gridItem.style.background = '#000000';
                gridItem.style.opacity = '0.9';
            } else if (gridItem.counter === 10) {
                gridItem.style.background = '#000000';
                gridItem.style.opacity = '1';
            } else {
                gridItem.style.background = '#000000';
                gridItem.style.opacity = '1';
            }
        });
    });
}

function reset(){
    let gridItems = document.querySelectorAll('.grid-item');
    Array.from(gridItems).forEach(gridItem => 
        gridItem.style.background = '#ffffff');
                
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {    
            gridItem.style.opacity = '1';
        });
    });

    // not working!!!
    //Array.from(gridItems).forEach(gridItem =>    
    //    gridItem.counter = 0);      
}
function sampleFunction() {
(() => {
    setTimeout(() => {
      document.getElementsByTagName("body")[0];
    }, 50)
  })();
    location.reload();
  }

btn1.addEventListener('click', () => {
    createCustomGrid(16);
});
btn2.addEventListener('click', () => {
    createCustomGrid(32);
});
btn3.addEventListener('click', () => {
    createCustomGrid(64);
});
btn4.addEventListener('click', () => {
    let customSize = parseFloat(prompt('Enter number for custom grid size (e.g. for 64 x 64 enter 64'));
    createCustomGrid(customSize);
});

colorInput.addEventListener('click', colorGrid);
btn5.addEventListener('click', colorRainbowGrid);
btn6.addEventListener('click', darken);

btn7.addEventListener('click', sampleFunction);
btn7.addEventListener('click', reset);

colorGrid();
createCustomGrid(32);

