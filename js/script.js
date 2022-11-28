let bottone, km, età, prezzoKm, etàSconto, prezzoFinale;


bottone = document.getElementById("genera");
bottone.addEventListener(`click`, function(){
    km = document.getElementById("km").value;
    console.log(km);
    età = document.getElementById("età").value;
    console.log(età);
    prezzoKm = km * 0.21;
    console.log(prezzoKm);
    if (età < 18){
        etàSconto = (prezzoKm / 100) * 20;
        console.log(etàSconto);
        prezzoFinale = prezzoKm - etàSconto;
        console.log(prezzoFinale);
    } else if (età < 65){
        prezzoFinale = prezzoKm;
        console.log(prezzoFinale);
    } else {
        etàSconto = (prezzoKm / 100) * 40;
        console.log(etàSconto);
        prezzoFinale = prezzoKm - etàSconto;
        console.log(prezzoFinale);
    }
    prezzoFinale = prezzoFinale.toFixed(2);
    console.log(prezzoFinale);
    document.getElementById(`prezzo-biglietto`).innerHTML = prezzoFinale + "€";
}
);


    