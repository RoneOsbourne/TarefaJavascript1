// ******************************* 
// COMECE AQUI SUA TAREFA!
// *******************************
//
// Instruções para a Tarefa de Javascript.
//
// A idéia dessa tarefa é pegar um array de nomes
// E fazê-lo imprimir ou Olá 'Nome' ou Tchau 'Nome' na console.
// O prograva deve dizer "Olá" para qualquer nome, exceto aqueles que começam
// com "J" ou "j". Nestes casos, o programa deve dizer "Tchau". Então, 
// a saída finaç no console deve ser parecida com isso:
/*
Olá Rodrigo
Tchau João
Tchau José
Tchau Jason
Olá Paulo
Olá Fábio
Olá Luiz
Olá Paula
Olá Laura
Tchau Julio
---------------------------------------------------------------------
ATENÇÃO!!! ATENÇÃO!!!
O código não funciona, assim como está! É SUA função fazê-lo funcionar
como descrito no AVA e nos passos comentados nos arquivos, para completar
esta tarefa.
ATENÇÃO!!! ATENÇÃO!!!
----------------------------------------------------------------------
*/

// PASSO 1: (NADA A SER FEITO, JÁ FOI FEITO PARA VOCÊ)
// Envolva o conteúdo de script.js dentro de um IIFE
//IIFE (Immediately Invoked Function Expression) função JScript que executa assim que definida.
// Como visto em aula ( envolver com (function() {})() )
// (Atenção, O passo 2 deve ser feito no arquivo DigaOla.js.)
(function () {

var nomes = ["Rodrigo", "João", "Jpsé", "Jason", "Paulo", "Fábio", "Luiz", "Paula", "Laura", "Julio"];

// PASSO 6:
// Itere pelos nomes do array e diga ou  'Olá' ou 'Tchau'
// usando o método 'dizer' dos "namespaces" digaOi ou digaTchau
// conforme visto em aula
  for (var i = 0; i < nomes.length; i++) {  /* Insira aqui as partes do 'for' para iterar pelo array - use o for clássico */
  //inicialização  condição      incremento
    
  nomes.toLowerCase();
  
  // PASSO 7: 
  // Obtenha a primeira da letra do nome atual no laço (ex.: nomes[i])
  // Use o método da string 'charAt'. Como queremos nomes que começam
  // tanto com maiúscula ou minuscula 'J'/'j', chame o método
  // 'toLowerCase', que também faz parte do objeto string, no resultado
  // assim podemos comparar a letra resultante somente com o 'j', mais adiante.
  // Você pode procurar informações sobre esses métodos na Mozilla Developer Network
  // se estiver em dúvidas sobre como utilizá-los.
  // var primeiraLetra =  /* aqui você deve obter a primeira letra em minúscula */

  // PASSO 8: 
  // Compare a 'primeiraLetra' obtida no PASSO 11 com 'j' (minúscula)
  // 'j'. Se elas forem iguais, chame o método 'dizer' do 'digaTchau' com o nome atual
  // no laço. Senão, chame o método 'dizer' do digaOi, com o nome atual do laço.
  if (nomes.charAt(i) == 'j') { /* preencha a condição aqui */
    digaTchau.dizer // digaTchau.xxxxxxxx
  } else {
    digaOi.dizer// digaOi.xxxxxxxxx
  }
}

// Este é o final da IIFE
})();