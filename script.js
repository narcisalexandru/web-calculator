var display = document.querySelector('input[name="display"]');

function addValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    display.value = eval(display.value);
}
