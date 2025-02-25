// 🏆 Snack 1
// Crea una funzione che somma due numeri.
// Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
// Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
// Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

// function somma(a, b) {
//     return a + b
// }

// console.log(somma(3, 4))

// const somma2 = function (a, b) {
//     return a + b
// }
// console.log(somma2(3, 3))


// const somma3 = (a, b) => {
//     return a + b
// }

// console.log(somma3(10, 3))

// // 🏆 Snack 2
// // Crea una arrow function che calcola il quadrato di un numero.
// // Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
// const quadrato = (num) => num ** 2
// console.log(quadrato(7))


// // 🏆 Snack 3
// // Crea una funzione eseguiOperazione
// // Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.


// function eseguioperazione(a, b, callback) {
//     return callback(a, b)
// }

// console.log(eseguioperazione(7, 7, somma))
// console.log(eseguioperazione(7, 23, somma))

// // 🏆 Snack 4
// // Crea un generatore di funzioni creaTimer
// // Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
// function creaTimer(time) {
//     return () => setTimeout(() => console.log('Tempo scaduto!'), time)
// }

// const timer = creaTimer(2000)
// timer()


// // 🏆 Snack 5
// // Crea una funzione stampaOgniSecondo con setInterval.
// // Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

// // Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.

// function stampaOgniSecondo(messaggio) {
//     const interval = setInterval(() => console.log(messaggio), 1000)
//     setTimeout(() => clearInterval(interval), 7000)

// }



// stampaOgniSecondo('stampami')
// // 🏆 Snack 6
// // Crea un contatore automatico con setInterval
// // Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
// function creaContatoreAutomatico(time) {
//     let conto = 0
//     return function () {
//         const interval = setInterval(() => (conto++, console.log(conto)), time)
//         setTimeout(() => clearInterval(interval), 10000)
//     }

// }
// const contatore = creaContatoreAutomatico(1000)
// contatore()
// // 🏆 Snack 7
// // Crea una funzione che ferma un timer dopo un certo tempo
// // Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
// function eseguiEferma(messaggio, avvio, stop) {
//     const interval = setInterval(() => {
//         console.log(messaggio)
//     }, avvio);
//     setTimeout(() => {
//         clearInterval(interval)
//     }, stop);
// }
// eseguiEferma('ciao', 2000, 8000)
// 🎯 Snack 8 (Bonus)
// Crea una funzione che simula un conto alla rovescia
// Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
// function contoAllaRovescia(num) {
//     let conto = num
//     const interval = setInterval(() => {
//         console.log(conto)
//         conto--

//     }, 1000);
//     setTimeout(() => {
//         clearInterval(interval)
//         console.log('tempo scaduto')
//     }, num * 1000);
// }

// contoAllaRovescia(10)

// 🎯 Snack 9 (Bonus)
// Creare una funzione che esegue una sequenza di operazioni con ritardi
// Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

// Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
const esempio1 = () => console.log('esempio 1')
const esempio2 = () => console.log('esempio 2')
const esempio3 = () => console.log('esempio 3')
function sequenzaOperazioni(arr, time) {
    let count = 0
    const interval = setInterval(() => {
        if (count >= arr.length) {
            clearInterval(interval);
            return;
        }
        arr[count]()
        count++
    }, time);


}


sequenzaOperazioni([esempio1, esempio2, esempio3], 1000)