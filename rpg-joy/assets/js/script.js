var cont = 0;
var data = [];
var edicao = false;

function addLinha() {
    let nomeCRUD = document.getElementById("nomePersonagem");
    let classeCRUD = document.getElementById("classeEnivel");
    let antecedentesCRUD = document.getElementById("antecedente");
    let nomeJogadorCRUD = document.getElementById("nomeJogador");
    let racaCRUD = document.getElementById("raca");
    let tendenciaCRUD = document.getElementById("tendencia");
    let ptsExpCRUD = document.getElementById("pontosExp");

    // montando um objeto json
    let json = {
        nomeCRUD,
        classeCRUD,
        antecedentesCRUD,
        nomeJogadorCRUD,
        racaCRUD,
        tendenciaCRUD,
        ptsExpCRUD
    };

    //validando os campos
    if (json.nomeCRUD.value.trim() == "") {
        alert("O campo 'Nome' deve ser preenchido!");
    } else if (json.classeCRUD.value.trim() == "") {
        alert("O campo 'HP' deve ser preenchido!");
    } else if (json.caCRUD.value.trim() == "") {
        alert("O campo 'CA' deve ser preenchido!");
    } else if (json.iniCRUD.value.trim() == "") {
        alert("O campo 'Iniciativa' deve ser preenchido");
    } else {
        //adicionando os objetos na lista
        data.forEach(task => {
            cont = cont + 1;
            let body = document.querySelector(".table tbody");
            let item = document.createElement("tr");
            item.id = `${cont}`;
            item.className = "tr";

            nameCRUDvalue = nameCRUD.value;
            typeCRUDvalue = parseInt(typeCRUD.value);
            caCRUDvalue = caCRUD.value;
            hpCRUDvalue = hpCRUD.value;
            iniCRUDvalue = iniCRUD.value;

            let template = `
                
                <td id="name${cont}">${nameCRUDvalue}</td>`;

            if (typeCRUDvalue === 1) {
                typeCRUDvalue = "Npc";
                type = 1;
            } else if (typeCRUDvalue === 2) {
                typeCRUDvalue = "Monstro";
                type = 2;
            } else {
                typeCRUDvalue = "Jogador";
                type = 3;
            }

            template += `
                <td id="type${cont}" value="${type}">${typeCRUDvalue}</td>
                <td id="hp${cont}">${hpCRUDvalue}</td>
                <td id="ca${cont}">${caCRUDvalue}</td>
                <td id="ini${cont}">${iniCRUDvalue}</td>
                <td class="flexbox"><button type="button" onclick="funcaoCriaEdit('${cont}');" class="btn-submit-reset" id="btn-edit"><img src="assets/img/edit.png" class="imgEdit"></button><button type="button" onclick="excluirDados(this)" class="btn-submit-reset" id="btn-delete"><img src="assets/img/delete.png" class="imgDelete"></button></td>
                `;

            item.innerHTML = template;

            body.append(item);

            nameCRUD.value = "";
            typeCRUD.value = "0";
            caCRUD.value = "";
            hpCRUD.value = "";
            type = "";
            iniCRUD.value = "";
        });
    }
}

function excluirDados(element) {
    element.parentElement.parentElement.remove();
}

function funcaoCriaEdit(trId) {
    if (edicao) {
        alert(
            "Uma edição já está em andamento, salve-a primeiro e tente novamente."
        );
    } else {
        let item = document.getElementById(trId);
        let body = document.querySelector(".table tbody");

        let nameCRUD = document.getElementById("name" + trId);
        let typeCRUD = parseInt(
            document.getElementById("type" + trId).attributes.value.nodeValue
        );
        let caCRUD = document.getElementById("ca" + trId);
        let hpCRUD = document.getElementById("hp" + trId);
        let iniCRUD = document.getElementById("ini" + trId);

        item.innerHTML = templateForm(
            trId,
            nameCRUD.innerText,
            typeCRUD,
            caCRUD.innerText,
            hpCRUD.innerText,
            iniCRUD.innerText
        );

        body.appendChild(item);
    }
}

