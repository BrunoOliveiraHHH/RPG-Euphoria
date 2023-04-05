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

function dificultEncounter() {
    let xp = document.getElementById('idXpTotalNvlEncounter');
    let NVL = document.getElementById('idNvlTotalEncounter');
    let QTDPLAYER = document.getElementById('idJogadoresNvlEncounter');

    // montando um objeto json
    let json = {
        xp,
        NVL,
        QTDPLAYER
    }

    //validando os campos
    if (json.xp.value.trim() == '') {
        alert('Favor preencher o campo "XP total com multiplicadores do encontro"')
    } else if (json.NVL.value.trim() == '') {
        alert('Favor preencher o campo "Total de jogadores participantes do encontro"')
    } else if (json.QTDPLAYER.value.trim() == '') {
        alert('Favor preencher o campo "Média do nível dos personagens dos jogadores participantes do encontro"')
    } else {

        let XP = parseInt(json.xp.value);
        let nvl = parseInt(json.NVL.value);
        let qntP = parseInt(json.QTDPLAYER.value);
        let facil;
        let medio;
        let dificil;
        let mortal;
        let dificuldade;

        let div = document.getElementById('totalEncounter');
        div.innerHTML = "";
        let h5 = document.createElement('h5');

        switch (nvl) {
            case 1:

                facil = qntP * 25;
                medio = qntP * 50;
                dificil = qntP * 75;
                mortal = qntP * 100;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 2:

                facil = qntP * 50;
                medio = qntP * 100;
                dificil = qntP * 150;
                mortal = qntP * 200;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 3:
                facil = qntP * 75;
                medio = qntP * 150;
                dificil = qntP * 225;
                mortal = qntP * 400;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 4:
                facil = qntP * 125;
                medio = qntP * 250;
                dificil = qntP * 375;
                mortal = qntP * 500;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 5:
                facil = qntP * 250;
                medio = qntP * 500;
                dificil = qntP * 750;
                mortal = qntP * 1100;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 6:
                facil = qntP * 300;
                medio = qntP * 600;
                dificil = qntP * 900;
                mortal = qntP * 1400;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 7:
                facil = qntP * 350;
                medio = qntP * 750;
                dificil = qntP * 1100;
                mortal = qntP * 1700;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 8:
                facil = qntP * 450;
                medio = qntP * 900;
                dificil = qntP * 1400;
                mortal = qntP * 2100;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 9:
                facil = qntP * 550;
                medio = qntP * 1100;
                dificil = qntP * 1600;
                mortal = qntP * 2400;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 10:
                facil = qntP * 600;
                medio = qntP * 1200;
                dificil = qntP * 1900;
                mortal = qntP * 2800;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 11:
                facil = qntP * 800;
                medio = qntP * 1600;
                dificil = qntP * 2400;
                mortal = qntP * 3600;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 12:
                facil = qntP * 1000;
                medio = qntP * 2000;
                dificil = qntP * 3000;
                mortal = qntP * 4500;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 13:
                facil = qntP * 1100;
                medio = qntP * 2200;
                dificil = qntP * 3400;
                mortal = qntP * 5100;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 14:
                facil = qntP * 1250;
                medio = qntP * 2500;
                dificil = qntP * 3800;
                mortal = qntP * 5700;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 15:
                facil = qntP * 1400;
                medio = qntP * 2800;
                dificil = qntP * 4300;
                mortal = qntP * 6400;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 16:
                facil = qntP * 1600;
                medio = qntP * 3200;
                dificil = qntP * 4800;
                mortal = qntP * 7200;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 17:
                facil = qntP * 2000;
                medio = qntP * 3900;
                dificil = qntP * 5900;
                mortal = qntP * 8800;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 18:
                facil = qntP * 2100;
                medio = qntP * 4200;
                dificil = qntP * 6300;
                mortal = qntP * 9500;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 19:
                facil = qntP * 2400;
                medio = qntP * 4900;
                dificil = qntP * 7300;
                mortal = qntP * 10900;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            case 20:
                facil = qntP * 2800;
                medio = qntP * 5700;
                dificil = qntP * 8500;
                mortal = qntP * 12700;

                if (XP <= facil) {
                    dificuldade = "Fácil";
                }
                else if (XP > facil & XP <= medio) {
                    dificuldade = "Médio";
                }
                else if (XP > medio & XP <= dificil) {
                    dificuldade = "Difícil";
                }
                else if (XP > dificil & XP <= mortal) {
                    dificuldade = "Mortal";
                }
                else {
                    dificuldade = "Impossível";
                }

                break;
            default:
                dificuldade = "";
                alert('Digite um valor entre 1 e 20 no campo "Média do nível dos personagens dos jogadores participantes do encontro"')

        }

        if (dificuldade.length > 0) {
            h5.innerHTML = dificuldade;
            div.append(h5);
        } else {
            div.innerHTML = dificuldade;
        }
    }

}