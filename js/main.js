
// IIFE => research on MDN (also called the module pattern)
(() => {
  // select all of the keyboard key graphics
  const keyGraphics = document.querySelectorAll('.key');

  // functions go in the middle

  // get the keycode so that we can match it to an audio element
  function catchKeyCode(event) {
    let key = event.keyCode
    // debugger;

    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      currentKey = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // if there's no matching audio element, then quit
    if (!audio) { return; }

    // animate the div that corresponds to the key we pressed
    currentKey.classList.add("playing");

    audio.currentTime = 0;
    audio.play();
  }

  // remove the playing class after the transition fires the first time
  function resetKey(event) {
    // debugger;
    if (event.propertyName === "transform") {
      this.classList.remove("playing");
    }
  }

  // event handling goes at the bottom
  keyGraphics.forEach(key => key.addEventListener("trainsitionend", resetKey));

  window.addEventListener("keyup", catchKeyCode);
})();
