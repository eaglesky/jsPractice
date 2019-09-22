var word = "bottles";
var count = 99;
while (count > 0) {
  console.log(count + " " + word + " of beer on the wall");
  console.log(count + " " + word + " of beer,");
  console.log("Take one down, pass it around,");
  count = count - 1;
  if (count > 0) {
    console.log(count + " " + word + " of beer on the wall.");
  } else {
    console.log("No more " + word + " of beer on the wall.");
  }
}
x = 3;
console.log("Hoisted x value: " + x);
var x = 44;
console.log("this.x = " + x)

let y;
y = 4;
console.log("Hoisted y value: " + y);
console.log("this.y = " + this.y)
