
let gebruikers_naam;
document.getElementById("bevestig").onclick=function(){
    gebruikers_naam=document.getElementById("naam").value;
    gebruikers_naam = gebruikers_naam.charAt(0).toUpperCase() + gebruikers_naam.slice(1);

    if (gebruikers_naam=="89HJ"){
        document.getElementById("welkom").textContent= "Merry Facking Xmas Dion"
        document.getElementById("bericht").innerHTML = `Hallo, Dion <br><br>IK wens jou een heel fijne kerst.<br>
        En een gelukkig nieuwjaar.<br><br>
        zo als beloofd<br>
        Merry Facking Xmas Dion is alleen maar bij jouw :)<br><br>
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
        Knufels,<>
        
        Ruo Feng`;
    }
    
    else if (gebruikers_naam=="DS96"){
        document.getElementById("welkom").textContent=`Merry christmas, Mam !!!`
        document.getElementById("bericht").innerHTML =`Hey Mams,<br><br>
        ik wens je een fijne kerst en een gelukkig nieuwjaar.<br>
        We gaan het heel leuk hebben vandaag,<br><br>
        Knufels,<br>
        
        Ruo Feng`;
    }

    else if (gebruikers_naam=="O74W"){
        document.getElementById("welkom").textContent=`Merry christmas, Timo !!!`
        document.getElementById("bericht").innerHTML =`Hey Timo,<br><br>
        ik wens je een fijne kerst en een gelukkig nieuwjaar.<br>br>
        Ik weet dat ik je al een kaartje gestuurd heb maar ik vond het ook leuk je deze online kaart te geven.<br>
        Ik wens je ouders ook een fijne kerst.<br><br>
        Groetjes,
        
        Ruo Feng`;
    }

    else if (gebruikers_naam=="TH57"){
        document.getElementById("welkom").textContent=`Merry christmas, Lilly !!!`
        document.getElementById("bericht").innerHTML =`Hey Lilly,<br><br>
        ik wens je een fijne kerst en een gelukkig nieuwjaar.<br>br>
        Ik weet dat ik je al een kaartje gestuurd heb maar ik vond het ook leuk je deze online kaart te geven.<br>
        Ik wens je moeder en broertjes ook een fijne kerst.<br><br>
        Groetjes,
        
        Ruo Feng`;
    }

    else if (gebruikers_naam=="87EH"){
        document.getElementById("welkom").textContent=`Merry christmas, Hamid !!!`
        document.getElementById("bericht").innerHTML =`Hallo Hamid,<br><br>
        ik wens je fijne feestdagen en een gelukkig nieuwjaar.<br>br>
        Ik hoop dat het goed met je gaat.<br><br>
        Ik vond het leuk om jou ook deze persoonlijkere kaart te sturen.<br>
        Omdat jij m'n laatste buschafeur was op mijn oude school.<br>
        Vriendelijke groeten,
        
        Ruo Feng`;
    }

    else if (gebruikers_naam=="P54K"){
        document.getElementById("welkom").textContent=`Merry christmas, Menno !!!`
        document.getElementById("bericht").innerHTML =`Hey Menno,<br><br>
        ik wens je fijne kestdagen en een gelukkig nieuwjaar.<br><br>
        Ik hoop dat het goed met je gaat.<br><br>
        Ik dacht dat je het wel leuk zou vinden om een appart bericht te krijgen :)<br>
        En voor als je het weten wilt, deze website is geschreven in html, css en js.<br><br>
        Vriendelijke groet,<br><br>

        Ruo Feng`;
    }

    else if (gebruikers_naam==""){
        document.getElementById("welkom").textContent=`Merry christmas niemand !!!`
        document.getElementById("bericht").innerHTML =`Hey niemand,<br><br> 
        voer je naam in en druk op verstuur`
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
