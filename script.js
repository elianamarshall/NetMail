function typewriter(element, txt, delay, i = 0) {
  if (i < txt.length) {
    container.insertBefore(
      document.createTextNode(txt[i]),
      container.querySelector(".cursor"
    element.textContent += txt[i];
    setTimeout(() => typewriter(element, txt, delay, i + 1), delay);
  }
}


const elem = document.querySelector(".ominous");

setTimeout(() => {
  typewriter(elem, "Where am I?", 100);
}, 3000);

