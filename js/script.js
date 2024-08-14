/* Costanti per i riferimenti agli elementi del DOM per una corretta costruzione degli elementi
   Le ho collegate alla classe container e alla classe counter per poter poi creare gli elementi tramite script */
   
const container = document.querySelector('.container')
const counter = document.querySelector('.counter')

/*Qui ho creato le costanti relative alla creazione degli elementi dell'app. Il "label" è il valore, i tre "button" sono 
  rispettivamente il pulsante più, meno e reset */

const counterValue = document.createElement('label')
counterValue.textContent = '0'
counter.appendChild(counterValue)
counterValue.setAttribute('class', 'counterValue')

const addButton = document.createElement('button')
addButton.textContent = '+'
container.appendChild(addButton)
addButton.setAttribute('class', 'addButton')

const minButton = document.createElement ('button')
minButton.textContent= '-'
container.appendChild(minButton)
minButton.setAttribute('class', 'minButton')

const resetButton = document.createElement('button')
resetButton.textContent = 'Reset'
container.appendChild(resetButton)
resetButton.setAttribute('class', 'resetButton')


/* Ho creato la variabile "count" che si collega al mio "counterValue" all'interno delle funzioni di crescita e 
  decrescita del valore. la funzione "minButton" contiene una istruzione if che permette di non far decrescere il valore sotto lo zero */


let count = 0;

/* Di seguito ho compilato le funzioni relative agli eventi che gestiscono il valore */

addButton.onclick = function() {
    count++;
    counterValue.textContent = count;
    animateCounter();  // Applica l'animazione
}


minButton.onclick = function() {
    if (count > 0){ /* istruzione che evita il valore negativo */
     count--;
     counterValue.textContent = count;
     animateCounter();  // Applica l'animazione
    }
     
 }

 
resetButton.onclick = function() {
    count = 0;
    counterValue.textContent = count;
    animateCounter();  // Applica l'animazione
 }

 /* Ho voluto implentare anche degli eventi che gestiscano l'input dei tre pulsanti anche tramite tastiera. 
    "+" e "-" - per gli operatori, "r" per il reset */


document.addEventListener('keydown', function(event) {
   if (event.key === '+') {
      count++;
      counterValue.textContent = count;
      } else if (event.key === '-') {
        if (count > 0) {
            count--;
            counterValue.textContent = count;
            }
      } else if (event.key.toLowerCase() === 'r') {
            count = 0;
            counterValue.textContent = count;
      }
});


/* Funzione relatviva all'animazione */

function animateCounter() {
   counterValue.classList.add('animate');
   
   setTimeout(function() {
       counterValue.classList.remove('animate');
   }, 300); 
}