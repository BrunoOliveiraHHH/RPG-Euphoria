var choice = document.getElementById('choice');
var img = document.getElementById('img');


document.querySelector('#btn-submit').addEventListener('click', e => {

    choiceValue = parseInt(choice.value);

    if (choiceValue == 0) {
        erase();
    } else if (choiceValue == 1) {
        A();
    } else if (choiceValue == 2) {
        B();
    } else if (choiceValue == 3) {
        C();
    } else if (choiceValue == 4) {
        D();
    } else if (choiceValue == 5) {
        E();
    } else if (choiceValue == 6) {
        F();
    } else if (choiceValue == 7) {
        G();
    } else if (choiceValue == 8) {
        H();
    } else if (choiceValue == 9) {
        I();
    } else if (choiceValue == 10) {
        J();
    } else if (choiceValue == 11) {
        K();
    } else if (choiceValue == 12) {
        L();
    } else if (choiceValue == 13) {
        M();
    } else if (choiceValue == 14) {
        N();
    } else if (choiceValue == 15) {
        O();
    } else if (choiceValue == 16) {
        P();
    } else if (choiceValue == 17) {
        Q();
    } else if (choiceValue == 18) {
        R();
    } else if (choiceValue == 19) {
        S();
    } else if (choiceValue == 20) {
        T();
    } else if (choiceValue == 21) {
        U();
    } else if (choiceValue == 22) {
        V();
    } else if (choiceValue == 23) {
        W();
    } else if (choiceValue == 24) {
        X();
    } else if (choiceValue == 25) {
        Y();
    } else if (choiceValue == 26) {
        Z();
    } else if (choiceValue == 27) {
        apenA();
    } else if (choiceValue == 28) {
        apenB();
    }

});

function erase() {
    template = '';
    img.innerHTML = template;
};

function A() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Aarakocra.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Abocanhador Matraqueante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Abocanhador Matraqueante Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Ankheg.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Abolete.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Abolete habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Abolete Ações Lendárias.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Anomalia da água.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Aparição.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Aparição Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Arbusto Errante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Arbusto Errante Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Azer.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Solar.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Solar Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Solar Ações Lendárias.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Deva.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Deva habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Planetário.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/A/Planetário Habilidades.png">
</div>`;
    img.innerHTML = template;
};

function B() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Banshee.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Banshee Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Basilisco.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Basilisco Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Behir.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Behir Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bruxa da Noite.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bruxa da Noite Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bruxa do Mar.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bruxa do Mar Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bruxa Verde.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bruxa Verde Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bulette.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bulette Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bullywug.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bullywug Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bugbear Comandante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bugbear Comandante Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/B/Bugbear.png">
</div>`;
    img.innerHTML = template;
};

