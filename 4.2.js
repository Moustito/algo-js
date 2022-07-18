/** Donne une chiffre aléatoire entre 1 et 10*/
function rand10() {
    
    let n = Math.random() * 10 + 1;
    return parseInt(n)
}

console.log("The number is " + rand10());