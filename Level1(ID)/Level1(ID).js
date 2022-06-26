const solution = id => {
  id = id.toLowerCase()
  id = removeInvalidChar(id)
  id = removeInvalidDots(id)

  if (!id) {
    id = 'a'
  }

  if (id.length > 15) {
    id = id.slice(0, 15)
  }

  id = removeInvalidDots(id)

  if (id.length < 3) {
    let lastChild = id.charAt(id.length - 1)

    do {
      id += lastChild
    }
    while (id.length === 2)
  }

  return id
}

const removeStrIndex = (str, index) => {
  let result = str.split('')
  result.splice(index, 1)

  return result.join('')
}

const removeInvalidChar = str => {
  for (let i = 0; i < str.length; i++) {
    if (!(
      str.charCodeAt(i) === 45 ||
      str.charCodeAt(i) === 46 ||
      str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57 ||
      str.charCodeAt(i) === 95 ||
      str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122
    )) {
      str = str.replace(str[i], '')
      i--
    }
  }

  return str
}

const removeInvalidDots = str => {
  do {
    str = str.replace('..', '.')
  }
  while (str.indexOf('..') > -1)

  if (str.startsWith('.')) {
    str = removeStrIndex(str, 0)
  }
  if (str.endsWith('.')) {
    str = removeStrIndex(str, str.length - 1)
  }

  return str
}
