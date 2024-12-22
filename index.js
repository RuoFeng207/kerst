
let gebruikers_naam;
document.getElementById("bevestig").onclick=function(){
    gebruikers_naam=document.getElementById("naam").value;
    gebruikers_naam = gebruikers_naam.charAt(0).toUpperCase() + gebruikers_naam.slice(1);

    if (gebruikers_naam=="89HJ"){
        document.getElementById("welkom").textContent= "...facking Xmas"
        document.getElementById("bericht").innerHTML = `Hallo, Dion <br><br>IK wens jou een heel fijne kerst.<br>
        En een gelukkig nieuwjaar.<br><br>
        Ik heb speciaal voor jou een appart bericht gemaakt :)<br>
        Kerstige groet, <br><br>
        Ruo Feng `;

    } 
    
    else if (gebruikers_naam=="PG56"){
        document.getElementById("bericht").innerHTML =`Hey Quinten,<br>
        Ik wens je een fije kerst<br>
        En een gelukkig nieuwjaar<br><br>
        Maar dit moet natuurlijk korter kunen dus fijne kerst en  gelukkig nieuwjaar<br>
        korter! Oke<br>
        KERST. <br><br>
        Korte groet Ruo Feng`;}
    
    else if (gebruikers_naam=="3AI2"){
        document.getElementById("bericht").innerHTML =`Hey Joep,<br>
        Ik wens je een fije kerst<br>
        En een gelukkig nieuwjaar<br><br>
        En aangezien ik je nu 2 weken niet zie zeg ik het hier<br>
        Joep is Joep.<br>
        Tot 2025,<br><br>
        Ruo Feng  `;
    }

    else{
        document.getElementById("welkom").textContent=`Merry christmas, ${gebruikers_naam}!!!`
        document.getElementById("bericht").innerHTML = `Hallo, ${gebruikers_naam}<br><br>IK wens jou een heel fijne kerst.<br>
        En een gelukkig nieuwjaar.<br><br>
        Ik hoop dat al je wensen mogen uitkomen.<br><br>
        Kerstige groet, <br><br>
        Ruo Feng `;

    }
}

// achtergrond muziek
window.addEventListener("click", ()=>{
    document.getElementById("song").play();
})
