var choice = document.getElementById('choice');
var tab = document.getElementById('tab');


document.querySelector('#btn-submit').addEventListener('click', e => {

    choiceValue = parseInt(choice.value);

    if (choiceValue == 0) {
        clear();
    } else if (choiceValue == 1) {
        comum();
    } else if (choiceValue == 2) {
        incomum();
    } else if (choiceValue == 3) {
        raro();
    } else if (choiceValue == 4) {
        muitoRaro();
    } else if (choiceValue == 5) {
        lendario();
    }

});

function clear() {
    tab.innerHTML = '';
}

function modND() {
    var template = ``;
    tab.innerHTML = template;
};