function C() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Cambion.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Cambion Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Carniçal.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Caçador Invisível.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Cavaleiro da Morte.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Cavaleiro da Morte Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Caveira Flamejante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Caveira Flamejante Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Centauro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Chuul.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Chuul Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Ciclope.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Cocatriz.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Coualt.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Coualt Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Coualt Conjuração.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Cão Infernal.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Lívido.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/C/Lívido Habilidades.png">
</div>`;
    img.innerHTML = template;
};

function D() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devorador de Intelecto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devorador Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devorador de Mentes.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devorador de Mentes Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Drider.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Drider Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dríade.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dríade Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Duergar.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Duergar Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Duplo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Duplo Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demilich.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demilich Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demilich Ações Lendárias.png">
</div>

<div class="monster-title" style="box-sizing: initial;">Demônios</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Balor.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Balor Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Barlgura.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Barlgura Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Chasme.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Chasme Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Demônio das Sombras.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Demônio das Sombras Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Glabrezu.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Glabrezu Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Goristro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Goristro Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Dretch.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Hezrou.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Marilith.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Marilith Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Nalfeshnee.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Nalfeshnee Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Quasit.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Quasit Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Senhor das Profundezas.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Senhor das profundezas Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Vrock.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Vrock Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Yochlol.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Yochlol Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Demon/Manes.png">
</div>

<div class="monster-title" style="box-sizing: initial;">Diabos</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabo Barbado.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabo Barbado habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabo de Chifres.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabo de Chifres Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabo do Gelo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabo de Gelo Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabo dos Espinhos.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabo dos Espinhos Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diado das Correntes.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabo das Correntes Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabo Farpado.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabo Farpado Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Erínia.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Erínia Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabrete.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabrete Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Diabo dos Ossos.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Devil/Lêmure.png">
</div>

<div class="monster-title" style="box-sizing: initial;">Dinoassauros</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dinosaur/Alossauro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dinosaur/Anquilossauro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dinosaur/Plesiossauro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dinosaur/Pteranodonte.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dinosaur/Tiranossauro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dinosaur/Tricerátops.png">
</div>

<div class="monster-title" style="box-sizing: initial;">Dragões</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Azul Filhote.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Azul Jovem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Azul Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Azul Adulto Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão Azul Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Azul Ancião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Azul Ancião Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão Azul Ancião.png">
</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Branco Filhote.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Branco Jovem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Branco Jovem Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Branco Aduldo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Branco Adulto Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão Branco Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Branco Ancião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Branco Ancião Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão Branco Ancião.png">
</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Negro Filhote.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Negro Jovem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Negro Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Negro Adulto Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão Negro Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Negro Ancião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Negro Ancião Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão Negro Ancião.png">
</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Verde Filhote.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Verde Jovem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Verde Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Verde Adulto Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão verde Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Verde Ancião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Verde Ancião Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão Verde Ancião.png">
</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Vermelho Filhote.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Vermelho Jovem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão vermelho Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Vermelho Adulto Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão Vermelho Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Vermelho Ancião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão Vermelho Ancião Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão Vermelho Ancião.png">
</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Bronze Filhote.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de bronze Jovem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Bronze Jovem Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Bronze Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Bronze Adulto Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Bronze Adulto Habilidades 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão de Bronze Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Bronze Ancião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Bronze Ancião Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Bronze Ancião Habilidades 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão de Bronze Ancião.png">
</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Cobre Filhote.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Cobre Filhote Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Cobre Jovem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Cobre Jovem Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de cobre Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Cobre Adulto Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão de Cobre Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Cobre Ancião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Cobre Ancião Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Cobre Ancião Habilidades 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão de Cobre Ancião.png">
</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de latão Filhote.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de latão Jovem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de latão Jovem Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Latão Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de latão Adulto Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão de Latão Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Latão Ancião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Latão Ancião Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Latão Habilidades 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão de Latão.png">
</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Ouro Filhote.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Ouro Jovem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Ouro jovem Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Ouro Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Ouro Adulto Habilidade.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Ouro Adulto Habilidade 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações lendárias Dragão de Ouro Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Ouro Ancião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Ouro Ancião habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Ouro Ancião Habilidades 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão de Ouro Ancião.png">
</div>

<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Prata Filhote.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Prata Jovem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Prata Jovem Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Prata Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Prata Adulto Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Prata Adulto Habilidades 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações lendárias Dragão de Prata Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Prata Ancião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Prata Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Dragão de Prata Ancião Habilidades 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/D/Dragon/Ações Lendárias Dragão de Prata Ancião.png">
</div>`;
    img.innerHTML = template;
};

function E() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Androesfinge.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Androesfinge Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Androesfinge Habilidades 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Ações lendárias Androesfinge.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Empírico.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Empírico Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Ações Lendárias Empírico.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Esqueleto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Ginoesfinge.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Ginoesfinge Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Ações Lendárias Ginoesfinge.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Drow.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Drow Arcano.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Drow Arcano habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Drow Guerreiro de Elite.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Drow Guerreiro de Elite Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Elemental da Terra.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Ente.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Elemental da água.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Elemental da água Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Elemental do Fogo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Elemental de Fogo Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Elemental do Ar.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Elemental do Ar Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Espantalho.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Espectro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Espectro habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Esqueleto Minotauro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Esqueleto Cavalo de Guerra.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Estrangulador.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Estrangulador Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Ettin.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Ettercap.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/E/Ettercap Habilidades.png">
</div>`;
    img.innerHTML = template;
};

function F() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Esporo de gás.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Esporos de Gás Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Flumph.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Flumph Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Fogo-Fátuo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Fogo-Fátuo Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Fomori.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Fomori Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Fungo Violeta.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Fantasma.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Fantasma Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Fantasma habilidades 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/F/Guinchador.png">
</div>`;
    img.innerHTML = template;
};

