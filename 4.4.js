let inputAr = ["Anthony Denis", "Axel Kirac", "Benoit Blaevoet", "Daniela Co", "Doriano Vanvolcksom", "Dylan Maurcot", "Eddy Vervoot", "Hazem Maddouri", "Julien Scourneau", "Julien Elinckx", "Kamilla Moraes", "Luca Friquet", "Quentin Macq", "Rinaldo Benaccetta", "Titouan Moussiaux", "Vincent Devilers", "Guillaume Baudson", "Sophie Gillard", "Sélim Elyahyioui", "Xavier Brigode", "Xavier Charles"];
/**Prend un nom aléatoire dans le tableau */ 
function randName() {
    let name = inputAr[Math.floor(Math.random()*inputAr.length)];
    return (name)
}
/**Prend un chiffre aléatoire entre 1 et le nombre max d'élément du tableau */ 
function randNum() {
    let number = Math.random() *inputAr.length + 1;
    return parseInt(number)
}

let arr = []
let n = randNum()

/**Prend un chiffre aléatoire (randNum) et va chercher dans le tableau autant de nom aléatoire (randName)   */
function multiName(n) {
    for (let i = 0; i < n; i++) {
        let b = randName()
        arr.push(b);
    }
    return arr
}

console.log (randNum())
console.log (multiName(n))