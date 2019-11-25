var choice = document.getElementById('choice');
var img = document.getElementById('img');


document.querySelector('#btn-submit').addEventListener('click', e => {

    choiceValue = parseInt(choice.value);

    if (choiceValue == 10) {
        erase();
    } else if (choiceValue == 0) {
        nvl0();
    } else if (choiceValue == 1) {
        nvl1();
    } else if (choiceValue == 2) {
        nvl2();
    } else if (choiceValue == 3) {
        nvl3();
    } else if (choiceValue == 4) {
        nvl4();
    } else if (choiceValue == 5) {
        nvl5();
    } else if (choiceValue == 6) {
        nvl6();
    } else if (choiceValue == 7) {
        nvl7();
    } else if (choiceValue == 8) {
        nvl8();
    } else if (choiceValue == 9) {
        nvl9();
    }

});

function erase() {
    template = '';
    img.innerHTML = template;
};

function nvl0() {
    template = `<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/AMIZADE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/ATAQUE CERTEIRO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/BORDÃO MÍSTICO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/CHAMA SAGRADA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/CHICOTE DE ESPINHOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/CONSERTAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/CRIAR CHAMAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/DRUIDISMO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/ESPIRRO ÁCIDO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/ESTABILIZAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/GLOBOS DE LUZ.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/ILUSÃO MENOR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/LUZ.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/MENSAGEM.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/MÃOS MÁGICAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/ORIENTAÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/PRESTIDIGITAÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/PROTEÇÃO CONTRA LÂMINAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/RAIO DE FOGO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/RAIO DE GELO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/RAJADA DE VENENO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/RAJADA MÍSTICA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/RESISTÊNCIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/TAUMATURGIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/TOQUE ARREPIANTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/TOQUE CHOCANTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/0/ZOMBARIA VICIOSA.jpg">
</div>`;
    img.innerHTML = template;
};

function nvl1() {
    template = `<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/ALARME.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/AMIZADE ANIMAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/ÁREA ESCORREGADIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/ARMADURA ARCANA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/ARMADURA DE AGATHYS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/AUXÍLIO DIVINO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/BENÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/BENÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/BOM FRUTO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/BRAÇOS DE HADAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/BRUXARIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/COMANDO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/COMPREENDER IDIOMAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/CONSTRIÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/CONVOCAR FAMILIAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/CRIAR OU DESTRUIR ÁGUA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/CURAR FERIMENTOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/DESTRUIÇÃO COLÉRICA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/DESTRUIÇÃO LANCINANTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/DESTRUIÇÃO TROVEJANTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/DETECTAR MAGIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/DETECTAR O BEM E MAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/DETECTAR VENENO E DOENÇA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/DISCO FLUTUANTE DE TENSER.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/DISFARÇAR-SE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/DUELO COMPELIDO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/ENFEITIÇAR PESSOA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/ESCRITA ILUSÓRIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/ESCUDO ARCANO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/ESCUDO DA FÉ.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/FALAR COM ANIMAIS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/FALAR COM PLANTAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/FOGO DAS FADAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/GOLPE CONSTRITOR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/HEROÍSMO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/IDENTIFICAÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/IDENTIFICAÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/IMAGEM SILENCIOSA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/INFLIGIR FERIMENTOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/LEQUE CROMÁTICO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/MARCA DO CAÇADOR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/MÃOS FLAMEJANTES.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/MÍSSEIS MÁGICOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/NÉVOA OBSCURECENTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/ONDA TROVEJANTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/ORBE CROMÁTICA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/PALAVRA CURATIVA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/PASSOS LONGOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/PERDIÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/PROTEÇÃO CONTRA O BEM E MAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/PURIFICAR ALIMENTOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/QUEDA SUAVE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/RAIO ADOECENTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/RAIO DE BRUXA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/RAIO GUIADOR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/RECUO ACELERADO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/REPREENSÃO INFERNAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/RISO HISTÉRICO DE TASHA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/RISO HISTÉRICO DE TASHA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/SALTO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/SANTUÁRIO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/SARAIVADA DE ESPINHOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/SERVO INVISÍVEL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/SONO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/SUSSURROS DISSONANTES.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/1/VITALIDADE FALSA.jpg">
</div>`;
    img.innerHTML = template;
};

