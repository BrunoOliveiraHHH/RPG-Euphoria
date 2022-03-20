var cont = 0;
var data = [];
var edicao = false;


function calculaMulti() {

    let xpTotal = document.getElementById('idXpTotalEncounter');
    let monstersTotal = document.getElementById('idMonstersTotalEncounter');

    // montando um objeto json
    let json = {
        xpTotal,
        monstersTotal
    }

    //validando os campos
    if (json.xpTotal.value.trim() == '') {
        alert('Favor preencher o campo "XP total do encontro"')
    } else if (json.monstersTotal.value.trim() == '') {
        alert('Favor preencher o campo "Total de monstros do encontro"')
    } else {
        let xp = parseInt(json.xpTotal.value);
        let monster = parseInt(json.monstersTotal.value);

        if (monster <= 0) {
            alert('Favor colocar um valor acima de zero no campo "Total de monstros do encontro".');
            
        } else {
            if (monster == 1) {
                xp = xp;
            } else if (monster == 2) {
                xp = xp * 1.5;
            } else if (monster >= 3 && monster <= 6) {
                xp = xp * 2;
            } else if (monster >= 7 && monster <= 10) {
                xp = xp * 2.5;
            } else if (monster >= 11 && monster <= 14) {
                xp = xp * 3;
            } else if (monster >= 15) {
                xp = xp * 4;
            }

            let div = document.getElementById('totalXpEncounter');
            let h5 = document.createElement('h5');

            xpTotalValue = xp;

            h5.innerHTML = xpTotalValue;

            div.innerHTML = "";

            div.append(h5);
        }

    }
};

function dividXP() {

    let xpTotal = document.getElementById('idXpTotalMultiEncounter');
    let jogadoresTotal = document.getElementById('idJogadoresTotalEncounter');

    // montando um objeto json
    let json = {
        xpTotal,
        jogadoresTotal
    }

    //validando os campos
    if (json.xpTotal.value.trim() == '') {
        alert('Favor preencher o campo "XP total com multiplicadores do encontro"')
    } else if (json.jogadoresTotal.value.trim() == '') {
        alert('Favor preencher o campo "Total de jogadores participantes do encontro"')
    } else {
        let xp = parseInt(json.xpTotal.value);
        let jogadores = parseInt(json.jogadoresTotal.value);

        if (jogadores <= 0) {
            alert('Favor colocar um valor acima de zero no campo "Total de monstros do encontro".');
            
        } else {
            xp = xp / jogadores;
            
            xp = parseInt(xp, 10);

            let div = document.getElementById('totalPlayerXpEncounter');
            let h5 = document.createElement('h5');


            xpTotalValue = xp;

            h5.innerHTML = xpTotalValue;

            div.innerHTML = "";

            div.append(h5);
        }

    }
};