    var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida Nutricionista";

    /* docuemnt.QuerySelectorAll seleciona todas as classes .paciente do documento, caso o contrário
     só é selecionada a primeira classe lida*/

    var pacientes = document.querySelectorAll(".paciente")

    /* looping recebendo variável i que recebe 0, i percorre toda a extenção do Array e depois aumenta mais um número
    evitando que o looping seja infinito*/

    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdPeso = paciente.querySelector(".info-peso");
      var tdAltura = paciente.querySelector(".info-altura");

      var tdImc = paciente.querySelector(".info-imc")

      // A altura e o peso recebem o conteudo de dentro de TdPeso e TdAltura

      var peso = tdPeso.textContent;
      var altura = tdAltura.textContent;

      // Variáveis codicionais

      var alturaEhValida = validaAltura(altura);
      var pesoEhValido = validaPeso(peso);
      // Se o peso é menor ou igual que zero ou maior que 1000, então ele é inválido

      if (!pesoEhValido) {
        console.log("Peso inválido!");
        tdImc.textContent = "Peso inválido!"
        pesoEhValido = false

        paciente.classList.add("paciente-invalido");
      }

      // Se a altura é menor ou igual que zero ou maior que 3 metros, então ela é inválida, é adicionado o texto "Altura Inválida" ao campo


      if (!alturaEhValida) {
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválida!"
        alturaEhValida = false
        paciente.classList.add("paciente-invalido");
      }

      // Se altura é válida e peso é válido, então calcula o IMC

      if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
      }
    }

    function calculaImc(peso, altura) {
      var imc = 0;
      imc = peso / (altura * altura);
      return imc.toFixed(2);
    }

    function validaAltura(altura) {
      if (altura <= 0 || altura >= 3.0) {
        return false;
      } else {
        return true;
      }
    }

    function validaPeso(peso) {
      if (peso <= 0 || peso >= 1000) {
        return false;
      } else {
        return true;
      }
    }
