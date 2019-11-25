var choice = document.getElementById('choice');
var tab = document.getElementById('tab');


document.querySelector('#btn-submit').addEventListener('click', e => {

    choiceValue = parseInt(choice.value);

    if (choiceValue == 0) {
        clear();
    } else if (choiceValue == 1) {
        xpND();
    } else if (choiceValue == 2) {
        xpDay();
    } else if (choiceValue == 3) {
        xpLvl();
    } else if (choiceValue == 4) {
        xpDif();
    } else if (choiceValue == 5) {
        xpMul();
    }

});

function clear() {
    tab.innerHTML = '';
}

function xpND() {
    var template = `<div class="card lf" id="card">
    <div class="card-title">Experiência por ND</div>
    <table>
        <thead>
            <tr>
                <td class="name">ND</td>
                <td class="value">XP</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">0</td>
                <td class="value">0 ou 10</td>
            </tr>
            <tr>
                <td class="name">1/8</td>
                <td class="value">25</td>
            </tr>
            <tr>
                <td class="name">1/4</td>
                <td class="value">50</td>
            </tr>
            <tr>
                <td class="name">1/2</td>
                <td class="value">100</td>
            </tr>
            <tr>
                <td class="name">1</td>
                <td class="value">200</td>
            </tr>
            <tr>
                <td class="name">2</td>
                <td class="value">450</td>
            </tr>
            <tr>
                <td class="name">3</td>
                <td class="value">700</td>
            </tr>
            <tr>
                <td class="name">4</td>
                <td class="value">1.100</td>
            </tr>
            <tr>
                <td class="name">5</td>
                <td class="value">1.800</td>
            </tr>
            <tr>
                <td class="name">6</td>
                <td class="value">2.300</td>
            </tr>
            <tr>
                <td class="name">7</td>
                <td class="value">2.900</td>
            </tr>
            <tr>
                <td class="name">8</td>
                <td class="value">3.900</td>
            </tr>
            <tr>
                <td class="name">9</td>
                <td class="value">5.000</td>
            </tr>
            <tr>
                <td class="name">10</td>
                <td class="value">5.900</td>
            </tr>
            <tr>
                <td class="name">11</td>
                <td class="value">7.200</td>
            </tr>
            <tr>
                <td class="name">12</td>
                <td class="value">8.400</td>
            </tr>
            <tr>
                <td class="name">13</td>
                <td class="value">10.000</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="card rg" id="card">
    <div class="card-title">Experiência por ND</div>
    <table>
        <thead>
            <tr>
                <td class="name">ND</td>
                <td class="value">XP</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">14</td>
                <td class="value">11.500</td>
            </tr>
            <tr>
                <td class="name">15</td>
                <td class="value">13.000</td>
            </tr>
            <tr>
                <td class="name">16</td>
                <td class="value">15.000</td>
            </tr>
            <tr>
                <td class="name">17</td>
                <td class="value">18.000</td>
            </tr>
            <tr>
                <td class="name">18</td>
                <td class="value">20.000</td>
            </tr>
            <tr>
                <td class="name">19</td>
                <td class="value">22.000</td>
            </tr>
            <tr>
                <td class="name">20</td>
                <td class="value">25.000</td>
            </tr>
            <tr>
                <td class="name">21</td>
                <td class="value">33.000</td>
            </tr>
            <tr>
                <td class="name">22</td>
                <td class="value">41.000</td>
            </tr>
            <tr>
                <td class="name">23</td>
                <td class="value">50.000</td>
            </tr>
            <tr>
                <td class="name">24</td>
                <td class="value">62.000</td>
            </tr>
            <tr>
                <td class="name">25</td>
                <td class="value">75.000</td>
            </tr>
            <tr>
                <td class="name">26</td>
                <td class="value">90.000</td>
            </tr>
            <tr>
                <td class="name">27</td>
                <td class="value">105.000</td>
            </tr>
            <tr>
                <td class="name">28</td>
                <td class="value">120.000</td>
            </tr>
            <tr>
                <td class="name">29</td>
                <td class="value">135.000</td>
            </tr>
            <tr>
                <td class="name">30</td>
                <td class="value">155.000</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function xpDay() {
    var template = `<div class="card" id="card">
    <div class="card-title">Experiência por dia</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nível</td>
                <td class="value">Xp por Dia</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">1</td>
                <td class="value">300</td>
            </tr>
            <tr>
                <td class="name">2</td>
                <td class="value">600</td>
            </tr>
            <tr>
                <td class="name">3</td>
                <td class="value">1.200</td>
            </tr>
            <tr>
                <td class="name">4</td>
                <td class="value">1.700</td>
            </tr>
            <tr>
                <td class="name">5</td>
                <td class="value">3.500</td>
            </tr>
            <tr>
                <td class="name">6</td>
                <td class="value">4.000</td>
            </tr>
            <tr>
                <td class="name">7</td>
                <td class="value">5.000</td>
            </tr>
            <tr>
                <td class="name">8</td>
                <td class="value">6.000</td>
            </tr>
            <tr>
                <td class="name">9</td>
                <td class="value">7.500</td>
            </tr>
            <tr>
                <td class="name">10</td>
                <td class="value">9.000</td>
            </tr>
            <tr>
                <td class="name">11</td>
                <td class="value">10.500</td>
            </tr>
            <tr>
                <td class="name">12</td>
                <td class="value">11.500</td>
            </tr>
            <tr>
                <td class="name">13</td>
                <td class="value">13.500</td>
            </tr>
            <tr>
                <td class="name">14</td>
                <td class="value">15.000</td>
            </tr>
            <tr>
                <td class="name">15</td>
                <td class="value">18.000</td>
            </tr>
            <tr>
                <td class="name">16</td>
                <td class="value">20.000</td>
            </tr>
            <tr>
                <td class="name">17</td>
                <td class="value">25.000</td>
            </tr>
            <tr>
                <td class="name">18</td>
                <td class="value">27.000</td>
            </tr>
            <tr>
                <td class="name">19</td>
                <td class="value">30.000</td>
            </tr>
            <tr>
                <td class="name">20</td>
                <td class="value">40.000</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function xpLvl() {
    var template = `<div class="card lf" id="card">
    <div class="card-title">Experiência por Nivel</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nível</td>
                <td class="value">Xp</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">1</td>
                <td class="value">0</td>
            </tr>
            <tr>
                <td class="name">2</td>
                <td class="value">300</td>
            </tr>
            <tr>
                <td class="name">3</td>
                <td class="value">900</td>
            </tr>
            <tr>
                <td class="name">4</td>
                <td class="value">2.700</td>
            </tr>
            <tr>
                <td class="name">5</td>
                <td class="value">6.500</td>
            </tr>
            <tr>
                <td class="name">6</td>
                <td class="value">14.000</td>
            </tr>
            <tr>
                <td class="name">7</td>
                <td class="value">23.000</td>
            </tr>
            <tr>
                <td class="name">8</td>
                <td class="value">34.000</td>
            </tr>
            <tr>
                <td class="name">9</td>
                <td class="value">48.000</td>
            </tr>
            <tr>
                <td class="name">10</td>
                <td class="value">64.000</td>
            </tr>
            <tr>
                <td class="name">11</td>
                <td class="value">85.000</td>
            </tr>
            <tr>
                <td class="name">12</td>
                <td class="value">100.000</td>
            </tr>
            <tr>
                <td class="name">13</td>
                <td class="value">120.000</td>
            </tr>
            <tr>
                <td class="name">14</td>
                <td class="value">140.000</td>
            </tr>
            <tr>
                <td class="name">15</td>
                <td class="value">165.000</td>
            </tr>
        </tbody>
    </table>
</div>
<div class="card rg" id="card">
    <div class="card-title">Experiência por Nivel</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nível</td>
                <td class="value">Xp</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">16</td>
                <td class="value">195.000</td>
            </tr>
            <tr>
                <td class="name">17</td>
                <td class="value">225.000</td>
            </tr>
            <tr>
                <td class="name">18</td>
                <td class="value">265.000</td>
            </tr>
            <tr>
                <td class="name">19</td>
                <td class="value">305.000</td>
            </tr>
            <tr>
                <td class="name">20</td>
                <td class="value">355.000</td>
            </tr>
            <tr>
                <td class="name">21</td>
                <td class="value">410.000</td>
            </tr>
            <tr>
                <td class="name">22</td>
                <td class="value">470.000</td>
            </tr>
            <tr>
                <td class="name">23</td>
                <td class="value">540.000</td>
            </tr>
            <tr>
                <td class="name">24</td>
                <td class="value">620.000</td>
            </tr>
            <tr>
                <td class="name">25</td>
                <td class="value">710.000</td>
            </tr>
            <tr>
                <td class="name">26</td>
                <td class="value">810.000</td>
            </tr>
            <tr>
                <td class="name">27</td>
                <td class="value">950.000</td>
            </tr>
            <tr>
                <td class="name">28</td>
                <td class="value">1.200.000</td>
            </tr>
            <tr>
                <td class="name">29</td>
                <td class="value">1.500.000</td>
            </tr>
            <tr>
                <td class="name">30</td>
                <td class="value">1.800.000</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function xpDif() {
    var template = `<div class="card-dif" id="card">
    <div class="card-title">Experiência por Dificuldade</div>
    <table>
        <thead>
            <tr>
                <td class="name">Nível</td>
                <td class="value">Fácil</td>
                <td class="value">Médio</td>
                <td class="value">Difícil</td>
                <td class="value">Mortal</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">1</td>
                <td class="value">25</td>
                <td class="value">50</td>
                <td class="value">75</td>
                <td class="value">100</td>
            </tr>
            <tr>
                <td class="name">2</td>
                <td class="value">50</td>
                <td class="value">100</td>
                <td class="value">150</td>
                <td class="value">200</td>
            </tr>
            <tr>
                <td class="name">3</td>
                <td class="value">75</td>
                <td class="value">150</td>
                <td class="value">225</td>
                <td class="value">400</td>
            </tr>
            <tr>
                <td class="name">4</td>
                <td class="value">125</td>
                <td class="value">250</td>
                <td class="value">375</td>
                <td class="value">500</td>
            </tr>
            <tr>
                <td class="name">5</td>
                <td class="value">250</td>
                <td class="value">500</td>
                <td class="value">750</td>
                <td class="value">1.100</td>
            </tr>
            <tr>
                <td class="name">6</td>
                <td class="value">300</td>
                <td class="value">600</td>
                <td class="value">900</td>
                <td class="value">1.400</td>
            </tr>
            <tr>
                <td class="name">7</td>
                <td class="value">350</td>
                <td class="value">750</td>
                <td class="value">1.100</td>
                <td class="value">1.700</td>
            </tr>
            <tr>
                <td class="name">8</td>
                <td class="value">450</td>
                <td class="value">900</td>
                <td class="value">1.400</td>
                <td class="value">2.100</td>
            </tr>
            <tr>
                <td class="name">9</td>
                <td class="value">550</td>
                <td class="value">1.100</td>
                <td class="value">1.600</td>
                <td class="value">2.400</td>
            </tr>
            <tr>
                <td class="name">10</td>
                <td class="value">600</td>
                <td class="value">1.200</td>
                <td class="value">1.900</td>
                <td class="value">2.800</td>
            </tr>
            <tr>
                <td class="name">11</td>
                <td class="value">800</td>
                <td class="value">1.600</td>
                <td class="value">2.400</td>
                <td class="value">3.600</td>
            </tr>
            <tr>
                <td class="name">12</td>
                <td class="value">1.000</td>
                <td class="value">2.000</td>
                <td class="value">3.000</td>
                <td class="value">4.500</td>
            </tr>
            <tr>
                <td class="name">13</td>
                <td class="value">1.100</td>
                <td class="value">2.200</td>
                <td class="value">3.400</td>
                <td class="value">5.100</td>
            </tr>
            <tr>
                <td class="name">14</td>
                <td class="value">1.250</td>
                <td class="value">2.500</td>
                <td class="value">3.800</td>
                <td class="value">5.700</td>
            </tr>
            <tr>
                <td class="name">15</td>
                <td class="value">1.400</td>
                <td class="value">2.800</td>
                <td class="value">4.300</td>
                <td class="value">6.400</td>
            </tr>
            <tr>
                <td class="name">16</td>
                <td class="value">1.600</td>
                <td class="value">3.200</td>
                <td class="value">4.800</td>
                <td class="value">7.200</td>
            </tr>
            <tr>
                <td class="name">17</td>
                <td class="value">2.000</td>
                <td class="value">3.900</td>
                <td class="value">5.900</td>
                <td class="value">8.800</td>
            </tr>
            <tr>
                <td class="name">18</td>
                <td class="value">2.100</td>
                <td class="value">4.200</td>
                <td class="value">6.300</td>
                <td class="value">9.500</td>
            </tr>
            <tr>
                <td class="name">19</td>
                <td class="value">2.400</td>
                <td class="value">4.900</td>
                <td class="value">7.300</td>
                <td class="value">10.900</td>
            </tr>
            <tr>
                <td class="name">20</td>
                <td class="value">2.800</td>
                <td class="value">5.700</td>
                <td class="value">8.500</td>
                <td class="value">12.700</td>
            </tr>

        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};

function xpMul() {
    var template = `<div class="card" id="card">
    <div class="card-title">Multiplicador de Experiência</div>
    <table>
        <thead>
            <tr>
                <td class="name">Quantidade de Monstros</td>
                <td class="value">Multiplicador de XP</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="name">Solitário</td>
                <td class="value">-----------</td>
            </tr>
            <tr>
                <td class="name">Par (2 Monstros)</td>
                <td class="value">x1.5</td>
            </tr>
            <tr>
                <td class="name">Grupo (3 a 6 Monstros)</td>
                <td class="value">x2</td>
            </tr>
            <tr>
                <td class="name">Gangue (7 a 10 Monstros)</td>
                <td class="value">x2.5</td>
            </tr>
            <tr>
                <td class="name">Bando (11 a 14 Monstros)</td>
                <td class="value">x3</td>
            </tr>
            <tr>
                <td class="name">Horda (15 ou mais Monstros)</td>
                <td class="value">x4</td>
            </tr>
        </tbody>
    </table>
</div>`;
    tab.innerHTML = template;
};