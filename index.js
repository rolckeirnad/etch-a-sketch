const gridContainer = document.querySelector('.sketchArea');
for (let i = 0; i < 16 * 16; i++) {
    const grid = document.createElement('div');
    grid.classList.add('gridElement');
    grid.setAttribute('id', `grid${i}`);
    gridContainer.appendChild(grid);
}