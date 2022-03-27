const gridContainer = document.querySelector('.sketchArea');
const usrInput = document.querySelector('#newGridSize');
const setButton = document.querySelector('#setButton');
const resetButton = document.querySelector('#resetButton');

setButton.addEventListener('click', e => setGridSize(+usrInput.value));
resetButton.addEventListener('click', clearGrid);

function setGridSize(size) {
    if (size > 100 || size < 16) {
        const r = document.querySelector(':root');
        r.style.setProperty('--total-elements', 1);
        gridContainer.classList.add('sketchText');
        gridContainer.textContent = "Please enter a grid size number between 16 and 100";
        return;
    }
    removeGrid();
    gridContainer.classList.remove('sketchText');
    const r = document.querySelector(':root');
    r.style.setProperty('--total-elements', size);

    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('gridElement');
        grid.setAttribute('id', `grid${i}`);
        grid.addEventListener("mouseover", onHover);
        gridContainer.appendChild(grid);
    }
}

function clearGrid() {
    const grid = document.querySelectorAll('.sketchArea>div');
    grid.forEach(grid => grid.classList.remove('hoveredElement'));
}

function removeGrid() {
    gridContainer.innerHTML = '';
}

function onHover(e) {
    e.srcElement.classList.add('hoveredElement');
}