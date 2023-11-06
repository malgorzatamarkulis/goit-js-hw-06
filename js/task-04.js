const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.getElementById('value');

let counterValue = 0;

valueElement.textContent = counterValue;

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    valueElement.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    valueElement.textContent = counterValue;
});