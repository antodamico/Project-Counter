# Counter App ( S2I Project)

> Il mio progetto finale del corso di Javascript Basic

## Preview

![counter-app-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/060bae20-8128-4e0b-96e6-12faa2764dca)



# Indice
- Struttura del progetto
- Note Aggiornamenti
- Come trovarla  
- Autore  
- Ringraziamenti
  
## Struttura del progetto

Il counter è uno strumento che si presenta in un formato minimalista, utile per contare su e giù o per calcolare un numero. A differenza di un contatore automatico, questo è manuale e il valore viene impostato dall'utente stesso.
E' stato realizzato dinamicamente con Javascript.

- Creazione degli elementi del counter tramite manipolazione del DOM
- Interazione dinamica con i pulsanti anche tramite tastiera (+, -, r)
- Tasto reset che permette l'azzeramento immediato del contatore
- Istruzione che evita il valore negativo
- Animazione che si avvia ogni qualvolta il valore cambia

## Note Aggiornamenti

I seguenti aggionrnamenti sono stati apportati dietro consiglio del tutor Giacomo Maccanti, al quale vanno i miei ringraziamenti per la valutazione e correzione del mio progetto.

- Creazione di una funzione (riga 9) per la creazione degli elementi del DOM per snellire il codice ed evitare ripetizioni (riga 17 a 29)
![Screenshot (79)](https://github.com/user-attachments/assets/ad432e9e-ed0c-410d-990c-1d83ee1838b5)

- Implementazione di un unico "Event Listener" (riga 62 a 72) per la gestione dei pulsanti attraverso l'Event Delegation su un div wrapper. In questo modo il codice è in grado di 'ascoltare' e gestire diversi eventi e, in base a quello scelto dall'utente, agire di conseguenza.
![Screenshot (80)](https://github.com/user-attachments/assets/8aa96bd2-700e-4b0d-a800-10eac888f1c9)

- creazione della directory "assets" dove inserire le cartelle relative al progetto (css,js,img)

## Come trovarla

https://antodamico.github.io/Project-Counter/

## Autore

Antonio D'Amico

## Ringraziamenti

I miei ringraziamenti vanno alla community di Start2Impact, sempre attiva e disponibile, e ai tutor del corso Javascript Basics Francesco Borrelli, Giuseppe Scaramuzzino e Giacomo Maccanti