function G() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Cavaleiro Githyanki.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Cavaleiro Githyanki Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Chefe Goblin.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Chefe Goblin Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Dao.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Dao Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Djinni.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Djinni Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Efreeti.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Efreeti Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Galeb Duhr.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Galeb Duhr habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Garra Rastejante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gigante da Colina.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gigante Da Tempestade.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gigante Da Tempestade Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gigante das Nuvens.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gigante de Fogo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gigante de Gelo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gigante de Pedra.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gnoll Líder de Matilha.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gnoll Presa de Yeenoghu.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gnomo das Profundezas Svirfneblin.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gnomo das Profundezas Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Goblin.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Grifo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Golem de Barro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Golem de Barro Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Golem de Carne.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Golem de Carne Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Golem de Ferro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Golem de Ferro Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Golem de Pedra.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Golem de Pedra Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gorgon.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gorgon Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Grell.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Grell Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Grick.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Grick Alfa.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Guardião do Escudo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Guardião do Escudo Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Grimlock.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Guerreira Githyanki.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Gárgula.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/marid.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Marid Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Monge Githzerai.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/G/Zerth Githzerai.png">
</div>`;
    img.innerHTML = template;
};

function H() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Harpia.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Harpia Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Hidra.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Hidra Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Hobgoblin Capitão.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Hobgoblin Capitão Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Hobgoblin Senhor da Guerra.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Hobgoglin Senhor da Guerra Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Hipogrifo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Hobgoblin.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Homem-Chacal.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Homem-Chacal Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Homúnculo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Horror de Elmo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/H/Horror de Gancho.png">
</div>`;
    img.innerHTML = template;
};

function I() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/I/Espeto Infectado.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/I/Galho Infectado.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/I/Inumano.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/I/Inumano Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/I/Vinha Infectada.png">
</div>`;
    img.innerHTML = template;
};

function J() {
    template = '';
    img.innerHTML = template;
};

function K() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/K/Arcebispo Kuo-Toa.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/K/Arcebispo Kuo-Toa Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/K/kenku.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/K/Kobold Alado.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/K/Kraken.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/K/Kraken Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/K/Kraken Habilidades 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/K/Ações Lendárias Kraken.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/K/Kobold.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/K/Kuo-Toa.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/K/Kuo-Toa Habilidades.png">
</div>`;
    img.innerHTML = template;
};

function L() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Cubo Gelatinoso.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Cubo Gelatinoso Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Gosma Ocre.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Gosma Ocre Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Homem-Javali.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Homem-Javali Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Homem-Rato.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Homem-Rato Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Homem-Tigre.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Homem-Tigre Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Homem-Urso.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Homem-Urso Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Limo Cinzento.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Limo Cinzento Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Lobisomem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Lobisomem Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Lâmia.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Lâmia Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Pudim Negro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Pudim Negro Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Lich.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Lich Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/L/Ações Lendárias Lich.png">
</div>`;
    img.innerHTML = template;
};

function M() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Manticora.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Magmin.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Magmin Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Bidrone.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Manto Negro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Manto Negro Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mantor.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mantor Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Medusa.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Medusa Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Meio-Dragão Vermelho Veterano.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Meio-Dragão Vermelho Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mephit da Fumaça.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mephit da Fumaça Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mephit da Lama.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mephit da Lama Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mephit da Poeira.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mephit da Poeira habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mephit do Gelo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mephit do Gelo Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mephit do Magma.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mephit do Magma Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mephit do Vapor.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mephit do Vapor Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Miconide Adulto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Miconide Adulto Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Miconide Soberano.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Miconide Soberano Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Miconide Broto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Minotauro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Minotauro habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Monodrone.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Monstro da Ferrugem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Monstro da Ferrugem Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mímico.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Mímico Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Múmia.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Múmia Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Pentadrone.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Quadrone.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Servo Esporo Quaggoth.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Senhor das Múmias.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Senhor das Múmias Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Ações Lendárias Senhor das Múmias.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/M/Tridrone.png">
</div>`;
    img.innerHTML = template;
};

