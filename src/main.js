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
