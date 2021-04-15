/*
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
*/

/*Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma */

//acquisizione input 
var inputUtente = prompt("Inserisci una parola palindroma");
//l'utente può rispondere con una parola ma anche con un numero o può lasciare stringa vuota 


//capire se la parola inserita è palindroma o no 
function controlloInputPalindroma(str) {

    //controllo se l'utente non mi scrive nessuna parola e la trasformo in in stringa
    if (!str) {
        str = ""
    }
    //controllo se la parola scritta dall'utente è di tipo stringa? se non è di tipo stringa allora la converto con .toString()
    if (typeof str !== "string") {
        str = str.toString()
    }
    //lunghezza della parola?
    var testo = inputUtente.length

    //ciclo per controllare la parola 
    for (var i = 0; i < testo; i++) {

        //controllo se la prima e l'ultima lettera sono uguali
        if (inputUtente[i] !== inputUtente[testo - 1 - i]) {
            console.log(inputUtente[i])
            console.log(inputUtente[testo - 1 - i])
            return "la parola inserita non è palindroma"
        }

    }
    return "è una parola palindroma"
}

//invoca la funzione
var risultatoCheck = controlloInputPalindroma(inputUtente);

console.log(risultatoCheck);

