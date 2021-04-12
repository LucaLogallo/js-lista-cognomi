/* 
  VARIABILI
  arr = variabile contenente l'array di cognomi.
  j = indice per l'inserimento dell'array di cognomi da parte dell'utente
  i = variabile di lavoro
  cognomeU = cognome inserito dall'utente da aggiungere all'array già esistente 
  l = variabile di lavoro per lo scorrimento ed il salvataggio temporaneo dei valori in posizione i del vettore arr
  contenuto_precedente = variabile utilizzata per la stampa in una ol usata per concatenare le stringhe
*/

/* 
 PROCEDIMENTO
 -inizializzo array arr vuoto
 -inizializzo j
 -faccio inserire j all'utente e faccio un controllo con un postcondizionale in modo   che inserisca un numero >=1
 -faccio un ciclo for per inserire i cognomi nell'array arr
 -faccio inserire all'utente il nuovo cognome
 -lo inserisco nell'array attraverso un push
 -sovrascrivo l'array con il metodo dello stesso array sort in modo tale da ordinarlo in ordine alfabetico
 -faccio un ciclo for per scorrere l'array
 -inizializzo una nuova variabile l che userò per salvare il contenuto di arr in posizione i e che sovrascriverò ogni volta
 -condizione if
        SE(l === al cognome inserito dall'utente)
          ALLORA
            creo una nuova variabile contenuto_precedente = document.getelementbyId....
            stampo il cognome e la posizione in modo "umano"
            document.getElementById('cognomi').innerHTML = contenuto_precendente +"<li> il cognome utente che hai inserito: "+arr[i]+" si trova in posizione"+(i+1)+"</li>"; 

        ALTRIMENTI
          stampo solo il cognome dell'utente
          document.getElementById("cognomi").innerHTML = contenuto_precendente +"<li> Cognome utente: "+arr[i]+"</li>";
*/

var arr = [];
var j;

do{
  j = parseInt(prompt("inserire il numero di cognomi della lista"));
}while(j<1);

for(var i=0; i<j; i++){

  arr[i]= prompt("inserisci il cognome numero "+(i+1)+" della lista di "+j+" cognomi");

}

var cognomeU = prompt("inserisci il cognome da aggiungere nella lista di cognomi");

console.log(cognomeU);

console.log(arr);

arr.push(cognomeU);

console.log(arr);


arr = arr.sort();

console.log(arr);


for(i=0;i<j;i++){
  var l = arr[i];
  if(l === cognomeU){
    var contenuto_precendente = document.getElementById('cognomi').innerHTML;
    document.getElementById('cognomi').innerHTML = contenuto_precendente +"<li> il cognome utente che hai inserito: "+arr[i]+" si trova in posizione"+(i+1)+"</li>"; 
  }else{
    document.getElementById("cognomi").innerHTML = contenuto_precendente +"<li> Cognome utente: "+arr[i]+"</li>";
  }
}