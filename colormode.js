let actual = false
const colorMode = function () {
  const elem = document.getElementsByTagName('HTML')[0]
  if (!actual) {
    elem.style.colorScheme = 'light'
    elem.style.setProperty('--main-color', 'blue')
  } else {
    elem.style.colorScheme = 'dark'
  }
  actual = !actual
}
