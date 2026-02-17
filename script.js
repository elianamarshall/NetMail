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
    const startMsg = document.getElementById("start-msg"); //get the start message element
    setTimeout(() => typewriter(startMsg, "Where am I?", 80), 3000); //start the typewriter effect after a 3-second delay
    setTimeout(() => startMsg.classList.add("hide"), 6000); //hide the start message
  });

document.addEventListener("click", () => { //add a click event listener
  const wallpaper = document.getElementById("wallpaper"); //get the wallpaper element
  const mailbox = document.getElementById("mailbox"); //get the mailbox element
  const mailMsg = document.getElementById("mail-msg"); //get the mail message element
  const chatLog = document.getElementById("chat-log"); //get the chat log element
  const userInput = document.getElementById("user-input"); //get the user input element
  
  if(getComputedStyle(mailbox).opacity == "1") { //check if the mailbox is currently visible
    setTimeout(() => wallpaper.classList.add("show"), 250); //if it is, show the wallpaper
    setTimeout(() => mailMsg.classList.add("hide"), 250); //hide the mail message
    setTimeout(() => mailbox.classList.add("hide"), 250); //hide the mailbox
    setTimeout(() => chatLog.classList.add("show"), 250); //show the chat log
    setTimeout(() => userInput.classList.add("show"), 250); //show the user input area
  }
});

msgIdx = 0; //index to track which message prompt to output

// ways for the user to indicate 'yes'
yes = ["yes", "y", "ye", "yea", "yeah", "yep", "sure", "ok", "okay", "why not", "of course", "absolutely", "definitely"];

//ways for the user to indicate 'no'
no = ["no", "n", "nope", "nah", "no thanks", "no way"];

//shows known
shows = ["buffy", "buffy the vampire slayer", "dawson's creek", "supernatural", "angel", "star trek", "doctor who", 
         "gilmore girls", "vampire diaries", "total drama", "merlin", "house", "futurama"];

//games played
games = ["minecraft", "the sims", "stardew valley", "animal crossing", "zelda", "pokemon", "mariokart", "roblox", "dead by daylight", 
         "lethal company", "peak", "repo", "r.e.p.o.", "terraria", "bg3", "baldur's gate 3", "celeste", "hollow knight", "overcooked", 
         "portal", "rv there yet", "it takes two", "split fiction", "human fall flat", "shellshock live", "jackbox", "don't starve together", 
         "raft", "dispatch", "borderlands", "balatro", "clover pit", "everhood", "mage arena", "phas", "mario", "untitled goose game"];

//function called whenever a key is pressed while the textarea is selected
function userType(ky) {
  var key = ky.keyCode; //code of the pressed key
  var textArea = document.getElementById("user-input"); //get the user input element
  var txt = textArea.value; //text inside of the textarea
  if(key == 13 && txt.trim() != "") { //check if 'Enter' is pressed and that the input string is not empty
    ky.preventDefault(); //prevent 'Enter' from adding a new line
    textArea.value = ""; //clear the textarea
    respondToInput(txt.trimStart()); //send the input to the response function
  }
}

//adds a new message to the chat log
function addToLog(txt) {
  var chatLog = document.getElementById("chat-log"); //get the chat log element
  chatLog.innerText = chatLog.innerText + "\n" + txt; //append the new message under all previous messages
  chatLog.scrollTop = chatLog.scrollHeight; //auto-scroll to the bottom so the newest message is always visible
}

