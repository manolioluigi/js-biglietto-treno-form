let bottone, annulla, nome, km, eta, prezzoKm, etaSconto, prezzoFinale;

//bottone genera

bottone = document.getElementById("genera");
bottone.addEventListener(`click`, function(){

    //input
    nome = document.getElementById("nome").value;
    console.log(nome);
    km = document.getElementById("km").value;
    console.log(km);
    eta = document.getElementById("eta").value;
    console.log(eta);

    //operazioni
    prezzoKm = km * 0.21;
    console.log(prezzoKm);
    if (eta < 18){
        etaSconto = (prezzoKm / 100) * 20;
        console.log(etaSconto);
        prezzoFinale = prezzoKm - etaSconto;
        console.log(prezzoFinale);
    } else if (eta < 65){
        prezzoFinale = prezzoKm;
        console.log(prezzoFinale);
    } else {
        etaSconto = (prezzoKm / 100) * 40;
        console.log(etaSconto);
        prezzoFinale = prezzoKm - etaSconto;
        console.log(prezzoFinale);
    }
    prezzoFinale = prezzoFinale.toFixed(2);
    console.log(prezzoFinale);

    //stampe
    document.getElementById(`prezzo-biglietto`).innerHTML = prezzoFinale + "€";
    document.getElementById(`nome-passeggero`).innerHTML = nome;
    document.getElementById(`offerta`).innerHTML = "Biglietto Standard";
    document.getElementById(`carrozza`).innerHTML = "5";
    document.getElementById(`codice-cp`).innerHTML = "92911";
}
);


//pulsante annulla
annulla = document.getElementById("annulla");
annulla.addEventListener(`click`, function(){
    
    //stampe
    nome = document.getElementById('nome').value = '';
    eta = document.getElementById('eta').value = '';
    km = document.getElementById('km').value = '';

    document.getElementById(`prezzo-biglietto`).innerHTML = "";
    document.getElementById(`nome-passeggero`).innerHTML = "";
    document.getElementById(`offerta`).innerHTML = "";
    document.getElementById(`carrozza`).innerHTML =  "";
    document.getElementById(`codice-cp`).innerHTML =  "";

}
);
