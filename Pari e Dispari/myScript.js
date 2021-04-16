/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//acquisizione dati 
//l'utente sceglie pari o dispari
var wordInput = prompt("Scrivi pari o dispari");

//.toLowerCase trasforma in minuscolo la parola
wordInput = wordInput.toLowerCase()
console.log(wordInput + " la parola scritta dall'utente")
//validazione dati: wordInput
if (wordInput === "pari" || wordInput === "dispari") {

    // step 2. l'utente scrive un numero tra 1 e 5. ParseInt() trasforma in numero 
    var numberInput = parseInt(prompt("scrivi un numero tra 1 e 5"));
    console.log(numberInput + " il numero scelto dall'utente")
    //validazione numeri 
    if (Number.isNaN(numberInput)) {
        alert("non hai inserito un numero")
    } else if (numberInput > 5 || numberInput < 1) {
        alert("hai inserito un numero minore di 1 o maggiore di 5")
    } else {
        //invoco la funzione per eseguire il codice e dichiarare chi ha vinto 
        var esitoPari = pariDispari(numberInput)


        if (isUserRight(esitoPari, wordInput)) {
            console.log("L'utente ha inserito " + wordInput + " L'esito è " + esitoPari + "Hai vinto.")
        } else {
            console.log("L'utente ha inserito " + wordInput + " L'esito è " + esitoPari + " Hai perso.")
        }
    }
} else {
    alert("non hai scritto correttamente pari o dispari")
}




//genero un numero random (sempre da 1 a 5) per il computer. 
function random() {
    //Math.random() restituisce un valore decimale da 0 a 1 nn compreso
    //Math.floor restituisce un numero tra 0 e 4 (con il +1 --> da 1 a 5)
    var nR = Math.floor(Math.random() * 5) + 1
    console.log(nR + " il numero random generato dal computer")
    return nR
}


//numberInput = num 
//word = wordInput
//uso la funzione per: 
//1. fare la somma  (nR) numero generato dal computer  si deve sommare al numero che scrive l'utente (numberInput) e capire se la somma è pari o dispari

function pariDispari(num) {
    var somma = random() + num
    console.log(somma + " è la somma dei due numeri")

    var esito;

    //controlli 
    //se la somma è pari e la parola dell'utente è pari 
    if (somma % 2 === 0) {
        esito = "pari"

    } else {
        esito = "dispari";
    }

    return esito

}

//2. per capire chi ha vinto(se la somma dei due numeri è pari e l'utente ha scritto pari ha vinto l'utente)
function isUserRight(esito, word) {

    if (esito === word) {
        return true
    }

    return false

}

