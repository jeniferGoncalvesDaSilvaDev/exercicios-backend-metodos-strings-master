const comentario = "Essa pandemia é muito perigosa!";
let toList=comentario.split(" ")

for (item of toList) {
    if (item==="COVID" || item==="covid"){
        console.log("Comentário bloqueado por conter palavras proibidas")
    }else if(item==="pandemia"){
        console.log("Comentário bloqueado por conter palavras proibidas")
    }else if(item==="Pandemia"){
        console.log("Comentário bloqueado por conter palavras proibidas")

    }else if(item==="PANDEMIA"){
           
        console.log("Comentário bloqueado por conter palavras proibidas")
    }
    
}
