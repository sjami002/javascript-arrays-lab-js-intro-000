var kittens = ["Milo", "Otis", "Garfield"]; //define your array here
var kitty = "Ralph"
var kitty2 = "Bob"
// Add your functions and code here
function destructivelyAppendKitten() {
  kittens.push(kitty);
  return kittens;
}

function destructivelyPrependKitten() {
  kittens.unshift(kitty2);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop(kitty);
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.pop(kitty2);
  return kittens;
}
