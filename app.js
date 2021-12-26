let counter = 1;

function render() {
    let container = document.getElementById('pokemon');
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${counter}.svg" >`;
}

let prev = document.getElementById('prev');
let next = document.getElementById('next');

prev.onclick = function() {
    if (counter > 1) {
        counter--;
        render();
    }
}

next.onclick = function() {
    if (counter < 650) {
        counter++;
        render();
    }
}

render();