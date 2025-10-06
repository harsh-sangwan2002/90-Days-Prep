const heading = document.querySelector('#heading');
console.log(heading);
console.log(heading.textContent);

const button = document.querySelector('button');
const randomNumber = document.querySelector('#random-number');

button.addEventListener('click', function () {
    const randNum = Math.floor(Math.random() * 10) + 1;
    randomNumber.textContent = `Random Number: ${randNum}`;
});