function nvl2() {
    template = `<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/ACALMAR EMOÇÕES.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/AJUDA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/ALTERAR-SE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/APRIMORAR HABILIDADE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/ARMA ESPIRITUAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/ARMA MÁGICA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/ARROMBAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/AUGÚRIO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/AUMENTARREDUZIR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/AURA MÁGICA DE NYSTUL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/BOCA ENCANTADA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/CATIVAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/CEGUEIRASURDEZ.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/CHAMA CONTÍNUA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/CONVOCAR MONTARIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/CORDÃO DE FLECHAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/COROA DA LOUCURA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/CRESCER ESPINHOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/DESPEDAÇAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/DETECTAR PENSAMENTOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/ENCONTRAR ARMADILHAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/ESCURIDÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/ESFERA FLAMEJANTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/ESQUENTAR METAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/FLECHA ÁCIDA DE MELF.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/FORÇA FANTASMAGÓRICA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/IMOBILIZAR PESSOA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/INVISIBILIDADE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/LEVITAÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/LOCALIZAR ANIMAIS OU PLANTAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/LOCALIZAR OBJETO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/LUFADA DE VENTO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/LÂMINA FLAMEJANTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/MARCA DA PUNIÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/MENSAGEIRO ANIMAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/NUBLAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/NUVEM DE ADAGAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/ORAÇÃO CURATIVA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/PASSO NEBULOSO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/PASSOS SEM PEGADAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/PATAS DE ARANHA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/PELE DE ÁRVORE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/PROTEÇÃO CONTRA VENENO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/RAIO ARDENTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/RAIO DO ENFRAQUECIMENTO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/RAIO LUNAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/REFLEXOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/REPOUSO TRANQUILO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/RESTAURAÇÃO MENOR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/SENTIDO BESTIAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/SILÊNCIO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/SUGESTÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/TEIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/TRANCA ARCANA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/TRUQUE DE CORDA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/VER O INVISÍVEL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/VISÃO NO ESCURO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/VÍNCULO PROTETOR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/2/ZONA DA VERDADE.jpg">
</div>`;
    img.innerHTML = template;
};

function nvl3() {
    template = `<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/AMPLIAR PLANTAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/ANDAR NA ÁGUA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/ANIMAR MORTOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/ARMA ELEMENTAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/AURA DE VITALIDADE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/BOLA DE FOGO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/CLARIVIDÊNCIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/CONJURAR ANIMAIS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/CONJURAR RAJADA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/CONTRAMÁGICA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/CONVOCAR RELÂMPAGOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/CRIAR ALIMENTOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/CÍRCULO MÁGICO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/DESTRUIÇÃO CEGANTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/DIFICULTAR DETECÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/DISSIPAR MAGIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/ENVIAR MENSAGEM.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/ESPÍRITOS GUARDIÕES.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/FALAR COM OS MORTOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/FLECHA RELAMPEJANTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/FOME DE HADAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/FORJAR MORTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/GLIFO DE VIGILÂNCIA 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/GLIFO DE VIGILÂNCIA 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/FORMA GASOSA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/IDIOMAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/IMAGEM MAIOR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/LENTIDÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/LUZ DO DIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/MANTO DO CRUZADO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/MEDO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/MESCLAR-SE ÀS ROCHAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/MONTARIA FANTASMAGÓRICA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/MURALHA DE VENTO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/NEVASCA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/NÉVOA FÉTIDA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/PADRÃO HIPNÓTICO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/PALAVRA CURATIVA EM MASSA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/PEQUENA CABANA DE LEOMUND.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/PISCAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/PROTEÇÃO CONTRA ENERGIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/RELÂMPAGO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/REMOVER MALDIÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/RESPIRAR NA ÁGUA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/REVIVIFICAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/ROGAR MALDIÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/SINAL DE ESPERANÇA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/TOQUE VAMPÍRICO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/VELOCIDADE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/3/VOO.jpg">
</div>`;
    img.innerHTML = template;
};

function nvl4() {
    template = `<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/ARCA SECRETA DE LEOMUND.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/ASSASSINO FANTASMAGÓRICO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/AURA DE PUREZA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/AURA DE VIDA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/BANIMENTO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/COMPULSÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/CONFUSÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/CONJURAR ELEMENTAIS MENORES.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/CONJURAR SERES DA FLORESTA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/CONTROLAR ÁGUA 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/CONTROLAR ÁGUA 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/CÃO FIEL DE MORDENKAINEN.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/DESTRUIÇÃO ESTONTEANTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/ESCUDO DE FOGO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/ESFERA RESILIENTE DE OTILUKE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/FABRICAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/GUARDIÃO DA FÉ.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/INSETO GIGANTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/INVISIBILIDADE MAIOR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/LOCALIZAR CRIATURA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/MALOGRO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/METAMORFOSE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/MOLDAR ROCHAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/MOVIMENTAÇÃO LIVRE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/MURALHA DE FOGO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/OLHO ARCANO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/PELE DE PEDRA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/PORTA DIMENSIONAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/PROTEÇÃO CONTRA A MORTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/SANTUÁRIO PARTICULAR DE MORDENKAINEN.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/TEMPESTADE DE GELO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/TENTÁCULOS NEGROS DE EVARD.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/TERRENO ALUCINÓGENO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/4/VINHA ESMAGADORA.jpg">
</div>`;
    img.innerHTML = template;
};

