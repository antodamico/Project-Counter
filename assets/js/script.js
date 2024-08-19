/* Costanti per i riferimenti agli elementi del DOM per una corretta costruzione degli elementi
   Le ho collegate alla classe container e alla classe counter per poter poi creare gli elementi tramite script */
   
const container = document.querySelector('.container')
const counter = document.querySelector('.counter')

/* Dietro consiglio del tutor, ho provato a snellire il codice creando una funzione per la creazione degli elementi del DOM. */

function createElement(tagName, className, innerHTML = '') {
   const element = document.createElement(tagName);
   element.classList.add(className);
   element.innerHTML = innerHTML;
   return element;
}


/* Qui ho creato gli elementi per il contatore (+, -, reset) usando la nuova funzione */

const counterValue = createElement('label', 'counterValue', '0');
counter.appendChild(counterValue);

const addButton = createElement('button', 'addButton', '+');
container.appendChild(addButton);

const minButton = createElement('button', 'minButton', '-');
container.appendChild(minButton);

const resetButton = createElement('button', 'resetButton', 'Reset');
container.appendChild(resetButton);


/* Ho creato la variabile "count" che si collega al mio "counterValue" all'interno delle funzioni di crescita e 
  decrescita del valore. la funzione "minButton" contiene una istruzione if che permette di non far decrescere il valore sotto lo zero */


let count = 0;

/* Di seguito ho compilato le funzioni relative agli eventi che gestiscono il valore */

/* Ho creato una funzione che prima aggiorna il contatore ogni volta che 'count' cambia, e poi applica l'animazione  */

function updateCounter(newValue) {
   count = newValue;
   counterValue.textContent = count;
   animateCounter();  // Applica l'animazione che ho creato di seguito
}

/* Funzione relativa all'animazione */

function animateCounter() {
   counterValue.classList.add('animate');
   
   setTimeout(function() {
       counterValue.classList.remove('animate');
   }, 300); 
}

/* Qui ho aggiunto il mio Event Listener che si applica al mio div .container (elemento genitore dei miei pulsanti) e che gestisce
   gli eventi in base all'event target voluto dall'utente. */


container.addEventListener('click', function(event) {
   if (event.target.classList.contains('addButton')) {
       updateCounter(count + 1);
   } else if (event.target.classList.contains('minButton')) {  // L'event.target 'minButton' ha un if statement per evitare il valore negativo
       if (count > 0) {
           updateCounter(count - 1);
       }
   } else if (event.target.classList.contains('resetButton')) {
       updateCounter(0);
   }
});

 /* Ho voluto implementare anche degli eventi che gestiscano l'input dei tre pulsanti anche tramite tastiera. 
    "+" e "-" - per gli operatori, "r" per il reset */

container.addEventListener('keydown', function(event) {
   
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