function templateForm(trId, nameCRUD, typeCRUD, caCRUD, hpCRUD, iniCRUD) {
    let template = "";
    template = `
        <td><input id="name${trId}" type="text" value="${nameCRUD}" class="form-control form-control-sm"></td>`;

    edicao = true;

    if (typeCRUD == 1) {
        template += `
                <td>   
                    <select id="type${trId}" class="custom-select custom-select-sm mb-3">
                                    <option value="0">Tipo</option>
                                    <option value="1" selected>Npc</option>
                                    <option value="2">Monstro</option>
                                    <option value="3">Jogador</option>
                    </select>
                </td>`;
    } else if (typeCRUD == 2) {
        template += `
                <td>   
                <select id="type${trId}" class="custom-select custom-select-sm mb-3">
                                    <option value="0">Tipo</option>
                                    <option value="1">Npc</option>
                                    <option value="2" selected>Monstro</option>
                                    <option value="3">Jogador</option>
                    </select>
                </td>`;
    } else {
        template += `
                <td>   
                <select id="type${trId}" class="custom-select custom-select-sm mb-3">
                                    <option value="0">Tipo</option>
                                    <option value="1">Npc</option>
                                    <option value="2">Monstro</option>
                                    <option value="2" selected>Jogador</option>
                    </select>
                </td>`;
    }

    template += `            
        <td><input id="hp${trId}" type="text" value="${hpCRUD}" class="form-control form-control-sm"></td>
        <td><input id="ca${trId}" type="text" value="${caCRUD}" class="form-control form-control-sm"></td>
        <td><input id="ini${trId}" type="text" value="${iniCRUD}" class="form-control form-control-sm"></td>
        <td><button type="button" id="btn-submit" onclick="editarDados('${trId}');" class="btn-submit-reset"><img src="assets/img/confirm.png" class="imgConfirm" alt="Confirmar"></button></td>
        `;

    return template;
}

function editarDados(trId) {
    let item = document.getElementById(trId);
    let body = document.querySelector(".table tbody");

    let nameCRUD = document.getElementById("name" + trId);
    let typeCRUD = document.getElementById("type" + trId);
    let caCRUD = document.getElementById("ca" + trId);
    let hpCRUD = document.getElementById("hp" + trId);
    let iniCRUD = document.getElementById("ini" + trId);
    let type;

    nameCRUDvalue = nameCRUD.value;
    typeCRUDvalue = parseInt(typeCRUD.value);
    caCRUDvalue = caCRUD.value;
    hpCRUDvalue = hpCRUD.value;
    iniCRUDvalue = iniCRUD.value;

    //validando os campos
    if (nameCRUDvalue.trim() == "") {
        alert("O campo 'Nome' deve ser preenchido!");
    } else if (typeCRUDvalue == 0) {
        alert("O campo 'Tipo' deve ser preenchido!");
    } else if (hpCRUDvalue == "") {
        alert("O campo 'HP' deve ser preenchido!");
    } else if (caCRUDvalue == "") {
        alert("O campo 'CA' deve ser preenchido!");
    } else if (iniCRUDvalue == "") {
        alert("O campo 'Iniciativa' deve ser preenchido");
    } else {
        if (typeCRUDvalue === 1) {
            typeCRUDvalue = "Npc";
            type = 1;
        } else if (typeCRUDvalue === 2) {
            typeCRUDvalue = "Monstro";
            type = 2;
        } else {
            typeCRUDvalue = "Jogador";
            type = 3;
        }

        let template = `
                <td id="name${trId}">${nameCRUDvalue}</td>
                <td id="type${trId}" value="${type}">${typeCRUDvalue}</td>
                <td id="hp${trId}">${hpCRUDvalue}</td>
                <td id="ca${trId}">${caCRUDvalue}</td>
                <td id="ini${trId}">${iniCRUDvalue}</td>
                <td class="flexbox"><button type="button" onclick="funcaoCriaEdit('${trId}');" class="btn-submit-reset" id="btn-edit"><img src="assets/img/edit.png" class="imgEdit"></button><button type="button" onclick="excluirDados(this)" class="btn-submit-reset" id="btn-delete"><img src="assets/img/delete.png" class="imgDelete"></button></td>
                `;

        item.innerHTML = template;

        body.append(item);
        edicao = false;
    }
}

function dataLinha() {
    data.push({
        id: data.length + 1,
        name: nomeCRUD,
        classe: classeCRUD,
        antedecentes: antecedentesCRUD,
        nomeJogador: hpCRUD,
        raca: racaCRUD,
        tendencia: tendenciaCRUD,
        ptsEXP: ptsExpCRUD
    });

    addLinha();

    data.length = 0;
}