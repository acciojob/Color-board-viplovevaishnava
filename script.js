//your JS code here. If required.

const squareSize = 24;

const columns = Math.floor(window.innerWidth / squareSize);
const rows = Math.floor(window.innerHeight / squareSize);

const totalSquares = columns * rows; const container = document.querySelector('.container');
for (let i = 0; i < totalSquares; i++) {
    const squares = document.createElement('div')
    squares.classList.add('square')
    container.appendChild(squares)
}
const squares = document.querySelectorAll('.square')

const randomColor = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color.padStart(6, '0')}`;
};
squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = randomColor();
    });

    square.addEventListener('mouseleave', () => {
        setTimeout(() => {
            square.style.backgroundColor = '#1d1d1d';
        }, 1000);
    });
});