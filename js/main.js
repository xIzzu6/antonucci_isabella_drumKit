
// IIFE => research on MDN (also called the module pattern)
(() => {
  // select all of the keyboard key graphics
  const keyGraphics = document.querySelectorAll('.key');

  // functions go in the middle

  // get the keycode so that we can match it to an audio element
  function catchKeyCode(e) {
    let key = event.keyCode
    // debugger;

    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    if (!audio) { return; }

    audio.play();
  }


  // event handling goes at the bottom
  // keyGraphics.forEach(key => key.addEventListener("keyup", catchKeyCode));

  window.addEventListener("keyup", catchKeyCode);
})();
