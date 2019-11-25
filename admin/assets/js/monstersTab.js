var choice = document.getElementById('choice');
var tab = document.getElementById('tab');


document.querySelector('#btn-submit').addEventListener('click', e => {

    choiceValue = parseInt(choice.value);

    if (choiceValue == 0) {
        clear();
    } else if (choiceValue == 1) {
        artic();
    } else if (choiceValue == 2) {
        hill();
    } else if (choiceValue == 3) {
        coast();
    } else if (choiceValue == 4) {
        desert();
    } else if (choiceValue == 5) {
        forest();
    } else if (choiceValue == 6) {
        mountain();
    } else if (choiceValue == 7) {
        swamp();
    } else if (choiceValue == 8) {
        plains();
    } else if (choiceValue == 9) {
        underwater();
    } else if (choiceValue == 10) {
        underground();
    } else if (choiceValue == 11) {
        urban();
    }

});

function clear() {
    tab.innerHTML = '';
}

function artic() {
    var template = `<div class="card" id="card">
        <div class="card-title">MONSTROS DO ÁRTICO</div>
        <table>
        <thead>
        <tr>
            <td class="monster">Monstros</td>
            <td class="lvl">Nível de Desafio (XP)</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="monster">Plebeu, coruja</td>
            <td class="lvl">0 (10 XP)</td>
        </tr>
        <tr>
            <td class="monster">Bandido, falcão de sangue, kobold, guerreiro tribal</td>
            <td class="lvl">1/8 (25 XP)</td>
        </tr>
        <tr>
            <td class="monster">Coruja gigante, kobold alado</td>
            <td class="lvl">1/4 (50 PX)</td>
        </tr>
        <tr>
            <td class="monster">Mephit do gelo, orc, batedor</td>
            <td class="lvl">1/2 (100 XP)</td>
        </tr>
        <tr>
            <td class="monster">Meio-ogro, urso marrom</td>
            <td class="lvl">1 (200 XP)</td>
        </tr>
        <tr>
            <td class="monster">Capitão dos bandidos, furioso, druida, grifo, ogro, orc Olho de Gruumsh, orog, urso polar, tigre dente de bengala</td>
            <td class="lvl">2 (450 XP)</td>
        </tr>
        <tr>
            <td class="monster">Manticora, veterano, lobo invernal, yeti</td>
            <td class="lvl">3 (700 XP)</td>
        </tr>
        <tr>
            <td class="monster">Ressurgido, troll, homem-urso, remorhaz jovem</td>
            <td class="lvl">5 (1.800 XP)</td>
        </tr>
        <tr>
            <td class="monster">Mamute, dragão branco jovem</td>
            <td class="lvl">6 (2.300 XP)</td>
        </tr>
        <tr>
            <td class="monster">Gigante do gelo</td>
            <td class="lvl">8 (3.900 XP)</td>
        </tr>
        <tr>
            <td class="monster">Yeti abominável</td>
            <td class="lvl">9 (5.000 XP)</td>
        </tr>
        <tr>
            <td class="monster">Remorhaz, roca</td>
            <td class="lvl">11 (7.200 XP)</td>
        </tr>
        <tr>
            <td class="monster">Dragão branco adulto</td>
            <td class="lvl">13 (10.000 XP)</td>
        </tr>
        <tr>
            <td class="monster">Dragão branco ancião</td>
            <td class="lvl">20 (25.000 XP)
            </td>
        </tr>
        </tbody>
        </table>
        </div>`;
    tab.innerHTML = template;
};

