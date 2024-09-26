//var peso = prompt("Qual o peso?")
//var altura = prompt("Qual a aultura?")

//var imc = (peso / (altura * altura)). toFixed(2)

//alert(imc)

//if (imc <= 16.9 ){  
 //  alert("Muito abaixo do peso ")
//}

//else if (imc >= 17 && imc < 18.4 ){ 
//    alert("Abaixo do peso ")
  // }
  // else  if (imc >=18.5 && imc <= 24.9 ){
     //   alert("peso normal ")
//}
 //  else  if (imc >= 25 && imc <=29.9 ){
    //    alert("Acima do peso ")
//}
  // else  if (imc >= 30 && imc <= 34.9 ){
    //    alert("Obesidade grau I ")
//}
 //  else  if (imc >= 35 && imc <= 40 ){
   //     alert("Obesidade grau II ")
//}
  // else  if (imc >= 40  ){
    //    alert("peso normal ")
//}//

//var ListaDeCursos = [ "Programação" , "Emfermagem" , "Estetica" , "Informatica" , "Adiministração" , "Segurança" , "Direito" , "Computaçao"]

//alert( ListaDeCursos[0] )
//alert( ListaDeCursos[1] )
//alert( ListaDeCursos[2] )
//alert( ListaDeCursos[3] )
//alert( ListaDeCursos[4] )
//alert( ListaDeCursos[5] )
//alert( ListaDeCursos[6] )
//alert( ListaDeCursos[7] )


//ListaDeCursos.forEach(curso => alert(curso))
/*for(var i=0; i<=7; i++){
   alert(ListaDeCursos[i])
}
for(var i=90; i>=0; i--){
   alert(i)
}   */      











/*
var nota1 = (prompt("Quantidades de notas?")
var nota1= Number(prompt(" digite a nota 1")
var = Number prompt("digite a nota 2")

alert (nota1 + nota2) 
*/

 



/*
var qtdeNotas = prompt("Quantas notas serão avaliadas?")

var acumuladorNotas = 0; 


for (var i = 1; i<= qtdeNotas; i++){   
   var nota = prmpt("Digite a nota " + i)
   acumuladorNotas = acumuladorNotas + Number(nota)



   alert("A medida é: " + ( acumuladorNotas / Number(qtdeNotas)))

*/   












/* var ListaDePresença =["Maylon", "Aethur", "Ryan", "Raphael", "Maria", "Gabriel", "Macoly", "Dalton", "Patrick"]


//ListaDePresença.forEach(nome => alert(nome + " Faz o curso programação"))


var indiceProcurado = prompt("Digite o indice do aluno que deseja buscar ")
alert( ListaDePresença[indiceProcurado])


*/
/*
var numero = prompt("Digite um  numero ")

for(var  i=0; i=9; i++ ){ 
    alert(i + " x " + numero + " =" + (i * numero))
    */


    //ListaDeJogos = [ "FIFA" , "Call of Duty " , "Red Dead", "CS" ]
    

    //listaDeJogos.pop()
    //listaDeJogos.shitft()
    //listaDeJogos.splice(2,1)
    // listaDeJogos.reverse()


   // var indice = ListaDeJogos.indexOF("FIFA")
   // alert( indice )
    //alert(listaDeJogos)

    //ListaDeJogos.forEach(jogo => alert("Estou jogando " + jogo))


    /*ListaDeJogos = [ "FIFA" , "Call of Duty " , "Red Dead", "CS" ]
    
    var qtdeJogosNovos = prompt("Quantos jogo vc quer adicionar?")

    for(var i=0; i<qtdeJogosNovos; i++){ 
      var jogo = prompt("Digite o nome do jogo")
      ListaDeJogos.push(jogo)
    }

     alert(ListaDeJogos)
     */ 





       /*

     var i = 0, 
     while( 1 < 10 ){   
      alert(i)
      i++ 
     } 
     */

/*
alert("ola seja bem vindo no sistema")



  var operacao = prompt("1-saldo\n2- transferencia\n3- sair do sistema") 
    
var saldo = 10000

if(operacao==1){
   alert("o seu saldo é: " + saldo )
}
if(operacao==2){
  var quantia = prompt("Qual a quantia que voce quer tira ")
  alert( saldo - quantia )
}




saldo = saldo ("Digite a quantia" )





 operação = prompt(" Digite a quantia ")

*/



                                                                                                                 



      



/*

var ListaDeNomes =["Maylon", "Aethur", "Ryan", "Raphael", "Maria", "Gabriel", "Macoly", "Dalton", "Patrick"]


var curso = {
   nome:" Logica De programação", 
  alunos: ListaDeNomes,
  cargaHoraria: 60,
  materia: "Javascript",
  dataInicio: "27/08/2024",
  dataFinal: "29/09/2024",
}
  alert(curso.nome + " é um curso com " + curso.cargaHoraria + "h de carga horaria")
*/

