function giocoDeiDadi(numeroTiri) {
    let punteggioGiocatore1 = 0;
    let punteggioGiocatore2 = 0;
    
    for (let i = 0; i < numeroTiri; i++)

    {

        
        const dadoGiocatore1 = Math.floor(Math.random() * 6) + 1;
        const dadoGiocatore2 = Math.floor(Math.random() * 6) + 1;
        
        punteggioGiocatore1 += dadoGiocatore1;
        punteggioGiocatore2 += dadoGiocatore2;
    }
    
    if (punteggioGiocatore1 > punteggioGiocatore2)

    {

        console.log("Giocatore 1 ha totalizzato più punti");
        
    }

    else if (punteggioGiocatore1 < punteggioGiocatore2)

    {

        console.log("Giocatore 2 ha totalizzato più punti");

    }

    else

    {
        console.log("Pareggio! Entrambi i giocatori hanno totalizzato lo stesso punteggio");

    }
}

// Esempio di utilizzo della funzione con 5 tiri
giocoDeiDadi(5);
