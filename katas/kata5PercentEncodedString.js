const urlEncode = function(text) {
  let str = '';
  for(let i = 0; i < text.length; i++){
    if (text.charAt(i) === ' ') {
      str += "%20";
    } else {
      str += text.charAt(i);
    }
  }
  return str;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
