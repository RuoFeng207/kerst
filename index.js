
let gebruikers_naam;
document.getElementById("bevestig").onclick=function(){
    gebruikers_naam=document.getElementById("naam").value;
    gebruikers_naam = gebruikers_naam.charAt(0).toUpperCase() + gebruikers_naam.slice(1);

    if (gebruikers_naam=="89HJ"){
        document.getElementById("welkom").textContent= "...facking Xmas Dion"
        document.getElementById("bericht").innerHTML = `Hallo, Dion <br><br>IK wens jou een heel fijne kerst.<br>
        En een gelukkig nieuwjaar.<br><br>
        Ik heb speciaal voor jou een appart bericht gemaakt :)<br>
        tot volgend jaar!<br>
        Kerstige groet, <br><br>
        Ruo Feng `;

    } 
    
    else if (gebruikers_naam=="PG56"){
        document.getElementById("welkom").textContent=`Merry christmas, Quinten!!!`
        document.getElementById("bericht").innerHTML =`Hey Quinten,<br><br>
        Ik wens je een fije kerst<br>
        En een gelukkig nieuwjaar<br><br>
        Maar dit moet natuurlijk korter kunen dus fijne kerst en  gelukkig nieuwjaar<br>
        korter! Oke<br>
        KERST. <br><br>
        Korte groet Ruo Feng`;}
    
    else if (gebruikers_naam=="3AI2"){
        document.getElementById("welkom").textContent=`Merry christmas, Joep!!!`
        document.getElementById("bericht").innerHTML =`Hey Joep,<br><br>
        Ik wens je een fije kerst<br>
        En een gelukkig nieuwjaar<br><br>
        En aangezien ik je nu 2 weken niet zie zeg ik het hier<br>
        Joep is Joep.<br>
        Tot 2025,<br><br>
        Ruo Feng  `;
    }

    else if (gebruikers_naam=="71AL"){
        document.getElementById("welkom").textContent=`Merry christmas, Sebastiaan!!!`
        document.getElementById("bericht").innerHTML =`Hallo Sebastiaan,<br><br>
        Ik wens je een fijne kerst met je familie <br>
        En een gelukkig 2025<br><br>
        Ik hoop dat je een fijne tijd hebt daar.<br>
        Kerstige groet,<br><br>
        Ruo Feng`;
    }

    else if (gebruikers_naam=="40UY"){
        document.getElementById("welkom").textContent=`Merry christmas, Mike!!!`
        document.getElementById("bericht").innerHTML =`Hallo Mike,<br><br>
        Ik wens je een fijne kerst en een gelukkig nieuwjaar<br> 
        met je familie en vrienden.<br><br>
        Tot volgend jaar!<br>
        Kerstige groet,<br><br>
        Ruo Feng`;
    }

    else if (gebruikers_naam=="IR22"){
        document.getElementById("welkom").textContent=`Merry christmas, iedereen!!!`
        document.getElementById("bericht").innerHTML =`Hallo allemaal,<br><br>
        ik wens jullie een fijne kerst en een gelukkig nieuwjaar.<br>
        Hoe is het met jullie?<br> 
        Ik hoop goed, ik wilde dit speciaale bericht voor jullie achterlaten.<br><br>
        Met mij gaat het inidergeval goed.<br><br>
        Vriendelijke groet,<br>
        Ruo Feng`;
    }

    else if (gebruikers_naam=="9VE6"){
        document.getElementById("welkom").textContent=`Merry christmas, Pap !!!`
        document.getElementById("bericht").innerHTML =`Hallo papsie,<br><br>
        ik wens je een fijne kerst en een gelukkig nieuwjaar.<br>
        We gaan het heel leuk hebben vandaag,<br><br>
        Knufels
        
        Ruo Feng`;
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
