/*console.log("Se nota que todavia me extranas");

setInterval(carmbiarSaludo, 2000);

function carmbiarSaludo() {
    let frase = document.getElementsByTagName("h2")[1].innerHTML;

    if(document.getElementsByTagName("h2")[1].innerHTML; == "ganando como siempre"){
        //frase = "impongo moda para las ninas";
        document.getElementsByTagName("h2")[1].innerHTML= "impongo moda para las ninas";
    } else {
        frase = "ganando como siempre";
        document.getElementsByTagName("h2")[1].innerHTML = "ganando como siempre";
    }
    console.log("frase : " + frase);
}.

*/

setInterval(cambiarSaludo, 2000);

function cambiarSaludo() {
  //console.log("Me parece una falta de respecto");
  let frase = document.getElementsByTagName("h1")[0].innerHTML;

  if (document.getElementsByTagName("h1")[0].innerHTML == "Ganando como siempre") {
    //frase = "Impongo moda para las niñas!";
    document.getElementsByTagName("h1")[0].innerHTML = "Impongo moda para las niñas!";
  } else {
    //frase = "Ganando como siempre";
    document.getElementsByTagName("h1")[0].innerHTML = "Ganando como siempre";
  }
  console.log("frase : " + frase);
}
