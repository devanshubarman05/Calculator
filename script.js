function insert(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function deleteLast() {
    let screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    let screen = document.getElementById('screen');
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = 'Error';
    }
}
