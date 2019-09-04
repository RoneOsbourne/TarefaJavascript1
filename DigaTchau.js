// ATENÇÃO! Os passos neste arquivo são basicamente os mesmos
// que você fez no arquivo DigaOi.js

// PASSO 4: Envolva todo o conteúdo de DigaTchau.js dentro de uma IIFE
//IIFE (Immediately Invoked Function Expression) função JScript que executa assim que definida.
// conforme visto em aula e conforme script.js. Atribua a função à variavel 'digaTchau'
// Observe o exemplo em: https://github.com/gregori/prog3-exemplos/blob/master/JS/namespaces/js/script1.js
// ou o próprio arquivo script.js (note que aqui você vai atribuir a IIFE ao objeto 'digaTchau').
var digaTchau = (function(){// var digaTchau =
  var nome = nomes;
// PASSO 5: Exponha o método "dizer" conforme visto em aula, dentro 
// da expressão 'return' abaixo.

return {
	dizer: dizer// dizer: .......
});

// NÃO exponha a variável 'saudacao' ao objeto digaTchau
var saudacao = "Tchau";

function dizer(nome) {
  console.log(saudacao + " " + nome);
}
}();

// PASSO 5: aqui vai o final da IIFE
// (Note, PASSOS 6 em diante devem ser executados no arquivo script.js.)