var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
var kitty = "Ralph"
// Add your functions and code here
function destructivelyAppendKitten() {
  kittens.push(kitty);
  return kittens;
}

function destructivelyPrependKitten() {
  kittens.unshift(kitty);
  return kittens;
}
