const cpf = "1234567890";
const cnpj = "12345678900109";

for (numero of cpf){
    if(cpf.length===11){
        console.log("cpf válido");
        break;
    }else{
        console.log("cpf inválido");
        break;
    }
}
for (numero of cnpj){
    if(cnpj.length===14){
        console.log("cnpj válido");
        console.log(cnpj);
        break;
    }else{
        console.log("cnpj inválido");
        break;
    }
}