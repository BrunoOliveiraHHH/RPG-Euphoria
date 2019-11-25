var choice = document.getElementById('choice');
var tab = document.getElementById('tab');


document.querySelector('#btn-submit').addEventListener('click', e => {

    choiceValue = parseInt(choice.value);

    if (choiceValue == 0) {
        clear();
    } else if (choiceValue == 1) {
        modND();
    } else if (choiceValue == 2) {
        modVH();
    } else if (choiceValue == 3) {
        modLvl();
    }

});

function clear() {
    tab.innerHTML = '';
}

function modND() {
    var template = `<div class="card lf" id="card">
    <div class="card-title">Modificador por ND</div>
    <table>
        <thead>
            <tr>
                <td class="name">ND</td>
                <td class="value">Modificador de BP</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">0</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">1/8</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">1/4</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">1/2</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">1</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">2</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">3</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">4</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">5</td>
                <td class="value">+3</td>
            </tr>
            <tr>
                <td class="name">6</td>
                <td class="value">+3</td>
            </tr>
            <tr>
                <td class="name">7</td>
                <td class="value">+3</td>
            </tr>
            <tr>
                <td class="name">8</td>
                <td class="value">+3</td>
            </tr>
            <tr>
                <td class="name">9</td>
                <td class="value">+4</td>
            </tr>
            <tr>
                <td class="name">10</td>
                <td class="value">+4</td>
            </tr>
            <tr>
                <td class="name">11</td>
                <td class="value">+4</td>
            </tr>
            <tr>
                <td class="name">12</td>
                <td class="value">+4</td>
            </tr>
            <tr>
                <td class="name">13</td>
                <td class="value">+5</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="card rg" id="card">
    <div class="card-title">Modificador por ND</div>
    <table>
        <thead>
            <tr>
                <td class="name">ND</td>
                <td class="value">Modificador de BP</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">14</td>
                <td class="value">+5</td>
            </tr>
            <tr>
                <td class="name">15</td>
                <td class="value">+5</td>
            </tr>
            <tr>
                <td class="name">16</td>
                <td class="value">+5</td>
            </tr>
            <tr>
                <td class="name">17</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">18</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">19</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">20</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">21</td>
                <td class="value">+7</td>
            </tr>
            <tr>
                <td class="name">22</td>
                <td class="value">+7</td>
            </tr>
            <tr>
                <td class="name">23</td>
                <td class="value">+7</td>
            </tr>
            <tr>
                <td class="name">24</td>
                <td class="value">+7</td>
            </tr>
            <tr>
                <td class="name">25</td>
                <td class="value">+8</td>
            </tr>
            <tr>
                <td class="name">26</td>
                <td class="value">+8</td>
            </tr>
            <tr>
                <td class="name">27</td>
                <td class="value">+8</td>
            </tr>
            <tr>
                <td class="name">28</td>
                <td class="value">+8</td>
            </tr>
            <tr>
                <td class="name">29</td>
                <td class="value">+9</td>
            </tr>
            <tr>
                <td class="name">30</td>
                <td class="value">+9</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function modVH() {
    var template = `<div class="card" id="card">
    <div class="card-title">Modificador por Valor de Habilidade</div>
    <table>
        <thead>
            <tr>
                <td class="name">Valor de Habilidade</td>
                <td class="value">Modificador da Habilidade</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">1</td>
                <td class="value">-5</td>
            </tr>
            <tr>
                <td class="name">2-3</td>
                <td class="value">-4</td>
            </tr>
            <tr>
                <td class="name">4-5</td>
                <td class="value">-3</td>
            </tr>
            <tr>
                <td class="name">6-7</td>
                <td class="value">-2</td>
            </tr>
            <tr>
                <td class="name">8-9</td>
                <td class="value">-1</td>
            </tr>
            <tr>
                <td class="name">10-11</td>
                <td class="value">0</td>
            </tr>
            <tr>
                <td class="name">12-13</td>
                <td class="value">+1</td>
            </tr>
            <tr>
                <td class="name">14-15</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">16-17</td>
                <td class="value">+3</td>
            </tr>
            <tr>
                <td class="name">18-19</td>
                <td class="value">+4</td>
            </tr>
            <tr>
                <td class="name">20-21</td>
                <td class="value">+5</td>
            </tr>
            <tr>
                <td class="name">22-23</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">24-25</td>
                <td class="value">+7</td>
            </tr>
            <tr>
                <td class="name">26-27</td>
                <td class="value">+8</td>
            </tr>
            <tr>
                <td class="name">28-29</td>
                <td class="value">+9</td>
            </tr>
            <tr>
                <td class="name">30</td>
                <td class="value">+10</td>
            </tr>
        </tbody>
    </table>
</div>
`;
    tab.innerHTML = template;
};

function modLvl() {
    var template = `<div class="card lf" id="card">
    <div class="card-title">Modificador por Nivel</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nível</td>
                <td class="value">Modificador de BP</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">1</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">2</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">3</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">4</td>
                <td class="value">+2</td>
            </tr>
            <tr>
                <td class="name">5</td>
                <td class="value">+3</td>
            </tr>
            <tr>
                <td class="name">6</td>
                <td class="value">+3</td>
            </tr>
            <tr>
                <td class="name">7</td>
                <td class="value">+3</td>
            </tr>
            <tr>
                <td class="name">8</td>
                <td class="value">+3</td>
            </tr>
            <tr>
                <td class="name">9</td>
                <td class="value">+4</td>
            </tr>
            <tr>
                <td class="name">10</td>
                <td class="value">+4</td>
            </tr>
            <tr>
                <td class="name">11</td>
                <td class="value">+4</td>
            </tr>
            <tr>
                <td class="name">12</td>
                <td class="value">+4</td>
            </tr>
            <tr>
                <td class="name">13</td>
                <td class="value">+5</td>
            </tr>
            <tr>
                <td class="name">14</td>
                <td class="value">+5</td>
            </tr>
            <tr>
                <td class="name">15</td>
                <td class="value">+5</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="card rg" id="card">
    <div class="card-title">Modificador por Nivel</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nível</td>
                <td class="value">Modificador de BP</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">16</td>
                <td class="value">+5</td>
            </tr>
            <tr>
                <td class="name">17</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">18</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">19</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">20</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">21</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">22</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">23</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">24</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">25</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">26</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">27</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">28</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">29</td>
                <td class="value">+6</td>
            </tr>
            <tr>
                <td class="name">30</td>
                <td class="value">+6</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};