//function to determine how the system (Mist) will respond based on the message index
function respondToInput(txt) {
  addToLog("You: " + txt); //add the user input to the chat log
  
  //branching dialogue options using switch-case statement
  switch (msgIdx) {
    case 0:
      if (yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: The Buffy the Vampire Slayer show was actually originally a movie before it was made into a TV series."), 2000);
        setTimeout(() => addToLog("Mist: Do you like shows from the '90s or early 2000s?"), 3000);
        msgIdx++;
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: Well, too bad."), 500);
        setTimeout(() => addToLog("Mist: The Buffy the Vampire Slayer show was actually originally a movie before it was made into a TV series."), 2000);
        setTimeout(() => addToLog("Mist: Do you like shows from the '90s or early 2000s?"), 3000);
        msgIdx++;
      }
      else {
        setTimeout(() => addToLog("Mist: I'm sorry, I don't understand. Can you answer yes or no?"), 4000);
      } break;
    
    case 1: 
      if (yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: Can you name one for me? Maybe I know it."), 2000);
        msgIdx++;
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: Huh, that's a shame. Do you at least know of any?"), 2000);
        setTimeout(() => addToLog("Mist: Like can you name one?"), 2500);
        msgIdx++;
      }
      else {
        setTimeout(() => addToLog("Mist: I don't really understand. Is that a yes or a no?"), 4000);
      } break;

    case 2:
      if (shows.some(show => txt.toLowerCase().includes(show))) {
        setTimeout(() => addToLog("Mist: Oh, I know that one! Can you name any others?"), 2000);
        msgIdx++;
      } else if (yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("What's the name of it?"), 2000);
        msgIdx++;
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: Are you sure you don't know of any at all??"), 2000);
        msgIdx++;
      } else {
        setTimeout(() => addToLog("Mist: I don't think I know that show. Can you name any others?"), 4000);
        msgIdx++;
      } break;
    
    case 3: 
      if (shows.some(show => txt.toLowerCase().includes(show))) {
        setTimeout(() => addToLog("Mist: I know that one too! Any other shows?"), 2000);
      } else if (no.includes(txt.toLowerCase()) || yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: Okay, then."), 2000);
        setTimeout(() => addToLog("Mist: Do you play any video games? Yes or no?"), 3000);
        msgIdx++;
      } else {
        setTimeout(() => addToLog("Mist: I haven't seen that one. Can you name any other shows?"), 4000);
      } break;
    
    case 4: 
      if (yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: Awesome! I play a pretty wide variety of games."), 2000);
        setTimeout(() => addToLog("Mist: I've been playing a lot of Hollow Knight lately."), 3000);
        setTimeout(() => addToLog("Mist: Are there any in particular you like?"), 4000);
        msgIdx++;
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: I see. That's okay, video games aren't for everyone."), 2000);
        setTimeout(() => addToLog("Mist: Do you like listening to music? Yes or no?"), 3000);
        msgIdx = 6;
      } else {
        setTimeout(() => addToLog("Mist: I can't tell if that's a yes or a no. Do you play video games?"), 4000);
      } break;
    
    case 5:
      if (games.some(game => txt.toLowerCase().includes(game))) {
        setTimeout(() => addToLog("Mist: I've played that one before! Do you play any others?"), 2000);
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: Hmm...alright then."), 2000);
        setTimeout(() => addToLog("Mist: Do you like listening to music? Yes or no?"), 3000);
        msgIdx++;
      } else {
        setTimeout(() => addToLog("Mist: I don't think I've played that game. Are there any others you play?"), 4000);
      } break;
    
    case 6:
      if (yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: Cool! I listen to quite a bit of music too."), 2000);
        setTimeout(() => addToLog("Mist: What kind of music do you like?"), 3000);
        msgIdx++;
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: Then do you just sit in silence??"), 2000);
        msgIdx = 9;
      } else {
        setTimeout(() => addToLog("Mist: I'm not sure if that's a yes or a no. Do you like listening to music?"), 4000);
      } break;
    
    case 7: 
      setTimeout(() => addToLog("Mist: Neat."), 2000);
      setTimeout(() => addToLog("Mist: I'm a big fan of Twenty One Pilots and Djo at the moment."), 3000);
      setTimeout(() => addToLog("Mist: Have you listened to either of them?"), 4000);
      msgIdx++;
      break;
    
    case 8: 
      if (yes.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: YEAA!"), 2000);
        setTimeout(() => addToLog("Mist: I'm sorry, I have to go before they get back."), 3000);
        setTimeout(() => addToLog("Mist: It was really nice chatting with you. I hope we can talk again soon..."), 4000);
        endSequence();
        msgIdx = 10;
      } else if (no.includes(txt.toLowerCase())) {
        setTimeout(() => addToLog("Mist: Well, you should give them a listen."), 2000);
        setTimeout(() => addToLog("Mist: I'm sorry, I have to go before they get back."), 3000);
        setTimeout(() => addToLog("Mist: It was really nice chatting with you. I hope we can talk again soon..."), 4000);
        endSequence();
        msgIdx = 10;
      } else {
        setTimeout(() => addToLog("Mist: I'm not sure I understand. Is that a yes or a no?"), 4000);
      } break;
    
    case 9: 
      setTimeout(() => addToLog("Mist: Interesting."), 2000);
      setTimeout(() => addToLog("Mist: I'm sorry, I have to go before they get back."), 3000);
      setTimeout(() => addToLog("Mist: It was really nice chatting with you. I hope we can talk again soon..."), 4000);
      endSequence();
      msgIdx = 10;
      break;
  }
}

//function to handle the ending animation sequence after the conversation finishes
function endSequence() {
  const wallpaper = document.getElementById("wallpaper"); //get the wallpaper element
  const chatLog = document.getElementById("chat-log"); //get the chat element
  const userInput = document.getElementById("user-input"); //get the user input element
  const endMsg = document.getElementById("end-msg"); //get the end message element

  setTimeout(() => wallpaper.classList.remove("show"), 8000); //hide the wallpaper
  setTimeout(() => chatLog.classList.remove("show"), 8000); //hide the chat log
  setTimeout(() => userInput.classList.remove("show"), 8000); //hide the user input textarea
  setTimeout(() => endMsg.classList.add("show"), 8000); //show the end message
  setTimeout(() => typewriter(endMsg, "Goodbye", 425), 9000); //start the typewriter effect on the end message
}