function N() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/N/Naga dos Ossos.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/N/Naga de Ossos magias.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/N/Naga Espiritual.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/N/Naga Espiritual magias.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/N/Naga Guardiã.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/N/Naga Guardiã Magias.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/N/Nótico.png">
</div>`;
    img.innerHTML = template;
};

function O() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Armadura Animada.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Comandante de Guerra Orc.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Comandante Orc de Guerra Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Espada Voadora.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Meio-Ogro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Ogro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Orc.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Orog.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Orc Olho de Gruumsh.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Olho de Gruumsh magias.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Espectador.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Raios Oculares Espectador.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Observador.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Raios Oculares 1 Observador.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Raios Oculares 2 Observador.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Ações de Covil Observador.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Tirano da Morte.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Tirano da Morte raios Oculares 1.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Tirano da Morte raios Oculares 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Ações de Covil Tirano da morte.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Otyugh.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Otyugh Ataques.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Oni.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Oni Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Tapete Sufocador.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/O/Tapete Sufocador Habilidades.png">
</div>`;
    img.innerHTML = template;
};

function P() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Pantera Deslocadora.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Pantera Deslocadora Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Peryton.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Peryton Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Perfurador.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Pixie.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Pixie habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Pégaso.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Pesadelo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Povo do Mar.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Povo Lagarto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Rei Rainha Povo lagarto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Pseudodragão.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Pseudodragão Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Xamã Povo Lagarto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/P/Xamã Povo Lagarto Habilidades.png">
</div>`;
    img.innerHTML = template;
};

function Q() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Q/Quaggoth.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Q/Quaggoth Thonot.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Q/Quimera.png">
</div>`;
    img.innerHTML = template;
};

function R() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/R/Rakshasa.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/R/Rakshasa Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/R/Remorhaz.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/R/Remorhaz Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/R/Ressurgido.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/R/Ressurgido Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/R/Remorhaz Jovem.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/R/Roca.png">
</div>`;
    img.innerHTML = template;
};

function S() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Barão Sahuagin.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Barão Sahuagin Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Incubo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Incubo Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Sacerdotisa Sahuagin.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Sacerdotisa Sahuagin Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Larva Slaad.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Serpente de Fogo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Sahuagin.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Sahuagin Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Salamandra.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Salamandra Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Slaad Azul.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Slaad Azul Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Slaad Cinza.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Slaad Cinza Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Slaad da Morte.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Slaad da Morte Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Slaad Verde.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Slaad Verde Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Slaad Vermelho.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Slaad Vermelho Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Sirenídeo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Sombra.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Sombra Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Sprite.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Stirge.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Sátiro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Súcubo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/S/Súcubo Habilidades.png">
</div> `;
    img.innerHTML = template;
};

function T() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/T/Tarrasque.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/T/Tarrasque Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/T/Tarrasque Habilidades 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/T/Ações Lendárias Tarrasque.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/T/Tartaruga-Dragão.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/T/Tartaruga-Dragão Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/T/Thri-Kreen.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/T/Thri-Keen Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/T/Troglodita.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/T/Troll.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/T/Tríbulo Brutal.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/T/Tríbulo Brutal Habilidades.png">
</div>`;
    img.innerHTML = template;
};

function U() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/U/Urso-Coruja.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/U/Unicórnio.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/U/Unicórnio Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/U/Ações lendárias Unicórnio.png">
</div>`;
    img.innerHTML = template;
};

