// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];
{
cats.length = 0
cats.push("Milo", "Otis", "Garfield");
}
function destructivelyAppendCat(Ralph){
    cats.push(Ralph);
}
{
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
}
function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}
{
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
{
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
{
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
}
function appendCat(Broom) {
    const cats = ["Milo", "Otis", "Garfield"]; 
    const copyOfCats = [...cats, Broom];
    return (copyOfCats)
}
{
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
}
function prependCat(Arnold) {
    const cats = ["Milo", "Otis", "Garfield"];
    const copyOfCats = [Arnold, ...cats];
    return (copyOfCats)
}
{
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
}
function removeLastCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    const copyOfCats = cats.slice(0, cats.length -1)
    return (copyOfCats);
}
{
    cats.length = 0
    cats.push("Milo", "Otis", "Garfield");
}
function removeFirstCat() {
    const cats = ["Milo", "Otis", "Garfield"];
    const copyOfCats = cats.slice(1);
    return (copyOfCats);

}



    
 