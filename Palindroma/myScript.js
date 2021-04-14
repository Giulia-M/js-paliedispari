
var inputUtente = prompt("inserisci una parola")
//CONTROLLO se la parola che l'utente mi ha scritto non sia un numero: perchè se è un numero allora c'è l'errore , e controllo che effettivamente mi abbia scritto qualcosa con (!inputUtente) e nn mi lascia lo spazio vuoto 
if (!Number.isNaN(parseInt(inputUtente)) || !inputUtente ) {
    alert("errore. Non hai scritto nessuna parola")
} else {
    //trasformo la parola dell'utente in minuscolo 
    inputUtente = inputUtente.toLowerCase()
    console.log(inputUtente)

    //invoco la funzione
    checkPalindrome(inputUtente)
}

function checkPalindrome(str){
    // con .SPLIT() mi trasforma la parola inputUtente in array poi con .REVERSE() mi inverte l'ordine leggendola da destra a sinistra, con .JOIN("") la riassemblo in un'unica parola 
    var reverse = str.split("").reverse().join("")
    //
    if(str === reverse) {
        console.log("la parola è palindroma")
        return 
    } else {
        console.log("la parola non è palindroma")
    }
}


