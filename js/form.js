var botaoAdicionar = document.querySelector('#adicionar-paciente');

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function criaTd(classe, dado) {

    var td = document.createElement('td');
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function criaTr(paciente) {

    var tr = document.createElement('tr');
    tr.classList.add("paciente");

    tr.appendChild(criaTd("info-nome", paciente.nome));
    tr.appendChild(criaTd("info-peso", paciente.peso));
    tr.appendChild(criaTd("info-altura", paciente.altura));
    tr.appendChild(criaTd("info-gordura", paciente.gordura));
    tr.appendChild(criaTd("info-imc", paciente.imc));

    return tr;
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome.length == 0) {
        erros.push("Nome invalido");
    }

    if(paciente.peso.length == 0 || !validaPeso(paciente.peso)) {
        erros.push("Peso invalido");
    }

    if(paciente.altura.length == 0 || !validaAltura(paciente.altura)) {
        erros.push("Altura invalida");
    }

    if(paciente.gordura.length == 0) {
        erros.push("Porcentagem de gordura invalida");
    }

    return erros;
}

function exibeMensagensErro(erros) {

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {

        var li = document.createElement("li");

        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaPacientesNaTabela(paciente) {

    var tr = criaTr(paciente);
    var tabela = document.querySelector('#tabela');
    tabela.appendChild(tr);
}

botaoAdicionar.addEventListener('click', function(event){

    event.preventDefault();

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    var form = document.querySelector('#form-adiciona');

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    if(erros.length > 0) {

        exibeMensagensErro(erros);
        return;
    }

    adicionaPacientesNaTabela(paciente);

    form.reset();

})
