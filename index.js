const cats = [
"Milo",
"Otis",
"Garfield",
];

function destructivelyAppendCat(name){
cats.push (name);
return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat(name){
cats.shift();
return cats;
}
function appendCat(name){
  const copyofCats = cats.slice()
  copyofCats.push (name);
return copyofCats;
}
function prependCat(name){
 const copyofCats = [...cats];
 copyofCats. unshift (name)
return copyofCats;
}
function removeLastCat(name){
    const copyofCats = [...cats];
    copyofCats. pop (name)
   return copyofCats;
}
function removeFirstCat(name){
    const copyofCats = [...cats];
    copyofCats. shift (name)
   return copyofCats;
}
