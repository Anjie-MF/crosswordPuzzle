const container = document.querySelector('.container');

// Function to create a grid cell
function createCell() {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  return cell;
}

// Function to create the entire grid
function createGrid(rows, cols) {
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = createCell();
      container.appendChild(cell);
    }
  }
}

// Create a 20x20 grid
createGrid(20, 20);