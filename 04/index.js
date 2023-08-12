let identificador = "123";

let nome = "José silva costa";
let email = "      jose@email.com  ";


if (identificador.length < 6){
    identificador = identificador.padStart(6,"000");
    console.log(identificador);

}
emailFormatado = email.trim();
console.log(emailFormatado);
