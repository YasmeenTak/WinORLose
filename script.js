window.addEventListener('load', start);
var currentLevel = 15;
var time = 15;
var isPlaying;
var wordInput = document.querySelector('#word-input');
var click = document.querySelector('#click');
var currentWord = document.querySelector('#current-word');
var  timeDisplay = document.querySelector('#time');
var  message = document.querySelector('#message');
var seconds = document.querySelector('#seconds');
 var a = currentWord.length;
 var d =0;
var words =["Pneumonoultramicroscopicsilicovolcanoconiosis","Pseudopseudohypoparathyroidism",
"Incomprehensibilities" ,"Walaa Sbaih","Yasmeen Abu Kwaik ","Kareem Abdelwahed",
"Abdelrhman AbuSamhadana","Abdulrahmaan Hussein","Ahmed Azzam","Ahmed ELsaikalay","Ahmed Hilles","Ahmed Maher",
"Ahmed Tayseer","Akram Timraz",
"Anas Abdelwahed","Ayman Almanasra","Basma Alafifi",
"Doaa AbuJayyab","Eman Abu Waked","Fatima Abu Rashed","Israa AbuHarb","Neveen Khozondar",
"Razan Abu Ikmail","Safaa Safi","Yasmin Hillis","Maha Nbahin ","Tamara Almajali"];
function start() {
  seconds.innerHTML = 15;
  showWord(words);
  click.addEventListener('click', startMatch);
  setInterval(countdown, 1000);
  setInterval(checkStatus, 50);
}
function startMatch() {
  if (sameLength()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
  }
}
function sameLength() {
   d = parseInt(wordInput.value)
  if (d === a) {
    message.innerHTML = 'Correct';
    return true;
  } else {
    message.innerHTML = ' Try again';
    return false;
  }
}
function showWord(words) {
  var  randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randIndex];
   a = words[randIndex].length;
}
function countdown() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }
  timeDisplay.innerHTML = time;
}
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over';
  }
}