function hill() {
    var template = `<div class="card" id="card">
    <div class="card-title">MONSTROS DA COLINA</div>
    <table>
        <thead>
            <tr>
                <td class="monster">Monstros</td>
                <td class="lvl">Nível de Desafio (XP)</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="monster">Babuíno, plebeu, águia, bode, hiena, corvo, abutre</td>
                <td class="lvl">0 (10 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bandido, falcão de sangue, arminho gigante, guarda, kobold, mastim, mula, serpente venenosa, stirge, guerreiro tribal
                </td>
                <td class="lvl">1/8 (25 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bico de machado, javali, alce, coruja gigante, aranha-lobo gigante, goblin, pantera (puma), psedodargão, enxame de morcegos, enxame de corvos, kobold alado, lobo</td>
                <td class="lvl">1/4 (50 PX)</td>
            </tr>
            <tr>
                <td class="monster">Bode gigante, gnoll, hobgoblin, orc, batedor, enxame de insetos, worg</td>
                <td class="lvl">1/2 (100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Urso marrom, lobo atroz, águia gigante, hiena gigante, chefe goblin, meio-ogro, harpia, hipogrifo, leão</td>
                <td class="lvl">1 (200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Capitão dos bandidos, furioso, druida, javali gigante, alce gigante, gnoll líder de matilha, grifo, ogro, orc Olho de Gruumsh, orog, Pégaso, peryton</td>
                <td class="lvl">2 (450 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bruxa verde, capitão hobgoblin, manticora, aranha interplanar, veterano, lobisomem
                </td>
                <td class="lvl">3 (700 XP)</td>
            </tr>
            <tr>
                <td class="monster">Ettin, gnoll presa de Yeenoghu, homemjavali</td>
                <td class="lvl">4 (1.100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bulette, gorgon, gigante da colina, ressurgido, troll, homem-urso</td>
                <td class="lvl">5 (1.800 XP)</td>
            </tr>
            <tr>
                <td class="monster">Quimera, ciclope, galeb duhr, wyvern</td>
                <td class="lvl">6 (2.300 XP)</td>
            </tr>
            <tr>
                <td class="monster">Gigante de pedra, dragão de cobre jovem</td>
                <td class="lvl">7 (2.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão vermelho jovem</td>
                <td class="lvl">10 (5.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Roca</td>
                <td class="lvl">11 (7.200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de cobre adulto </td>
                <td class="lvl">14 (11.500 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão vermelho adulto</td>
                <td class="lvl">17 (18.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de cobre ancião</td>
                <td class="lvl">21 (33.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão vermelho ancião </td>
                <td class="lvl">24 (62.000 XP)</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function coast() {
    var template = `<div class="card" id="card">
    <div class="card-title">MONSTROS DA COSTA</div>
    <table>
        <thead>
            <tr>
                <td class="monster">Monstros</td>
                <td class="lvl">Nível de Desafio (XP)</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="monster">Plebeu, águia, caranguejo</td>
                <td class="lvl">0 (10 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bandido, falcão de sangue, caranguejo gigante, guarda, kobold, povo do mar, serpente venenosa, stirge, guerreiro tribal
                </td>
                <td class="lvl">1/8 (25 XP)</td>
            </tr>
            <tr>
                <td class="monster">Lagarto gigante, aranha-lobo gigante, pseudodragão, pteranodonte, kobold alado
                </td>
                <td class="lvl">1/4 (50 PX)</td>
            </tr>
            <tr>
                <td class="monster">Sahuagin, batedor</td>
                <td class="lvl">1/2 (100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Águia gigante, sapo gigante, harpia </td>
                <td class="lvl">1 (200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Capitão dos bandidos, furioso, druida, grifo, ogro, merrow, plesiossauro, sacerdotisa sahuagin, bruxa do mar</td>
                <td class="lvl">2 (450 XP)</td>
            </tr>
            <tr>
                <td class="monster">Manticora, veterano</td>
                <td class="lvl">3 (700 XP)</td>
            </tr>
            <tr>
                <td class="monster">Banshee</td>
                <td class="lvl">4 (1.100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Barão sahuagin, elemental da água</td>
                <td class="lvl">5 (1.800 XP)</td>
            </tr>
            <tr>
                <td class="monster">Ciclope</td>
                <td class="lvl">6 (2.300 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de bronze jovem</td>
                <td class="lvl">8 (3.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão azul jovem</td>
                <td class="lvl">9 (5.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Djinni, marid, roca</td>
                <td class="lvl">11 (7.200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Gigante da tempestade </td>
                <td class="lvl">13 (10.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de bronze adulto</td>
                <td class="lvl">15 (13.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão azul adulto</td>
                <td class="lvl">16 (15.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Tartaruga-dragão</td>
                <td class="lvl">17 (18.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de bronze ancião</td>
                <td class="lvl">22 (41.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão azul ancião</td>
                <td class="lvl">23 (50.000 XP)</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function desert() {
    var template = `<div class="card" id="card">
    <div class="card-title">MONSTROS DA DESERTO</div>
    <table>
        <thead>
            <tr>
                <td class="monster">Monstros</td>
                <td class="lvl">Nível de Desafio (XP)</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="monster">Gato, plebeu, hiena, chacal, escorpião, abutre
                </td>
                <td class="lvl">0 (10 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bandido, camelo, cobra voadora, guarda, kobold, mula, serpente venenosa, stirge, guerreiro tribal
                </td>
                <td class="lvl">1/8 (25 XP)</td>
            </tr>
            <tr>
                <td class="monster">Cobra constritora, lagarto gigante, serpente venenosa gigante, aranha-lobo gigante, pseudodragão, kobold alado
                </td>
                <td class="lvl">1/4 (50 PX)</td>
            </tr>
            <tr>
                <td class="monster">Mephit da poeira, gnoll, hobgoblin, homem-chacal, batedor, enxame de insetos</td>
                <td class="lvl">1/2 (100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Cão da morte, hiena gigante, aranha gigante, sapo gigante, abutre gigante, meioogro, leão, thri-kreen, yuan-ti puro-sangue</td>
                <td class="lvl">1 (200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Capitão dos bandidos, furioso, druida, cobra constritora gigante, gnoll líder de matilha, ogro</td>
                <td class="lvl">2 (450 XP)</td>
            </tr>
            <tr>
                <td class="monster">Escorpião gigante, hobgoblin capitão, múmia, aranha interplanar, inumano, yuan-ti mestiço</td>
                <td class="lvl">3 (700 XP)</td>
            </tr>
            <tr>
                <td class="monster">Couatl, gnoll presa de Yeenoghu, lâmia, homem-tigre
                </td>
                <td class="lvl">4 (1.100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Elemental do ar, elemental do fogo, ressurgido
                </td>
                <td class="lvl">5 (1.800 XP)</td>
            </tr>
            <tr>
                <td class="monster">Ciclope, medusa, dragão de latão jovem</td>
                <td class="lvl">6 (2.300 XP)</td>
            </tr>
            <tr>
                <td class="monster">Yuan-ti, abominação</td>
                <td class="lvl">7 (2.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão azul jovem</td>
                <td class="lvl">9 (5.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Naga guardiã</td>
                <td class="lvl">10 (5.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Efreeti, ginoesfinge, roca</td>
                <td class="lvl">11 (7.200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de latão adulto</td>
                <td class="lvl">13 (10.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Senhor das múmias, verme púrpura</td>
                <td class="lvl">15 (13.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão azul adulto</td>
                <td class="lvl">16 (15.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dracolich azul adulto, androesfinge</td>
                <td class="lvl">17 (18.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de latão ancião</td>
                <td class="lvl">20 (25.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão azul ancião</td>
                <td class="lvl">23 (50.000 XP)</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function forest() {
    var template = `<div class="card" id="card">
    <div class="card-title">MONSTROS DA FLORESTA</div>
    <table>
        <thead>
            <tr>
                <td class="monster">Monstros</td>
                <td class="lvl">Nível de Desafio (XP)</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="monster">Arbusto desperto, babuíno, texugo, gato, plebeu, veado, hiena, coruja</td>
                <td class="lvl">0 (10 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bandido, falcão de sangue, cobra voadora, rato gigante, arminho gigante, guarda, kobold, mastim, serpente venenosa, stirge, guerreiro tribal, galho infectado</td>
                <td class="lvl">1/8 (25 XP)</td>
            </tr>
            <tr>
                <td class="monster">Cão teleportador, javali, cobra constritora, alce, texugo gigante, morcego gigante, rã gigante, lagarto gigante, coruja gigante, serpente venenosa gigante, aranha-lobo gigante, goblin, kenku, espeto infectado, pantera, pixie, pseudodragão,
                    Sprite, enxame de corvos, kobold alado, lobo</td>
                <td class="lvl">1/4 (50 PX)</td>
            </tr>
            <tr>
                <td class="monster">Gorila, urso negro, vespa gigante, gnoll, hobgoblin, povo lagarto, orc, sátiro, batedor, enxame de insetos, vinha infectada, worg</td>
                <td class="lvl">1/2 (100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Urso marrom, bugbear, lobo atroz, dríade, dragão-fada (amarelo ou mais jovem), hiena gigante, aranha gigante, sapo gigante, chefe goblin, meio-ogro, harpia, tigre, yuan-ti puro-sangue</td>
                <td class="lvl">1 (200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Ankheg, árvore desperta, capitão dos bandidos, furioso, centauro, druida, ettercap, dragão-fada (verde ou mais velho), javali gigante, cobra constritora gigante, alce gigante, gnoll líder de matilha, grick, xamã do povo lagarto,
                    ogro, orc Olho de Gruumsh, orog, pégaso, enxame de serpentes venenosas, homemrato, fogo-fátuo</td>
                <td class="lvl">2 (450 XP)</td>
            </tr>
            <tr>
                <td class="monster">Pantera deslocadora, bruxa verde, capitão hobgoblin, urso-coruja, aranha interplanar, veterano, lobisomem, yuan-ti mestiço
                </td>
                <td class="lvl">3 (700 XP)</td>
            </tr>
            <tr>
                <td class="monster">Banshee, couatl, gnoll presa de Yeenoghu, homem-javali, homem-tigre
                </td>
                <td class="lvl">4 (1.100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Gorgon, ressurgido, arbusto errante, troll, unicórnio, homem-urso</td>
                <td class="lvl">5 (1.800 XP)</td>
            </tr>
            <tr>
                <td class="monster">Gorila gigante, grick alfa, oni, yuan-ti abominação
                </td>
                <td class="lvl">7 (2.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão azul jovem</td>
                <td class="lvl">9 (5.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão verde jovem</td>
                <td class="lvl">8 (3.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Ente</td>
                <td class="lvl">9 (5.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Naga guardiã, dragão de ouro jovem</td>
                <td class="lvl">10 (5.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão verde adulto</td>
                <td class="lvl">15 (13.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de ouro adulto</td>
                <td class="lvl">17 (18.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão verde ancião</td>
                <td class="lvl">22 (41.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de ouro ancião</td>
                <td class="lvl">24 (62.000 XP)</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function mountain() {
    var template = `<div class="card" id="card">
    <div class="card-title">MONSTROS DA MONTANHA</div>
    <table>
        <thead>
            <tr>
                <td class="monster">Monstros</td>
                <td class="lvl">Nível de Desafio (XP)</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="monster">Águia, bode</td>
                <td class="lvl">0 (10 XP)</td>
            </tr>
            <tr>
                <td class="monster">Falcão de sangue, guarda, kobold, stirge, guerreiro tribal</td>
                <td class="lvl">1/8 (25 XP)</td>
            </tr>
            <tr>
                <td class="monster">Aarakocra, pseudodragão, pteranodonte, enxame de morcegos, kobold alado</td>
                <td class="lvl">1/4 (50 PX)</td>
            </tr>
            <tr>
                <td class="monster">Bode gigante, orc, batedor</td>
                <td class="lvl">1/2 (100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Águia gigante, meio-ogro, harpia, hipogrifo, leão</td>
                <td class="lvl">1 (200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Furioso, druida, alce gigante, grifo, ogro, orc Olho de Gruumsh, orog, peryton, tigre dentes-de-sabre
                </td>
                <td class="lvl">2 (450 XP)</td>
            </tr>
            <tr>
                <td class="monster">Basilisco, cão infernal, manticora, veterano
                </td>
                <td class="lvl">3 (700 XP)</td>
            </tr>
            <tr>
                <td class="monster">Ettin </td>
                <td class="lvl">4 (1.100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Elemental do ar, bulette, troll</td>
                <td class="lvl">5 (1.800 XP)</td>
            </tr>
            <tr>
                <td class="monster">Quimera, ciclope, galeb duhr, wyvern</td>
                <td class="lvl">6 (2.300 XP)</td>
            </tr>
            <tr>
                <td class="monster">Gigante de pedra </td>
                <td class="lvl">7 (2.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Gigante do gelo </td>
                <td class="lvl">8 (3.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Gigante das nuvens, gigante do fogo, dragão de prata jovem</td>
                <td class="lvl">9 (5.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão vermelho jovem</td>
                <td class="lvl">10 (5.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Roca</td>
                <td class="lvl">11 (7.200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de prata adulto </td>
                <td class="lvl">16 (15.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão vermelho adulto</td>
                <td class="lvl">17 (18.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de prata ancião</td>
                <td class="lvl">23 (50.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão vermelho ancião</td>
                <td class="lvl">24 (62.000 XP)</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function swamp() {
    var template = `<div class="card" id="card">
    <div class="card-title">MONSTROS DA PÂNTANO</div>
    <table>
        <thead>
            <tr>
                <td class="monster">Monstros</td>
                <td class="lvl">Nível de Desafio (XP)</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="monster">Rato, corvo</td>
                <td class="lvl">0 (10 XP)</td>
            </tr>
            <tr>
                <td class="monster">Rato gigante, kobold, serpente venenosa, stirge, guerreiro tribal</td>
                <td class="lvl">1/8 (25 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bullywug, cobra constritora, rã gigante, lagarto gigante, serpente venenosa gigante, mephit da lama, enxame de ratos, enxame de corvos, kobold alado</td>
                <td class="lvl">1/4 (50 PX)</td>
            </tr>
            <tr>
                <td class="monster">Crocodilo, povo lagarto, orc, batedor, enxame de insetos</td>
                <td class="lvl">1/2 (100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Carniçal, aranha gigante, sapo gigante, yuan-ti puro-sangue</td>
                <td class="lvl">1 (200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Druida, lívido, cobra constritora gigante, xamã do povo lagarto, ogro, orc Olho de Gruumsh, enxame de serpentes venenosas, fogo-fátuo</td>
                <td class="lvl">2 (450 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bruxa verde, inumano, yuan-ti mestiço</td>
                <td class="lvl">3 (700 XP)</td>
            </tr>
            <tr>
                <td class="monster">Crocodilo gigante, ressurgido, arbusto errante, troll, elemental da água</td>
                <td class="lvl">5 (1.800 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão negro jovem, yuan-ti, abominação</td>
                <td class="lvl">7 (2.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Hidra</td>
                <td class="lvl">8 (3.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão negro adulto</td>
                <td class="lvl">14 (11.500 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão negro ancião</td>
                <td class="lvl">21 (33.000 XP)</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function plains() {
    var template = `<div class="card" id="card">
    <div class="card-title">MONSTROS DA PLANÍCIE</div>
    <table>
        <thead>
            <tr>
                <td class="monster">Monstros</td>
                <td class="lvl">Nível de Desafio (XP)</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="monster">Gato, plebeu, veado, águia, bode, hiena, chacal, abutre</td>
                <td class="lvl">0 (10 XP)</td>
            </tr>
            <tr>
                <td class="monster">Falcão de sangue, cobra voadora, arminho gigante, guarda, serpente venenosa, stirge, guerreiro tribal</td>
                <td class="lvl">1/8 (25 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bico de machado, javali, alce, serpente venenosa gigante, aranha-lobo gigante, goblin, pantera (leopardo), pteranodonte, cavalo de montaria, lobo</td>
                <td class="lvl">1/4 (50 PX)</td>
            </tr>
            <tr>
                <td class="monster">Cocatriz, bode gigante, vespa gigante, gnoll, hobgoblin, homem-chacal, orc, batedor, enxame de insetos, worg</td>
                <td class="lvl">1/2 (100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bugbear, águia gigante, hiena gigante, abutre gigante, chefe goblin, hipogrifo, leão, espantalho, thri-kreen, tigre</td>
                <td class="lvl">1 (200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Alossauro, ankheg, centauro, druida, javali gigante, alce gigante, gnoll líder de matilha, grifo, ogro, orc Olho de Gruumsh, orog, Pégaso, rinoceronte
                </td>
                <td class="lvl">2 (450 XP)</td>
            </tr>
            <tr>
                <td class="monster">Anquilossauro, capitão hobgoblin, manticora, aranha interplanar, veterano</td>
                <td class="lvl">3 (700 XP)</td>
            </tr>
            <tr>
                <td class="monster">Couatl, elefante, gnoll presa de Yeenoghu, homem-javali, homem-tigre</td>
                <td class="lvl">4 (1.100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bulette, gorgon, tricerátops </td>
                <td class="lvl">5 (1.800 XP)</td>
            </tr>
            <tr>
                <td class="monster">Quimera, ciclope </td>
                <td class="lvl">6 (2.300 XP)</td>
            </tr>
            <tr>
                <td class="monster">Tiranossauro</td>
                <td class="lvl">8 (3.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de ouro jovem</td>
                <td class="lvl">10 (5.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de ouro adulto </td>
                <td class="lvl">17 (18.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de ouro ancião</td>
                <td class="lvl">24 (62.000 XP)</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function underwater() {
    var template = `<div class="card" id="card">
    <div class="card-title">MONSTROS DA SUBAQUÁTICOS</div>
    <table>
        <thead>
            <tr>
                <td class="monster">Monstros</td>
                <td class="lvl">Nível de Desafio (XP)</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="monster">Piranha</td>
                <td class="lvl">0 (10 XP)</td>
            </tr>
            <tr>
                <td class="monster">Povo do mar</td>
                <td class="lvl">1/8 (25 XP)</td>
            </tr>
            <tr>
                <td class="monster">Cobra constritora, mephit do vapor</td>
                <td class="lvl">1/4 (50 PX)</td>
            </tr>
            <tr>
                <td class="monster">Cavalo marinha gigante, tubarão dos
                    arrecifes, sahuagin</td>
                <td class="lvl">1/2 (100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Polvo gigante, enxame de piranhas</td>
                <td class="lvl">1 (200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Cobra constritora gigante, turbação
                    caçador, sirenídeo, plesiossauro,
                    sacerdotisa sahuagin, bruxa do mar</td>
                <td class="lvl">2 (450 XP)</td>
            </tr>
            <tr>
                <td class="monster">Baleia assassina</td>
                <td class="lvl">3 (700 XP)</td>
            </tr>
            <tr>
                <td class="monster">Tubarão gigante, barão sahuagin,
                    elemental da água</td>
                <td class="lvl">5 (1.800 XP)</td>
            </tr>
            <tr>
                <td class="monster">Marid</td>
                <td class="lvl">11 (7.200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Gigante da tempestade</td>
                <td class="lvl">13 (10.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Tartaruga-dragão</td>
                <td class="lvl">17 (18.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Kraken</td>
                <td class="lvl">23 (50.000 XP)</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function underground() {
    var template = `<div class="card" id="card">
    <div class="card-title">MONSTROS DA SUBAQUÁTICOS</div>
    <table>
        <thead>
            <tr>
                <td class="monster">Monstros</td>
                <td class="lvl">Nível de Desafio (XP)</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="monster">Besouro de fogo gigante, guinchador, miconide esporo</td>
                <td class="lvl">0 (10 XP)</td>
            </tr>
            <tr>
                <td class="monster">Flumph, rato gigante, kobold, stirge, guerreior tribal</td>
                <td class="lvl">1/8 (25 XP)</td>
            </tr>
            <tr>
                <td class="monster">Drow, morcego gigante, centopeia gigante, lagarto gigante, serpente venenosa gigante, goblin, grimlock, kuo-toa, enxame de morcegos, fungo violeta, kobold alado</td>
                <td class="lvl">1/4 (50 PX)</td>
            </tr>
            <tr>
                <td class="monster">Manto negro, gnomo das profundezas, esporo de gás, limo cinzento, hobgoblin, mephit do magma, miconide adulto, orc, perfurador, monstro da ferrugem, batedor, sombra, enxame de insetos</td>
                <td class="lvl">1/2 (100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bugbear, duergar, serpente de fogo, carniçal, aranha gigante, sapo gigante, chefe goblin, meio-ogro, açoitador kuo-toa, servo esporo quaggoth, espectro</td>
                <td class="lvl">1 (200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Verme da carniça, druida, gárgula, cubo gelatinoso, lívido, cobra constritora gigante, abocanhador matraqueante, grick, devorador de intelecto, mímico, esqueleto de minotauro, nótico, gosma ocre, ogro, orc Olho de Gruumsh, orog,
                    urso polar (urso da caverna), quaggoth</td>
                <td class="lvl">2 (450 XP)</td>
            </tr>
            <tr>
                <td class="monster">Duplo, grell, hobgoblin capitão, cão infernal, horror de gancho, kuo-toa monitor, minotauro, quaggoth thonot, aranha interplanar, espectador, veterano, anomalia da água, inumano</td>
                <td class="lvl">3 (700 XP)</td>
            </tr>
            <tr>
                <td class="monster">Pudim negro, naga dos ossos, chuul, ettin, caveira flamejante, fantasma</td>
                <td class="lvl">4 (1.100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Observador zumbi, drow guerreiro de elite, elemental da terra, otyugh, estrangulador, salamandra, troll, tríbulo brutal, cria vampírica, aparição, xorn</td>
                <td class="lvl">5 (1.800 XP)</td>
            </tr>
            <tr>
                <td class="monster">Quimera, ciclope, drider </td>
                <td class="lvl">6 (2.300 XP)</td>
            </tr>
            <tr>
                <td class="monster">Drow arcano, grick alfa, devorador de mentes, gigante de pedra</td>
                <td class="lvl">7 (2.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Mantor, fomori, naga espiritual </td>
                <td class="lvl">8 (3.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Gigante do fogo</td>
                <td class="lvl">9 (5.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Abolete</td>
                <td class="lvl">10 (5.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Behir, dao</td>
                <td class="lvl">11 (7.200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Observador, dragão vermelho das sombras jovem</td>
                <td class="lvl">13 (10.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Tirano da morte </td>
                <td class="lvl">14 (11.500 XP)</td>
            </tr>
            <tr>
                <td class="monster">Verme púrpura </td>
                <td class="lvl">15 (13.000 XP)</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function urban() {
    var template = `<div class="card" id="card">
    <div class="card-title">MONSTROS DA URBANOS</div>
    <table>
        <thead>
            <tr>
                <td class="monster">Monstros</td>
                <td class="lvl">Nível de Desafio (XP)</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="monster">Gato, plebeu, bode, rato, corvo </td>
                <td class="lvl">0 (10 XP)</td>
            </tr>
            <tr>
                <td class="monster">Bandido, cultista, cobra voadora, rato gigante, guarda, kobold, mastim, mula, nobre, pônei, stirge</td>
                <td class="lvl">1/8 (25 XP)</td>
            </tr>
            <tr>
                <td class="monster">Acólito, cavalo de carga, centopeia gigante, serpente venenosa gigante, kenku, pseudodragão, cavalo de montaria, esqueleto, mephit da fumaça, enxame de morcegos, enxame de ratos, enxame de corvos, kobold alado, zumbi</td>
                <td class="lvl">1/4 (50 PX)</td>
            </tr>
            <tr>
                <td class="monster">Crocodilo, vespa gigante, sombra, enxame de insetos, rufião, cavalo de guerra</td>
                <td class="lvl">1/2 (100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Carniçal, aranha gigante, meio-ogro, espectro, espião, yuan-ti puro-sangue</td>
                <td class="lvl">1 (200 XP)</td>
            </tr>
            <tr>
                <td class="monster">Capitão dos bandidos, fanático do culto, gárgula, lívido, mímico, sacerdote, homem-rato, fogo-fátuo</td>
                <td class="lvl">2 (450 XP)</td>
            </tr>
            <tr>
                <td class="monster">Duplo, cavaleiro, aranha interplanar, veterano, anomalia da água, inumano</td>
                <td class="lvl">3 (700 XP)</td>
            </tr>
            <tr>
                <td class="monster">Couatl, fantasma, súcubo ou íncubo</td>
                <td class="lvl">4 (1.100 XP)</td>
            </tr>
            <tr>
                <td class="monster">Cambion, gladiador, ressurgido, cria vampírica
                </td>
                <td class="lvl">5 (1.800 XP)</td>
            </tr>
            <tr>
                <td class="monster">Caçador invisível, arcano</td>
                <td class="lvl">6 (2.300 XP)</td>
            </tr>
            <tr>
                <td class="monster">Oni, guardião do escudo</td>
                <td class="lvl">7 (2.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Assassino</td>
                <td class="lvl">8 (3.900 XP)</td>
            </tr>
            <tr>
                <td class="monster">Slaad cinza, dragão de prata jovem</td>
                <td class="lvl">9 (5.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Arquimago</td>
                <td class="lvl">12 (8.400 XP)</td>
            </tr>
            <tr>
                <td class="monster">Rarkshasa, vampiro</td>
                <td class="lvl">13 (10.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Vampiro conjurador ou guerreiro</td>
                <td class="lvl">15 (13.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de prata adulto</td>
                <td class="lvl">16 (15.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Dragão de prata ancião</td>
                <td class="lvl">23 (50.000 XP)</td>
            </tr>
            <tr>
                <td class="monster">Tarrasque</td>
                <td class="lvl">30 (155.000 XP)</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};