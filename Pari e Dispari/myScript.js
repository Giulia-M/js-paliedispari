/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//acquisizione dati 
//l'utente sceglie pari o dispari
var wordInput = prompt("Scrivi pari o dispari");

//.toLowerCase trasforma in minuscolo la parola
wordInput = wordInput.toLowerCase()

//validazione dati: wordInput
if(wordInput === "pari" || wordInput === "dispari" ) {

    // step 2. l'utente scrive un numero tra 1 e 5. ParseInt() trasforma in numero 
    var numberInput = parseInt(prompt("scrivi un numero tra 1 e 5"));

    //validazione numeri 
    if(Number.isNaN(numberInput)) {
        alert("non hai inserito un numero")
    } else if (numberInput > 5 || numberInput < 1) {
        alert("hai inserito un numero minore di 1 o maggiore di 5")
    } else {
        //invoco la funzione per eseguire il codice e dichiarare chi ha vinto 
        pariDispari(numberInput, wordInput)
    }
} else {
    alert("non hai scritto correttamente pari o dispari")
}




//genero un numero random (sempre da 1 a 5) per il computer. 
function random() {
    //Math.random() restituisce un valore decimale da 0 a 1 nn compreso
    //Math.floor restituisce un numero tra 0 e 4 (con il +1 --> da 1 a 5)
    var nR = Math.floor(Math.random() * 5) + 1
    return nR
}


//numberInput = num 
//word = wordInput
//uso la funzione per: 
//1. fare la somma  (nR) numero generato dal computer  si deve sommare al numero che scrive l'utente (numberInput) 
//2. per capire chi ha vinto(se la somma dei due numeri è pari e l'utente ha scritto pari ha vinto l'utente)
function pariDispari(num, word) {
    var somma = random() + num
    console.log(somma)


    //controlli 
    //se la somma è pari e la parola dell'utente è pari 
    if (somma % 2 === 0 && word === "pari" ) {
        console.log("Hai vinto")

        return

    } else if(somma % 2 === 0 && word === "dispari") {
        //se la somma dei due numeri è pari e l'utente ha scritto dispari 
        console.log("Hai perso")
        return
    } else if (somma % 2 !== 0 && word === "pari") {
        //se la somma è dispari e l'utente ha scritto pari 
        console.log("Hai perso")
        return
    } else {
        //se la somma dei due numeri è dispari e l'utente ha scritto dispari 
        console.log("hai vinto")
        return
    }




}