function V() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/V/Cria Vampírica.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/V/Cria Vampírica Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/V/Verme Púrpura.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/V/Verme Púrpura Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/V/Vampiro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/V/Vampiro Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/V/Vampiro Habilidades 2.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/V/Vampiro Habilidades 3.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/V/Vampiro Habilidades 4.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/V/Ações Lendárias Vampiro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/V/Verme de Carniça.png">
</div>`;
    img.innerHTML = template;
};

function W() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/W/Wyvern.png">
</div>`;
    img.innerHTML = template;
};

function X() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/X/Xorn.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/X/Xorn Habilidades.png">
</div>`;
    img.innerHTML = template;
};

function Y() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Arcanaloth.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Arcanaloth Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Mezzoloth.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Mezzoloth Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Nycaloth.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Nycaloth Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Ultroloth.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Ultroloth Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Yeti Abominável.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Yeti Abominável Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Yeti.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Yeti Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Yuan-Ti Mestiço Tipo 3.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Yuan-Ti Mestiço.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Yuan-Ti Mestiço Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Yuan-Ti Puro-Sanque.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Yuan-Ti Abominação.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Y/Yuan-Ti Abominação Habilidades.png">
</div>`;
    img.innerHTML = template;
};

function Z() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Z/Zumbi.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Z/Ogro Zumbi.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Z/Observador Zumbi.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/Z/raios oculalres Observador Zumbi.png">
</div>`;
    img.innerHTML = template;
};

function apenA() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Abutre.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Abutre Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Aguia.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Aguia Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Alce.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Alce Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Aranha Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Aranha Gigante Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Aranha Interplanar.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Aranha Interplanar Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Aranha-Lobo Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Aranha-Lobo Gigante Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Aranha.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Arbusto Desperto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Arminho.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Arminho Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Arvore Desperta.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Babuíno.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Baleia Assassina.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Besouro de Fogo Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Bico de Machado.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Bode.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Bode Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Camelo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Caranguejo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Caranguejo Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Cavalo de Carga.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Cavalo de Guerra.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Cavalo de Montaria.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Cavalo Marinho.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Cavalo Marinho Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Centopeia Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Chacal.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Cobra Constritora.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Cobra Constritora Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Cobra Voadora.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Coruja.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Coruja Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Corvo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Crocodilo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Crocodilo Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Cão da Morte.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Cão Teleportador.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Elefante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Enxame de Corvos.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Enxame de Insetos.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Enxame de Morcegos.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Enxame de Piranhas.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Enxame de Ratos.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Enxame de Serpentes Venenosas.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Escorpião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Escorpião Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Falcão.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Falcão de Sangue.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Gato.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Gorila.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Gorila Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Hiena.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Hiena Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Javali.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Javali Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Lagarto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Lagarto Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Leão.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Leão Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Lobo Atroz.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Lobo Invernal.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Lobo Invernal Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Mamute.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Mastim.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Morcego.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Morcego Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Mula.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Pantera.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Piranha.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Polvo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Polvo Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/ponei.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Rato.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Rato Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Rinoceronte.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Rã Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Rã Gigante Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Sapo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Sapo Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Sapo Gigante Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Serpente Venenosa.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Serpente Venenosa Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Texugo.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Texugo Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Tigre.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Tigre Dentes-de-Sabre.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Tubarão Caçador.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Tubarão dos Arrecifes.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Tubarão Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Urso Marrom.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Urso Negro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Urso Polar.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Veado.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Vespa Gigante.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE A CRIATURAS DIVERSAS/Worg.png">
</div>`;
    img.innerHTML = template;
};

function apenB() {
    template = `<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Acólito.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Arcano.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Arquimago.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Arquimago Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Assassino.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Assassino Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Bandido.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Batedor.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Capitão dos Bandidos.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Capitão dos Bandidos Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Cavaleiro.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Cavaleiro Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Cultista.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Druida.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Espião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Fanático do Culto.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Furioso.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Gladiador.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Gladiador Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Guarda.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Guerreiro Tribal.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Nobre.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Plebeu.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Rufião.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Sacerdote.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Sacerdote Habilidades.png">
</div>
<div class="card-mon" style="box-sizing: initial;">
    <img src="assets/img/Cards/APÊNDICE B CRIATURAS DIVERSAS/Veterano.png">
</div>`;
    img.innerHTML = template;
};