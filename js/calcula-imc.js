var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

function calculaImc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso <= 500) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
        tdPeso.textContent = "Peso invalido";
    }
    if (!alturaValida) {
        alturaValida = false;
        tdAltura.textContent = "Altura invalida";
    }
    if (alturaValida && pesoValido) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = "Verifique os dados";
        paciente.classList.add("verificar-dados");
    }
}
