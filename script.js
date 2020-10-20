/* const getSmileySquare = (emoji) => {
  console.log('getSmileySquare is executing...');
  let display = '';
  // creates a 3x3 square of a selected emoji
  for (let row = 0; row < 3; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      display += emoji;
    }
    display = display + '<br>';
  }

  // create the p tag
  const pTag = document.createElement('p');
  pTag.innerHTML = display;
  divTag2.innerHTML = '';
  divTag2.appendChild(pTag);
}; */

// Please declare functions and variables above where they are used.

console.log('yay!');

const emojiArray = ['😄', '😎', ' 😦'];

const emojiArray2 = ['✌', '😂', '😝', '😁', '😱', '👉', '🙌', '🍻', '🔥', '🌈', '☀', '🎈', '🌹', '💄', '🎀', '⚽', '🎾', '🏁', '😡', '👿', '🐻', '🐶', '🐬', '🐟', '🍀', '👀', '🚗', '🍎', '💝', '💙', '👌', '❤', '😍', '😉', '😓', '😳', '💪', '💩', '🍸', '🔑', '💖', '🌟', '🎉', '🌺', '🎶', '👠', '🏈', '⚾', '🏆', '👽', '💀', '🐵', '🐮', '🐩', '🐎', '💣', '👃', '👂', '🍓', '💘', '💜', '👊', '💋', '😘', '😜', '😵', '🙏', '👋', '🚽', '💃', '💎', '🚀', '🌙', '🎁', '⛄', '🌊', '⛵', '🏀', '🎱', '💰', '👶', '👸', '🐰', '🐷', '🐍', '🐫', '🔫', '👄', '🚲', '🍉', '💛', '💚'];

const alphabetToNum = (event) => {
    if (event.code === 'KeyA') {
        return 3;
    }
    if (event.code === 'KeyB') {
        return 5;
    }
};

//= ====== HELPER FUNCTIONS========

// create square emoji figure using loops
const pTag = document.createElement('p');
// this Div is for the buttons
const divTag = document.createElement('div');
// this div is for the square emojis (to help them disappear)
const divTag2 = document.createElement('div');
let chosenEmoji = 0;

const getOneEmoji = (emoji, clickEvent) => {
    divTag2.innerHTML = '';
    let display = '';
    display = emoji;
    chosenEmoji = display;
    pTag.innerHTML = display;
    divTag2.appendChild(pTag);
};

const getMultipleEmojis = (emoji, keyEvent) => {
    let display = '';
    display = emoji;

    // create the p tag

    divTag2.innerHTML = '';

    if (keyEvent.code === 'KeyA') {
        for (let i = 0; i < 3; i += 1) {
            display += emoji;
        }
    }
    if (keyEvent.code === 'KeyB') {
        for (let i = 0; i < 5; i += 1) {
            display += emoji;
        }
    }
    pTag.innerHTML = display;
    divTag2.appendChild(pTag);
};



// create a function to make a button 3 times
const mkButton = (emoji) => {
    const button = document.createElement('button');
    button.innerText = emoji;
    return button;
};

//= ======ACTUAL CODE=============

// make 3 buttons
for (let i = 0; i < emojiArray2.length; i += 1) {
    const emojiButton = mkButton(emojiArray2[i]);
    emojiButton.addEventListener('click', (clickEvent) => {
        getOneEmoji(emojiArray2[i], clickEvent);
        console.log(emojiArray2[i]);
    });

    divTag.appendChild(emojiButton);
}
document.body.addEventListener('keydown', (keyEvent) => {
    getMultipleEmojis(chosenEmoji, keyEvent);
    // console.log(emojiArray2[i]);
    console.log(keyEvent.code);
    console.log(chosenEmoji);
    // console.log(`i is ${i}`);
});
document.body.appendChild(divTag);
document.body.appendChild(divTag2);
