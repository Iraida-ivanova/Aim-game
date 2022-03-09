const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score = 0;
const colors = ['#00FA9A', '#D87093','#00CED1',	'#FFA500', '#FF4500', '#DC143C', '#228B22', '#9932CC','#1E90FF', '#006400', 'linear-gradient(90deg, #20B2AA 0%, #FF8C00 47%, #FA8072 100%)'];

startBtn.addEventListener('click', (event) =>{
    event.preventDefault();
    screens[0].classList.add('up');

})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
})
function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame () {
timeEl.parentNode.classList.add('hide');
board.innerHTML = `<h1>Счет: <span class = 'primary'>${score}</span></h1>`
}

function createRandomCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    const size = getRandomNumber(20, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.style.width = `${size}px`;
    circle.style.height  = `${size}px`;
    circle.style.top  = `${y}px`;
    circle.style.left  = `${x}px`;
    setColor(circle);
    board.append(circle);

}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];

}
// вызвать в консоли
function winTheGame() {
    setInterval(kill, 75);

    function kill() {
        const circle = document.querySelector('.circle');
        if (circle) {
            circle.click();
        }
    }

}