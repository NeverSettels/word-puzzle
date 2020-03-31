function takeVowels(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var temp = ''
  str = str.toLowerCase()
  for (var i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      temp += '-'
    } else {
      temp += str[i]
    }
  }
  return temp
}

console.log(takeVowels("hello? did it work"))