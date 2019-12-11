var choice = document.getElementById('choice');
var tab = document.getElementById('tab');


document.querySelector('#btn-submit').addEventListener('click', e => {

    choiceValue = parseInt(choice.value);

    if (choiceValue == 0) {
        clear();
    } else if (choiceValue == 1) {
        Gema10Po();
    } else if (choiceValue == 2) {
        Gema50Po();
    } else if (choiceValue == 3) {
        Gema100Po();
    } else if (choiceValue == 4) {
        Gema500Po();
    } else if (choiceValue == 5) {
        Gema1000Po();
    } else if (choiceValue == 6) {
        Gema5000Po();
    }

});

function clear() {
    tab.innerHTML = '';
}

function Gema10Po() {
    var template = `<div class="card" id="card">
    <div class="card-title">Modificador por Valor de Habilidade</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nome</td>
                <td class="value">Descrição</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">Azurita</td>
                <td class="value">azul escuro mosqueado opaco</td>
            </tr>
            <tr>
                <td class="name">Ágata malhada</td>
                <td class="value">marrom, azul, branca ou vermelho translúcido e listrado</td>
            </tr>
            <tr>
                <td class="name">Quartzo azul</td>
                <td class="value">azul claro transparente</td>
            </tr>
            <tr>
                <td class="name">Ágata ocular</td>
                <td class="value">círculos translúcidos de cinza, branco, marro, azul ou verde</td>
            </tr>
            <tr>
                <td class="name">Hematita</td>
                <td class="value">cinza escuro opaco</td>
            </tr>
            <tr>
                <td class="name">Lápis lazúli</td>
                <td class="value">azul claro e escuro opaco com manchas amarelas</td>
            </tr>
            <tr>
                <td class="name">Malaquita</td>
                <td class="value">opaco estriado com verde claro e escuro</td>
            </tr>
            <tr>
                <td class="name">Ágata musgo</td>
                <td class="value">rosa translúcido ou amarelo claro com cinza musgo ou marcas verdes</td>
            </tr>
            <tr>
                <td class="name">Obsidiana</td>
                <td class="value">preto opaco</td>
            </tr>
            <tr>
                <td class="name">Rodocrosita</td>
                <td class="value">azul claro opaco</td>
            </tr>
            <tr>
                <td class="name">Olho de tigre</td>
                <td class="value">marrom translúcido com centro dourado</td>
            </tr>
            <tr>
                <td class="name">Turquesa</td>
                <td class="value">azul esverdeado claro opaco</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function Gema50Po() {
    var template = ``;
    tab.innerHTML = template;
};

function Gema100Po() {
    var template = ``;
    tab.innerHTML = template;
};

function Gema500Po() {
    var template = ``;
    tab.innerHTML = template;
};

function Gema1000Po() {
    var template = ``;
    tab.innerHTML = template;
};

function Gema5000Po() {
    var template = ``;
    tab.innerHTML = template;
};