// ==UserScript==
// @name          Hangout swap user
// @description   it allows you to swap to your secondary Google account with no hassle.
// @author        Luca Lischetti <sirlisko@gmail.com>
// @namespace     https://github.com/sirlisko/hangout-swap-user/
// @include       https://hangouts.google.com/*
// @downloadURL   https://github.com/sirlisko/hangout-swap-user/raw/master/hangoutSwap.user.js
// @updateURL     https://github.com/sirlisko/hangout-swap-user/raw/master/hangoutSwap.user.js
// @version       0.1.0
// ==/UserScript==

(function () {
  function createSwapButton () {
    var btn = document.createElement('a')
    btn.classList.add('c-N-K', 'a-b', 'a-b-ga', 'a-b-U-Z')
    btn.setAttribute('href', window.location.href + '?authuser=1')
    btn.innerHTML = 'Swap User'
    document.querySelector('.d-Fa-uc-ra').appendChild(btn)
  }

  var attempt = 0
  var checkForError = setInterval(function () {
    if (document.body.innerHTML.includes('Error: HJR: 2-RNF')) {
      createSwapButton()
      clearInterval(checkForError)
    }
    attempt++ > 10 && clearInterval(checkForError)
  }, 1000)
})()
