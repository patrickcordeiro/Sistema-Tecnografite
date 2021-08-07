function validarProduto(_idEspessuraPlaca, _idQtde) {
    let espessura = document.getElementById(_idEspessuraPlaca).value;
    let qtde = document.getElementById(_idQtde).value;

    if (espessura == "")
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
    else if (qtde == "")
        alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(espessura,parseInt(qtde));
}


function listarEstoque() {
    let espessura = document.getElementById(_idEspessuraPlaca).value;
    let qtde = document.getElementById(_idQtde).value;
    if (espessura > 0 && espessura <= 5) {
        document.getElementById('senk').innerHTML=qtde;
        
    } else if (espessura > 0 && espessura <= 6) {
        document.getElementById('siz').innerHTML=qtde
        
    }else if(espessura > 0 && espessura <= 7) {
        document.getElementById('sét').innerHTML=qtde
        
    }else if(espessura > 0 && espessura <= 8) {
        document.getElementById('uit').innerHTML=qtde
    }else if(espessura > 0 && espessura <= 10) {
        document.getElementById('diz').innerHTML=qtde++
    }else{
        document.getElementById('espessura3').innerHTML="Espessura da Placa - Valor digitado incorreto!"
        
    }
    
    
    
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Estoque:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum item no estoque</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");
                document.write("<li>Espessura Placa: "+produto.nome+"</li>");
                
                document.write("<li>Quantidade no estoque: "+produto.quantidade+"</li>");
                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}