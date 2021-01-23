const colors = ["red", "pink", "magenta", "deeppink", "coral"];
// off-by-one? I dunno.
const randoItem = arr => arr[Math.floor(Math.random() * (arr.length-1))];
export function swap(){
  document.body.style.backgroundColor = randoItem(colors);
}
