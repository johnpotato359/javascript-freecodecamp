let count = 0;
let countEl = document.getElementById('count-el');
let resultado = document.getElementById('resultado');

function increment() {
    count++;
    countEl.innerHTML = count;
}

function save() {
    
    resultado.textContent += `${count} - `;
    count = 0;
    countEl.innerHTML = count;
}
