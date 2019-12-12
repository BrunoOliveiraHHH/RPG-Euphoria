var choice = document.getElementById('choice');
var tab = document.getElementById('tab');


document.querySelector('#btn-submit').addEventListener('click', e => {

    choiceValue = parseInt(choice.value);

    if (choiceValue == 0) {
        clear();
    } else if (choiceValue == 1) {
        objt25Po();
    } else if (choiceValue == 2) {
        objt250Po();
    } else if (choiceValue == 3) {
        objt750Po();
    } else if (choiceValue == 4) {
        objt2500Po();
    } else if (choiceValue == 5) {
        objt7500Po();
    }

});

function clear() {
    tab.innerHTML = '';
}

function objt25Po() {
    var template = `<div class="card" id="card">
    <div class="card-title">Objeto de Arte de 25 Po</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nome</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">Jarro de prata</td>
            </tr>
            <tr>
                <td class="name">Estatueta esculpida em osso</td>
            </tr>
            <tr>
                <td class="name">Bracelete de ouro pequeno</td>
            </tr>
            <tr>
                <td class="name">Vestimenta de tecido dourado</td>
            </tr>
            <tr>
                <td class="name">Máscara de veludo negra costurada com fios de prata</td>
            </tr>
            <tr>
                <td class="name">Cálice de cobre com filigrana prateada</td>
            </tr>
            <tr>
                <td class="name">Par de dados de osso com gravuras</td>
            </tr>
            <tr>
                <td class="name">Pequeno espelho numa moldura de madeira pintada</td>
            </tr>
            <tr>
                <td class="name">Lenço de seda bordado</td>
            </tr>
            <tr>
                <td class="name">Broche de ouro com um retrato pintado dentro</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function objt250Po() {
    var template = `<div class="card" id="card">
    <div class="card-title">Objeto de Arte de 250 Po</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nome</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">Anel de ouro cravejado com pedras de sangue</td>
            </tr>
            <tr>
                <td class="name">Estatueta esculpida em marfim</td>
            </tr>
            <tr>
                <td class="name">Bracelete de ouro largo</td>
            </tr>
            <tr>
                <td class="name">Gargantilha de prata com um pingente de pedra preciosa</td>
            </tr>
            <tr>
                <td class="name">Coroa de bronze</td>
            </tr>
            <tr>
                <td class="name">Robe de seda com adornos de ouro</td>
            </tr>
            <tr>
                <td class="name">Grande tapeçaria elegante</td>
            </tr>
            <tr>
                <td class="name">Caneca de bronze com jades incrustadas</td>
            </tr>
            <tr>
                <td class="name">Caixa de miniaturas de animais em turquesa</td>
            </tr>
            <tr>
                <td class="name">Gaiola de pássaro de ouro com filigrana de electro</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function objt750Po() {
    var template = `<div class="card" id="card">
    <div class="card-title">Objeto de Arte de 750 Po</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nome</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">Cálice de prata cravejado com pedras da lua</td>
            </tr>
            <tr>
                <td class="name">Espada longa de lâmina prateada com conjunto de jatos no cabo</td>
            </tr>
            <tr>
                <td class="name">Harpa de madeira exótica com marfim incrustado e gemas de zircónio</td>
            </tr>
            <tr>
                <td class="name">Pequeno ídolo de ouro</td>
            </tr>
            <tr>
                <td class="name">Pente de ouro em formato de dragão cravejada com granadas vermelhas nos olhos</td>
            </tr>
            <tr>
                <td class="name">Rolha de garrafa gravada com folhas de ouro e cravejada com ametistas</td>
            </tr>
            <tr>
                <td class="name">Adaga de electro cerimonial com uma pérola negra no pomo</td>
            </tr>
            <tr>
                <td class="name">Broche de prata e ouro</td>
            </tr>
            <tr>
                <td class="name">Estatueta de obsidiana com detalhes e incrustações de ouro</td>
            </tr>
            <tr>
                <td class="name">Máscara de guerra de ouro pintada</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function objt2500Po() {
    var template = `<div class="card" id="card">
    <div class="card-title">Objeto de Arte de 2500 Po</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nome</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">Corrente de ouro elegante cravejada com uma opala de fogo</td>
            </tr>
            <tr>
                <td class="name">Antiga pintura obra-prima</td>
            </tr>
            <tr>
                <td class="name">Manto de seda e veludo bordado com diversas pedras da lua cravejadas</td>
            </tr>
            <tr>
                <td class="name">Bracelete de platina cravejado com uma safira</td>
            </tr>
            <tr>
                <td class="name">Luvas bordadas com lascas de joias</td>
            </tr>
            <tr>
                <td class="name">Peúga cheia de joias</td>
            </tr>
            <tr>
                <td class="name">Caixa de música de ouro</td>
            </tr>
            <tr>
                <td class="name">Argola de ouro cravejada com quatro águas-marinhas</td>
            </tr>
            <tr>
                <td class="name">Tapa-olho com um olho falso cravejado em uma safira azul e uma pedra da lua</td>
            </tr>
            <tr>
                <td class="name">Um colar de pequenas pérolas rosas</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function objt7500Po() {
    var template = `<div class="card" id="card">
    <div class="card-title">Objeto de Arte de 7500 Po</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nome</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">Coroa de ouro cheia de joias</td>
            </tr>
            <tr>
                <td class="name">Anel de platina cheio de joias</td>
            </tr>
            <tr>
                <td class="name">Pequena estatueta de ouro cravejada com rubis</td>
            </tr>
            <tr>
                <td class="name">Taça de ouro cravejada com esmeraldas</td>
            </tr>
            <tr>
                <td class="name">Caixa de joias de ouro com filigrana de platina</td>
            </tr>
            <tr>
                <td class="name">Sarcófago infantil de ouro pintado</td>
            </tr>
            <tr>
                <td class="name">Jogo de tabuleiro de jade com peças de ouro maciço</td>
            </tr>
            <tr>
                <td class="name">Chifre de marfim adornado com filigrana de ouro</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};