const gridContainer = document.querySelector('.sketchArea');

function setGridSize(size) {
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