let gebruikers_naam;
document.getElementById("bevestig").onclick=function(){
    gebruikers_naam=document.getElementById("naam").value;
    document.getElementById("welkom").textContent=`Merry christmas, ${gebruikers_naam}!!!`
    document.getElementById("bericht").textContent=`Hallo, ${gebruikers_naam}

ik wens jou een heel fijne 
kerst.

En een gelukkig nieuwjaar.

Ik hoop dat al je wensen 
mogen uitkomen. 
kerstige groeten,

Ruo Feng   `
}

// achtergrond muziek
window.addEventListener("click", ()=>{
    document.getElementById("song").play();
})