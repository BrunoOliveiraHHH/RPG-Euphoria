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
    <div class="card-title">Gemas de 10 Po</div>
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
    var template = `<div class="card" id="card">
    <div class="card-title">Gemas de 50 Po</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nome</td>
                <td class="value">Descrição</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">Pedra de sangue</td>
                <td class="value">cinza escuro opaco com manchas vermelhas</td>
            </tr>
            <tr>
                <td class="name">Cornalina</td>
                <td class="value">de laranja a vermelho amarronzado opaco</td>
            </tr>
            <tr>
                <td class="name">Calcedônia</td>
                <td class="value">branco opaco</td>
            </tr>
            <tr>
                <td class="name">Crisoprásio</td>
                <td class="value">verde translúcido</td>
            </tr>
            <tr>
                <td class="name">Citrina</td>
                <td class="value">amarelo claro amarronzado transparente</td>
            </tr>
            <tr>
                <td class="name">Jaspe</td>
                <td class="value">azul, preto ou marrom opaco</td>
            </tr>
            <tr>
                <td class="name">Pedra lunar</td>
                <td class="value">branco translúcido com azul claro brilhante</td>
            </tr>
            <tr>
                <td class="name">Ônix</td>
                <td class="value">faixas opacas de preto e branco, ou preto ou branco puro</td>
            </tr>
            <tr>
                <td class="name">Quartzo</td>
                <td class="value">branco transparente, cinza ou amarelo esfumaçado</td>
            </tr>
            <tr>
                <td class="name">Sardônica</td>
                <td class="value">faixas opacas de vermelho e branco</td>
            </tr>
            <tr>
                <td class="name">Quartzo rosa estrela</td>
                <td class="value">pedra rosa translúcida com centro branco em forma de estrela</td>
            </tr>
            <tr>
                <td class="name">Zircônio</td>
                <td class="value">azul esverdeado claro transparente</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function Gema100Po() {
    var template = `<div class="card" id="card">
    <div class="card-title">Gemas de 100 Po</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nome</td>
                <td class="value">Descrição</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">Âmbar</td>
                <td class="value">transparente entre ouro aquoso e ouro vívido</td>
            </tr>
            <tr>
                <td class="name">Ametista</td>
                <td class="value">púrpura profundo transparente</td>
            </tr>
            <tr>
                <td class="name">Crisoberilo</td>
                <td class="value">transparente entre amarelo esverdeado e verde claro</td>
            </tr>
            <tr>
                <td class="name">Coral</td>
                <td class="value">carmesim opaco</td>
            </tr>
            <tr>
                <td class="name">Granada</td>
                <td class="value">vermelho, marrom esverdeado ou branco transparente</td>
            </tr>
            <tr>
                <td class="name">Jade</td>
                <td class="value">verde claro, verde escuro ou branco translúcido</td>
            </tr>
            <tr>
                <td class="name">Jato</td>
                <td class="value">preto profundo opaco</td>
            </tr>
            <tr>
                <td class="name">Pérola</td>
                <td class="value">branco, amarelo ou rosa opaco e lustroso</td>
            </tr>
            <tr>
                <td class="name">Espinela</td>
                <td class="value">vermelho, vermelho amarronzado ou verde escuro transparente</td>
            </tr>
            <tr>
                <td class="name">Turmalina</td>
                <td class="value">verde, azul, marrom ou vermelho claro transparente</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function Gema500Po() {
    var template = `<div class="card" id="card">
    <div class="card-title">Gemas de 500 Po</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nome</td>
                <td class="value">Descrição</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">Alexandrita</td>
                <td class="value">verde escuro transparente</td>
            </tr>
            <tr>
                <td class="name">Água-marinha</td>
                <td class="value">azul esverdeado claro transparente</td>
            </tr>
            <tr>
                <td class="name">Pérola negra</td>
                <td class="value">preto puro opaco</td>
            </tr>
            <tr>
                <td class="name">Espinela azul</td>
                <td class="value">azul escuro transparente</td>
            </tr>
            <tr>
                <td class="name">Peridoto</td>
                <td class="value">verde oliva vívido transparente</td>
            </tr>
            <tr>
                <td class="name">Topázio</td>
                <td class="value">amarelo-ouro transparente</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function Gema1000Po() {
    var template = `<div class="card" id="card">
    <div class="card-title">Gemas de 1000 Po</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nome</td>
                <td class="value">Descrição</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">Opala negra</td>
                <td class="value">verde escuro translúcido com preto mosqueado e manchas douradas</td>
            </tr>
            <tr>
                <td class="name">Safira azul</td>
                <td class="value">de azul claro a azul médio transparente</td>
            </tr>
            <tr>
                <td class="name">Esmeralda</td>
                <td class="value">verde escuro brilhante transparente</td>
            </tr>
            <tr>
                <td class="name">Opala de fogo</td>
                <td class="value">vermelho fogo translúcido</td>
            </tr>
            <tr>
                <td class="name">Opala</td>
                <td class="value">azul claro translúcido mosqueado de verde e dourado</td>
            </tr>
            <tr>
                <td class="name">Rubi estrela</td>
                <td class="value">rubi translucido com centro branco em forma de estrela</td>
            </tr>
            <tr>
                <td class="name">Safira estrela</td>
                <td class="value">safira azul translúcida com centro branco em forma de estrela</td>
            </tr>
            <tr>
                <td class="name">Safira amarela</td>
                <td class="value">amarelo fogo ou amarelo esverdeado transparente</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function Gema5000Po() {
    var template = `<div class="card" id="card">
    <div class="card-title">Gemas de 5000 Po</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nome</td>
                <td class="value">Descrição</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">Safira negra</td>
                <td class="value">preto lustroso transparente com destaques brilhantes</td>
            </tr>
            <tr>
                <td class="name">Diamante</td>
                <td class="value">azul claro, canário, rosa, marrom ou azul transparente</td>
            </tr>
            <tr>
                <td class="name">Jacinto</td>
                <td class="value">laranja fogo transparente</td>
            </tr>
            <tr>
                <td class="name">Rubi</td>
                <td class="value">de vermelho claro a carmesim escuro transparente</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};