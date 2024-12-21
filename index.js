let gebruikers_naam;
let legeString = " "; // Dit is een spatie
document.getElementById("bevestig").onclick=function(){
    gebruikers_naam=document.getElementById("naam").value;
    document.getElementById("welkom").textContent=`Merry christmas, ${gebruikers_naam}!!!`
    document.getElementById("bericht").textContent=`Hallo, ${gebruikers_naam}
${legeString}
ik wens jou een heel fijne 
kerst.
${legeString}
En een gelukkig nieuwjaar.
${legeString}
Ik hoop dat al je wensen 
mogen uitkomen. 
kerstige groeten,
${legeString}
Ruo Feng   `
}

// achtergrond muziek
window.addEventListener("click", ()=>{
    document.getElementById("song").play();
})