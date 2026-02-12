//function to simulate a typewriter effect
function typewriter(element, text, speed) {
  element.textContent = ""; //clear the existing text before starting the animation
  let i = 0; //index to track the current character being typed

  //recursive function to add one character at a time with a delay
  function type() {
    if (i < text.length) { //check if there are more characters to type
      element.textContent += text.charAt(i); //if there are, append the next character to the element's text content
      i++; //move to the next character index
      setTimeout(type, speed); //delay the next character
    }
  }
  type(); //start the typing animation
}

document.addEventListener("DOMContentLoaded", () => { //wait for the DOM to fully load before running the script
  document.querySelectorAll(".typewriter").forEach(el => { //select all elements with the typewriter class and loop through them
    const text = el.dataset.text; //get the text to be typed from the data-text attribute
    const speed = Number(el.dataset.speed); //get the typing speed from the data-speed attribute and convert it to a number
    setTimeout(() => typewriter(el, text, speed), 3000); //start the typewriter effect after a 3-second delay
  });
});

document.addEventListener("click", () => { //add a click event listener to the entire document
  const wallpaper = document.getElementById("wallpaper"); //get the wallpaper element
  const mailbox = document.getElementById("mailbox"); //get the mailbox element
  const mailMsg = document.getElementById("mail-msg"); //get the mail message element
  
  if(getComputedStyle(mailbox).opacity == "1") { //check if the mailbox is currently visible
    setTimeout(() => wallpaper.classList.add("show"), 500); //if it is, show the wallpaper
    setTimeout(() => mailMsg.classList.add("hide"), 500); //also hide the mail message
    setTimeout(() => mailbox.classList.add("hide"), 500); //and hide the mailbox
  }
});