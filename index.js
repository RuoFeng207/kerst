
let gebruikers_naam;
document.getElementById("bevestig").onclick=function(){
    gebruikers_naam=document.getElementById("naam").value;
    document.getElementById("welkom").textContent=`Merry christmas, ${gebruikers_naam}!!!`
}

// achtergrond muziek
window.addEventListener("click", ()=>{
    document.getElementById("song").play();
})
