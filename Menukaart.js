var koffie = document.getElementById("koffie");

var thee = document.getElementById("thee");

var chocolademelk = document.getElementById("chocolademelk");


function calculate(){
    var koffieAantal = Number(koffie.value);
    var koffieTotaal = koffieAantal*prijzen[0];
    var theeAantal = Number(thee.value);
    var theeTotaal = theeAantal*prijzen[1];
    var chocolademelkAantal = Number(chocolademelk.value);
    var chocolademelkTotaal = chocolademelkAantal*prijzen[2];
    return koffieTotaal + theeTotaal + chocolademelkTotaal;
}

const prijzen = [2.50,1.50,3.00];
// array = meerdere dingen, boodschappenlijstje

var koop = document.getElementById("bestellen");
koop.addEventListener("click", function(event){
    event.preventDefault();
    var totaalBedrag = calculate();
    var bestelText = "Het te betalen bedrag is € " + totaalBedrag + ".";
    if(totaalBedrag >= 5) {
        bestelText = bestelText + "\nDit moet via pin voldaan worden.";
    } else{
        bestelText = bestelText + "\nDit moet contact voldaan worden.";
    }
    // alert(alertText);
    var totaalBedragElement = document.getElementById("totaal");
    totaalBedragElement.innerText = bestelText;
});

// \n = een enter
// met een for lus kun je ieder element in een array los behandelen