function nvl5() {
    template = `<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/ALJAVA VELOZ.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/ANIMAR OBJETOS 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/ANIMAR OBJETOS 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CAMINHAR EM ÁRVORES.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/COLUNA DE CHAMAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/COMUNHÃO COM A NATUREZA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/COMUNHÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CONE DE FRIO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CONHECIMENTO LENDÁRIO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CONJURAR ELEMENTAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CONSAGRAR 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CONSAGRAR 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CONJURAR SARAIVADA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CONTATO EXTRAPLANAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CRIAR PASSAGEM.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CRIAÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CURAR FERIMENTOS EM MASSA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CÍRCULO DE PODER.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CÍRCULO DE TELETRANSPORTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/5/CÚPULA ANTIVIDA.jpg">
</div>`;
    img.innerHTML = template;
};

function nvl6() {
    template = `<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/ALIADO PLANAR 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/ALIADO PLANAR 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/ATAQUE VISUAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/BANQUETE DE HERÓIS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/BARREIRA DE LÂMINAS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/CAMINHAR NO VENTO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/CARNE PARA PEDRA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/CONJURAR FADA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/CONTINGÊNCIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/CORRENTE DE RELÂMPAGOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/CRIAR MORTOS-VIVOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/CURA COMPLETA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/CÍRCULO DA MORTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/DANÇA IRRESISTÍVEL DE OTTO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/DESINTEGRAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/DOENÇA PLENA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/ENCONTRAR O CAMINHO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/ESFERA CONGELANTE DE OTILUKE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/GLOBO DE INVULNERABILIDADE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/ILUSÃO PROGRAMADA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/INVOCAÇÃO INSTANTÂNEA DE DRAWMIJ.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/MOVER TERRA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/MURALHA DE ESPINHOS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/MURALHA DE GELO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/PALAVRA DE RECORDAÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/PORTAL ARCANO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/PROTEGER FORTALEZA 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/PROTEGER FORTALEZA 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/PROIBIÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/RAIO SOLAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/RECIPIENTE ARCANO 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/RECIPIENTE ARCANO 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/SUGESTÃO EM MASSA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/TELETRANSPORTE POR ÁRVORES.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/6/VISÃO DA VERDADE.jpg">
</div>`;
    img.innerHTML = template;
};

function nvl7() {
    template = `<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/BOLA DE FOGO CONTROLÁVEL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/CONJURAR CELESTIAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/DEDO DA MORTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/ESPADA DE MORDENKAINEN.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/FORMA ETÉREA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/INVERTER A GRAVIDADE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/ISOLAMENTO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/MANSÃO MAGNÍFICA DE MORDENKAINEN.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/MIRAGEM.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/PALAVRA DIVINA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/PRISÃO DE ENERGIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/PROJETAR IMAGEM.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/RAJADA PRISMÁTICA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/REGENERAÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/RESSURREIÇÃO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/SIMULACRO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/SÍMBOLO 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/SÍMBOLO 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/TELETRANSPORTE 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/TELETRANSPORTE 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/TEMPESTADE DE FOGO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/7/VIAGEM PLANAR.jpg">
</div>`;
    img.innerHTML = template;
};

function nvl8() {
    template = `<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/ANTIPATIASIMPATIA 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/ANTIPATIASIMPATIA 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/AURA SAGRADA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/CLONE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/CAMPO ANTIMAGIA 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/CAMPO ANTIMAGIA 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/CONTROLAR O CLIMA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/DOMINAR MONSTRO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/ENFRAQUECER INTELECTO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/EXPLOSÃO SOLAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/FORMAS ANIMAIS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/LABIRINTO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/LIMPAR A MENTE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/LOQUACIDADE.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/NUVEM INCENDIÁRIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/PALAVRA DE PODER ATORDOAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/SEMIPLANO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/TELEPATIA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/TERREMOTO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/8/TSUNAMI.jpg">
</div>`;
    img.innerHTML = template;
};

function nvl9() {
    template = `<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/ALTERAR FORMA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/APRISIONAMENTO 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/APRISIONAMENTO 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/CHUVA DE METEOROS.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/CURA COMPLETA EM MASSA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/DESEJO 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/DESEJO 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/ENCARNAÇÃO FANTASMAGÓRICA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/METAMORFOSE VERDADEIRA 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/METAMORFOSE VERDADEIRA 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/MURALHA PRISMÁTICA 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/MURALHA PRISMÁTICA 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/PALAVRA DE PODER CURAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/PALAVRA DE PODER MATAR.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/PARAR O TEMPO.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/PORTAL.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/PROJEÇÃO ASTRAL 12.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/PROJEÇÃO ASTRAL 22.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/RESSURREIÇÃO VERDADEIRA.jpg">
</div>
<div class="card-spl" style="box-sizing: initial;">
    <img class="img-spl" src="assets/img/spells/9/SEXTO SENTIDO.jpg">
</div>`;
    img.innerHTML = template;
};