let gebruikers_naam;
document.getElementById("bevestig").onclick=function(){
    gebruikers_naam=document.getElementById("naam").value;
    document.getElementById("welkom").textContent=`Merry christmas, ${gebruikers_naam}!!!`
}