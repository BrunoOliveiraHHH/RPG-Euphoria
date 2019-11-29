var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");

btn.onclick = function() {
    modal.style.display = "block";
    modal.innerHTML = template;
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var template = `<form method="POST" class="inputsCRUD">
<input type="text" id="nameCRUD" class="form-control form-control-sm inputCRUD">
<select id="typeCRUD" class="custom-select custom-select-sm mb-3 inputCRUD">
    <option value="0">Tipo</option>
    <option value="1">Npc</option>
    <option value="2">Monstro</option>
    <option value="3">Jogador</option>
</select>
<input type="text" class="form-control form-control-sm inputCRUD" id="hpCRUD">
<input type="text" id="caCRUD" class="form-control form-control-sm inputCRUD">
<input type="text" class="form-control form-control-sm inputCRUD" id="iniCRUD">
<button type="button" id="btn-submit" onclick="dataLinha();" class="btn-submit-reset">
    <img src="assets/img/confirm.png" class="imgConfirm" alt="Confirmar">
</button>
</form>`;