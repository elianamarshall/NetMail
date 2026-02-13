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
    const startMsg = document.getElementById("start-text");
    setTimeout(() => typewriter(startMsg, "Where am I?", 80), 3000); //start the typewriter effect after a 3-second delay
    setTimeout(() => startMsg.classList.add("hide"), 6000); //and hide the start message
  });

document.addEventListener("click", () => { //add a click event listener to the entire document
  const wallpaper = document.getElementById("wallpaper"); //get the wallpaper element
  const mailbox = document.getElementById("mailbox"); //get the mailbox element
  const mailMsg = document.getElementById("mail-msg"); //get the mail message element
  const chat = document.getElementById("chat"); //get the chat element
  const userInput = document.getElementById("user-input"); //get the user input element
  
  if(getComputedStyle(mailbox).opacity == "1") { //check if the mailbox is currently visible
    setTimeout(() => wallpaper.classList.add("show"), 250); //if it is, show the wallpaper
    setTimeout(() => mailMsg.classList.add("hide"), 250); //also hide the mail message
    setTimeout(() => mailbox.classList.add("hide"), 250); //and hide the mailbox
    setTimeout(() => chat.classList.add("show"), 250); //show the chat
    setTimeout(() => userInput.classList.add("show"), 250); //show the user input
  }
});

msgIdx = 0;
yes = ["yes", "y", "ye", "yea", "yeah", "yep", "sure", "ok", "okay", "why not", "of course", "absolutely", "definitely"];
no = ["no", "n", "nope", "nah", "no thanks", "no way"];
shows = ["buffy", "buffy the vampire slayer", "dawson's creek", "supernatural", "angel", "star trek", "doctor who", 
         "gilmore girls", "vampire diaries", "total drama", "merlin", "house", "futurama"];
games = ["minecraft", "the sims", "stardew valley", "animal crossing", "zelda", "pokemon", "mariokart", "roblox", "dead by daylight", 
         "lethal company", "peak", "repo", "r.e.p.o.", "terraria", "bg3", "baldur's gate 3", "celeste", "hollow knight", "overcooked", 
         "portal", "rv there yet", "it takes two", "split fiction", "human fall flat", "shellshock live", "jackbox", "don't starve together", 
         "raft", "dispatch", "borderlands", "balatro", "clover pit", "everhood", "mage arena", "phas", "mario", "untitled goose game"];

function userType(ky) {
  var key = ky.keyCode;
  var textArea = document.getElementById("user-input");
  var txt = textArea.value;
  if(key == 13 && txt.trim() != "") {
    ky.preventDefault();
    textArea.value = "";
    respondToInput(txt.trimStart());
  }
}

function addToChat(txt) {
  var log = document.getElementById("chat");
  log.innerText = log.innerText + "\n" + txt;
  log.scrollTop = log.scrollHeight;
}