/*

function rotinaDiaria() {
   alert(" acorada ")
   alert(" arrumar a cama ")
   alert(" ir trabalha ")
   alert(" voltar pra casa ")
   alert(" dormi")
} 
*/
/*

function somarNumeros(){ 
var  resultado = num1 + num2
alert(resultado)
}
 somarNumeros(10, 50)


 function saudacao(nome) { 
   alert("  ")
 */
/*
   function somarNumeros(num1, num2, num3){ 
    var num1 = Number(prompt("digite o primeiro numero"))
    var num2 = Number(prompt("digite o segundo numero"))
    var num3 = Number(prompt("digite o terceiro numero"))
    var resultado = num1 + num2 + num3 
    alert (resultado)
   }
    somarNumeros()
   */
/*
    function classificador( parãmetro){

     var numero = prompt("Qualo numero?")
     if (numero>10) { 
       alert(numero + "maior que dez")
     }
      else if (numero==10){ 
        alert(numero + " é igual a dez ")
      }
       else{ 
        alert(numero + " menor que dez")
       }
        }

        classificador()
*/
//var cpf = "70253896681"
//var cpfFormatado = cpf.substring(0,3) + " . " + cpf.substring(3,6) + " . " + cpf


///

//alert(cpfFormatado)








var nome = prompt("Digite seu nome")

alert("Ola seja bem-vindo(a) " + nome )
 
var operação = prompt("1-filmes desponiveis\n2- filmes que serao lançados\n3-Sair do sistema ")
 
var filmes = [{nome:"Barraca do beijo "  , datalanc:2018 , descricao:"Ellem e lee, tem a brilhante ideia de gerenciar a barraca do beijo durante um evento da escola. Para fazer da proposta um sucesso, a garota tenta convencer o galã Noah, seu crush e irmao mais velho de Lee, a participar da brincadeira " } , {nome:"Atraves da minha janela " , datalanc: 2022 , descricao:"Apaixao de Raquel pelo vizinho vira algo mais depois que ele tambem começa a sentir algo por ela, apesar das objeções da familia."  } , { nome:"Para todos os garotos que ja amei " , datalanc:2018 , descricao:"Lara Jean adora escrever cartas de amor para seus paqueras. So nao contava que um dia elas seriam misteriosamente enviadas!" } , {nome:"A cinco passos de voce" , datalanc: 2019 , descricao:" Uma adolecente com uma doença cronica supera suas limitações diarias e desafia as regras ao se apaixonar por outro paciente"} , {nome:"Culpa minha" , datalanc: 2023 , descricao:"Noah e Nick nao se dao bem des do inicio mas acontece uma revira volta e comessam a ter um romance proibido, capas de virar o mundo deles de ponta cabeça, dada a suas personalidades rebeldes e confiantes fazendo-os se apaixonar perdidamente "} , {nome:"Paixão sem limites" , datalanc: 1995 , descricao: "Babi e Hache vivem em mundos completamente diferentes, a amiga da garota sai escondida e Babi vai atras e bate de frente com Hache e assim comessa a paixao que a mae da garota nao aceita  "} , {nome:"Divertidamente 2" , datalanc: 2024 , descricao:"Riley se encontra mais velha, passando pela tão temida adolecencia. novas emoçoes" } , {nome:"AS branquelas " , datalanc: 2004 , descricao:"Dois adentes negros do FBI se disfarçam de garotas ricas e brancas para evitar o suposto sequestro das herdeiras"} ]

var filmesdisponiveis = "";
filmes.forEach(filme => filmesdisponiveis = filmesdisponiveis + filme.nome + "[" + filme.datalanc + "]" + "[" + filme.descricao + "]" + "\n "  )

if(operação==1){
  alert("Os filmes desponiveis são: " + filmesdisponiveis )
}
  var lançamentos = [{nome: "O poço 2 " , datadia:19 , descricao:"Apos um lider misterioso impor sua propria lei em um sistema brutal de celas verticais uma mulher luta contra um metado bizarro de distribuição de comida "} , {nome:"Sua culpa" , datadia: 27 , descricao:"O amor de Noah e Nick aparentam ser inabalavel, apesar das tentativas de seus pais de separa-los. Mas o emprego dele, e a entrada dela na faculdade abrem suas vidas para novos relacionamentros "}] 


  var listaDelançamentos = "";
  lançamentos.forEach(lançamentos => listaDelançamentos = listaDelançamentos + lançamentos.nome + "[" + lançamentos.datadia + "]"  + "[" + lançamentos.descricao + "]" +   "\n " )
  

  if(operação==2){
    alert("Os filmes que serao lançados sao: " + listaDelançamentos )
  }

