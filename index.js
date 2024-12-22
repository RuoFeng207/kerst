
let gebruikers_naam;
document.getElementById("bevestig").onclick=function(){
    gebruikers_naam=document.getElementById("naam").value;
    document.getElementById("welkom").textContent=`Merry christmas, ${gebruikers_naam}!!!`
    document.getElementById("bericht").innerHTML = `Hallo, ${gebruikers_naam}<br><br>IK wens jou een heel fijne kerst.<br>
    En een gelukkig nieuwjaar.<br><br>
    Ik hoop dat al je wensen mogen uitkomen.<br><br>
    Kerstige groet, <br><br>
    Ruo Feng `;
}

// achtergrond muziek
window.addEventListener("click", ()=>{
    document.getElementById("song").play();
})
