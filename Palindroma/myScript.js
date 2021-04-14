/*Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma */

//acquisizione input 
var inputUtente = prompt("Inserisci una parola palindroma");
//l'utente può rispondere con una parola ma anche con un numero o può lasciare stringa vuota 


//capire se la parola inserita è palindroma o no 
function controlloInputPalindroma(str) {

    //controllo se l'utente non mi scrive nessuna parola e la trasformo in in stringa
    if(!str) {
        str = ""
    }
    //controllo se la parola scritta dall'utente è di tipo stringa? se non è di tipo stringa allora la converto con .toString()
    if(typeof str !== "string") {
        str = str.toString()
    }
    //lunghezza della parola?
    var testo = inputUtente.length

    //ciclo per controllare la parola 
    for (var i = 0; i < testo; i++) {

        //controllo se la prima e l'ultima lettera sono uguali
        if (inputUtente[i] !== inputUtente[testo - 1 - i] ) {
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


