// Html references.
let textInput = document.querySelector('#textInput');
let button = document.querySelector('#search-button');
let searchPage = document.querySelector('.sad-boy');
let songs = document.querySelector('#songs');
let searchResult = document.querySelector('#search-results-div');
let backButton = document.querySelector('#back');
let image = document.querySelector('#song-image');
let songLink = document.querySelector('#song-link');
let header = document.querySelector('h1');

// Main function.
button.onclick = function() {
  console.log(textInput.value);
  searchPage.style.display = "none";
  searchResult.style.display = 'block';
  songLink.innerHTML = 'Song link';
  //Minecraft.
  if (textInput.value === 'minecraft' || textInput.value === 'mine' || textInput.value === 'craft') {
    image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMpLFr3mqELih41xUzieU5W-cN6cB1R-UzJQ&usqp=CAU';
    songLink.href = 'https://www.youtube.com/watch?v=NwscKR1757k'//Image is not in yet.
  }
  else if (textInput.value === 'runescape' || textInput.value === 'rune' || textInput.value === 'scape') {
    image.src = 'images/runelogo.webp';
    songLink.href = 'https://www.google.com/search?q=runescape+songs&source=lmns&bih=649&biw=1366&hl=en&sa=X&ved=2ahUKEwiekZ7E88D9AhXaO0QIHdmhDgQQ0pQJKAB6BAgBEAI#fpstate=ive&vld=cid:f3042abf,vid:33aluIL_K3U';
  }// Image is not in yet.
  else if (textInput.value === 'pokemon') {
    image.src = '/images/pokemon_tower_battle.jpg';
    songLink.href = 'https://www.youtube.com/watch?v=JuYeHPFR3f0';
  }
  else if (textInput.value === 'Destiny 2 Beyond light') {
    image.src = '/images/Beyondlight.jpeg';
    songLink.href = 'https://www.youtube.com/watch?v=qBIJFTPPp-8';
  }
  else if (textInput.value === 'Destiny 2 Forsaken') {
    image.src = '/images/Forsaken.jpeg';
    songLink.href = 'https://www.youtube.com/watch?v=lTqNa4i7oNo';
  }
  else if (textInput.value === 'Destiny 2 Shadow keep') {
    image.src = '/images/Shadowkeep.jpeg';
    songLink.href = 'https://www.youtube.com/watch?v=398oA98hfMc';
  }
  else if (textInput.value === 'valorant') {
    image.src = '/images/valorant-title.jpeg';
    songLink.href = 'https://youtu.be/BDVAJshu-6M';
  }
  else if (textInput.value === 'overwatch') {
    image.src = '/images/overwatch-title.jpeg';
    songLink.href = 'https://youtu.be/O5FsjHRIVrc';
  }
  else {
    image.src = 'images/error.jpeg';
    songLink.innerHTML = 'Go back to home page.';
    songLink.href = "index.html";
  }

};

backButton.onclick = function() {
  searchResult.style.display = "none";
  searchPage.style.display = "block";
};

