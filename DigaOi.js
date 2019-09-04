// PASSO 2: Envolva todo o conteúdo de DigaOi.js dentro de uma IIFE

//IIFE (Immediately Invoked Function Expression) função JScript que executa assim que definida.


// conforme visto em aula e conforme script.js. Atribua a função à variavel 'digaOi'.
// Observe o exemplo em: https://github.com/gregori/prog3-exemplos/blob/master/JS/namespaces/js/script1.js
// ou o próprio arquivo script.js (note que aqui você vai atribuir a IIFE ao objeto 'digaOi').
var digaOi = (function (){
  var nome = nomes;
 /* aqui vai o início da IIFE */

// PASSO 3: Exponha o método "dizer" conforme visto em aula, dentro 
// da expressão 'return' abaixo.

return {
	dizer: dizer// dizer: .......
});

// NÃO exponha a variável 'saudacao' ao objeto digaOi
var saudacao = "Olá";

function dizer(nome) {
  console.log(saudacao + " " + nome);
 }
}(); // PASSO 4: aqui vai o final da IIFE

// (Note, PASSO 5 deve ser executado no arquivo DigaTchau.js.)
