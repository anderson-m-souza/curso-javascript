var buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        var erroRequest = document.querySelector("#erro-request");

        if(xhr.status == 200) {

            erroRequest.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacientesNaTabela(paciente);
            });
        } else {
            erroRequest.classList.remove("invisivel");
        }

    });

    xhr.send();
});