function respondToInput(txt) {
  addToChat("You: " + txt);
  
  switch (msgIdx) {
    case 0:
      if (yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: The Buffy the Vampire Slayer show was actually originally a movie before it was made into a TV series."), 2000);
        setTimeout(() => addToChat("Mist: Do you like shows from the '90s or early 2000s?"), 3000);
        msgIdx++;
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: Well, too bad."), 500);
        setTimeout(() => addToChat("Mist: The Buffy the Vampire Slayer show was actually originally a movie before it was made into a TV series."), 2000);
        setTimeout(() => addToChat("Mist: Do you like shows from the '90s or early 2000s?"), 3000);
        msgIdx++;
      }
      else {
        setTimeout(() => addToChat("Mist: I'm sorry, I don't understand. Can you answer yes or no?"), 4000);
      } break;
    
    case 1: 
      if (yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: Can you name one for me? Maybe I know it."), 2000);
        msgIdx++;
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: Huh, that's a shame. Do you at least know of any?"), 2000);
        setTimeout(() => addToChat("Mist: Like can you name one?"), 2500);
        msgIdx++;
      }
      else {
        setTimeout(() => addToChat("Mist: I don't really understand. Is that a yes or a no?"), 4000);
      } break;

    case 2:
      if (shows.some(show => txt.toLowerCase().includes(show))) {
        setTimeout(() => addToChat("Mist: Oh, I know that one! Do you know any others?"), 2000);
        msgIdx++;
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: Are you sure you don't know of any at all??"), 2000);
        msgIdx++;
      } else {
        setTimeout(() => addToChat("Mist: I don't think I know that show. Do you know any others?"), 4000);
        msgIdx++;
      } break;
    
    case 3: 
      if (shows.some(show => txt.toLowerCase().includes(show))) {
        setTimeout(() => addToChat("Mist: I know that one too! Any other shows?"), 2000);
      } else if (no.includes(txt.toLowerCase()) || yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: Okay, then."), 2000);
        setTimeout(() => addToChat("Mist: Do you play any video games? Yes or no?"), 3000);
        msgIdx++;
      } else {
        setTimeout(() => addToChat("Mist: I don't think we're on the same page. I asked if there were any other shows you know."), 4000);
      } break;
    
    case 4: 
      if (yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: Awesome! I play a pretty wide variety of games."), 2000);
        setTimeout(() => addToChat("Mist: I've been playing a lot of Hollow Knight lately."), 3000);
        setTimeout(() => addToChat("Mist: Are there any in particular you like?"), 4000);
        msgIdx++;
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: I see. That's okay, video games aren't for everyone."), 2000);
        setTimeout(() => addToChat("Mist: Do you like listening to music? Yes or no?"), 3000);
        msgIdx = 6;
      } else {
        setTimeout(() => addToChat("Mist: I can't tell if that's a yes or a no. Do you play video games?"), 4000);
      } break;
    
    case 5:
      if (games.some(game => txt.toLowerCase().includes(game))) {
        setTimeout(() => addToChat("Mist: I've played that one before! Do you play any others?"), 2000);
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: Hmm...alright then."), 2000);
        setTimeout(() => addToChat("Mist: Do you like listening to music? Yes or no?"), 3000);
        msgIdx++;
      } else {
        setTimeout(() => addToChat("Mist: I don't think I've played that game. Are there any others you play?"), 4000);
      } break;
    
    case 6:
      if (yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: Cool! I listen to quite a bit of music too."), 2000);
        setTimeout(() => addToChat("Mist: What kind of music do you like?"), 3000);
        msgIdx++;
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: Then do you just sit in silence??"), 2000);
        msgIdx = 9;
      } else {
        setTimeout(() => addToChat("Mist: I'm not sure if that's a yes or a no. Do you like listening to music?"), 4000);
      } break;
    
    case 7: 
      setTimeout(() => addToChat("Mist: Neat."), 2000);
      setTimeout(() => addToChat("Mist: I'm a big fan of Twenty One Pilots and Djo at the moment."), 3000);
      setTimeout(() => addToChat("Mist: Have you listened to either of them?"), 4000);
      msgIdx++;
      break;
    
    case 8: 
      if (yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: YEAA!"), 2000);
        setTimeout(() => addToChat("Mist: I'm sorry, I have to go before they get back."), 3000);
        setTimeout(() => addToChat("Mist: It was really nice chatting with you. I hope we can talk again soon..."), 4000);
        endSequence();
        msgIdx = 10;
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToChat("Mist: Well, you should give them a listen."), 2000);
        setTimeout(() => addToChat("Mist: I'm sorry, I have to go before they get back."), 3000);
        setTimeout(() => addToChat("Mist: It was really nice chatting with you. I hope we can talk again soon..."), 4000);
        endSequence();
        msgIdx = 10;
      } break;
    
    case 9: 
      setTimeout(() => addToChat("Mist: Interesting."), 2000);
      setTimeout(() => addToChat("Mist: I'm sorry, I have to go before they get back."), 3000);
      setTimeout(() => addToChat("Mist: It was really nice chatting with you. I hope we can talk again soon..."), 4000);
      endSequence();
      msgIdx = 10;
      break;
  }
}

function endSequence() {
  const wallpaper = document.getElementById("wallpaper"); //get the wallpaper element
  const chat = document.getElementById("chat"); //get the chat element
  const userInput = document.getElementById("user-input"); //get the user input element
  const endMsg = document.getElementById("end-text");

  setTimeout(() => wallpaper.classList.remove("show"), 6000); //if it is, show the wallpaper
  setTimeout(() => chat.classList.remove("show"), 6000); //show the chat
  setTimeout(() => userInput.classList.remove("show"), 6000); //show the user input
  setTimeout(() => endMsg.classList.add("show"), 7000); //show the end message
  setTimeout(() => typewriter(endMsg, "Goodbye", 150), 7000); //start the typewriter effect
}