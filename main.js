

function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return; // this will stop the function, won't show up anything in the console
  audio.currentTime = 0; // this rewind to the start allowing us to press and play the sound with our key
  audio.play();
  key.classList.add('playing');
  // key.classList.remove('playing');
  // key.classList.toggle('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);