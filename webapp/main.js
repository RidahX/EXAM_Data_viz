counter = 0;

function updateCounterDisplay() {
    document.getElementById('counter').textContent = counter;
}

function increaseCounter() {
    counter++;
    updateCounterDisplay();
}

function decreaseCounter() {
    if (counter > 0) {
        counter--;
    }
    updateCounterDisplay();
}

function resetCounter() {
    counter = 0;
    updateCounterDisplay();
}
