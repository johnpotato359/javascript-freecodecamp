let sentence = ["Hello", "my", "name", "is", "Nicholas"];
let greetingEl = document.querySelector('p#greeting-el');

for(let i in sentence) {
    greetingEl.textContent += sentence[i] + " ";
}