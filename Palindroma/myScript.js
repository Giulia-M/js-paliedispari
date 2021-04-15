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


if (controlloInputPalindroma(inputUtente)) {
    console.log("la parola è palindroma") 

} else {
    console.log("la parola non è palindroma") 
}





//capire se la parola inserita è palindroma o no 
function controlloInputPalindroma(str) {

    
    //in memoria una nuova stringa
    var stringaInvertita = "";

    //ciclo per controllare la parola da destra verso sinistra
    for (var i = str.length - 1; i >= 0; i--) {

        //mi estrae i caratteri 
        stringaInvertita += str[i]
    }

    //controlla che la parola invertita è uguale alla parola originale cioè la parola che viene dal prompt "inputUtente" 
    //il return mi da vero o falso 
    return str === stringaInvertita

}



