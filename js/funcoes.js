//-----------------------------------------------------------------------------------------------------------
// Função: validarProduto(idNomeProduto, idCodProduto, idQtidadeProduto)
// Verifica se foram informados o nome e o código do produto
// Parâmetros:
// - idNomeProduto: id do campo que contém o nome do produto
// - idCodProduto: id do campo que contém o código do produto
// - idQtidadeProduto: id do campo que contém a quantidade do produto
// OBS: Se faltar alguma informação (nome ou código do produto) aparecerá uma mensagem de erro. Em caso de 
// sucesso (todas as informações preenchidas), chama a função cadastrarProduto(...)
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------

let espessura5 = parseInt(document.getElementById("senk").value);
let espessura6 = parseInt(document.getElementById("siz").value);
let espessura7 = parseInt(document.getElementById("sét").value);
let espessura8 = parseInt(document.getElementById("uit").value);
let espessura10 = parseInt(document.getElementById("diz").value);

function validarProduto(txtEspessuraPlaca, qtde) {
    let espessura = document.getElementById(txtEspessuraPlaca).value;
let quantidade = document.getElementById(qtde).value;

    if (espessura == "")
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
    else if (quantidade == "")
        alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(espessura,parseInt(quantidade));
}
//-----------------------------------------------------------------------------------------------------------
// Função: cadastrarProduto(produto, codig, qtidade)
// Cadastra um novo produto (nome, código e quantidade) no estoque
// Parâmetros:
// - produto: nome do produto a ser cadastrado no estoque (Ex: arroz)
// - codig: código do produto a ser cadastrado no estoque (Ex: a01)
// - qtidade: quantidade do produto a ser cadastrado no estoque (Ex: 7)
// OBS: Apos cadastrar o novo produto no estoque, atualiza a quantidade de itens no carrinho, ou seja, chama 
// a função atualizarTotalEstoque()
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------
function cadastrarProduto(espessura, quantidade) {
    let novoProduto = {nome:espessura, quantidade:(quantidade)};
    if (typeof(Storage) !== "undefined") {
        let produtos = Number(localStorage.getItem("produtos"));
        if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso "+_idQtde+" unidades da placa de "+ _idEspessuraPlaca+"!");
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
     
    
    
    


let novoProduto = {nome:espessura, quantidade:(quantidade)};

     if (typeof(Storage) !== "undefined") {
         let produtos = localStorage.getItem("produtos");
         if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado
         else produtos = JSON.parse(produtos);
         produtos.push(novoProduto); // Adiciona um novo produto
         localStorage.setItem("produtos",JSON.stringify(produtos))
         if (espessura > 0 && espessura <= 5) {
            localStorage.setItem(quantidade, +++document.getElementById('senk').innerHTML=quantidade;
            
            
        } else if (espessura > 0 && espessura <= 6) {
            document.getElementById('siz').innerHTML=quantidade;
            
        }else if(espessura > 0 && espessura <= 7) {
            document.getElementById('sét').innerHTML=quantidade;
            
        }else if(espessura > 0 && espessura <= 8) {
            document.getElementById('uit').innerHTML=quantidade;
        }else if(espessura > 0 && espessura <= 10) {
            document.getElementById('diz').innerHTML=quantidade;
        }else{
            document.getElementById('espessura3').innerHTML="Espessura da Placa - Valor digitado incorreto!"
        
        }
    }
         atualizarTotalEstoque("totalEstoque");
         location.reload();
         
     } 
     else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
 


// Função: atualizarTotalEstoque(idCampo)
// Incrementa a quantidade de itens cadastrado no estoque (carrinho localizado no canto superior da tela)
// Parâmetros:
// - idCampo: identificador do campo que contem a quantidade de itens no estoque
// Retorno: nenhum

function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque",++document.getElementById(idCampo).innerHTML)
}
//-----------------------------------------------------------------------------------------------------------
// Função: carregarTotalEstoque(idCampo)
// Incrementa a quantidade de itens cadastrado no estoque (carrinho localizado no canto superior da tela)
// Parâmetros:
// - idCampo: identificador do campo que contem a quantidade de itens no estoque
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------
function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalEstoque;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

//-----------------------------------------------------------------------------------------------------------
// Exibe todos os itens do estoque (nome, código e quantidade)
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------
function listarEstoque() {
    if (Espessura > 0 && Espessura <= 5) {
        document.getElementById('senk').innerHTML=qtde;
        
    } else if (Espessura > 0 && Espessura <= 6) {
        document.getElementById('siz').innerHTML=qtde
        
    }else if(Espessura > 0 && Espessura <= 7) {
        document.getElementById('sét').innerHTML=qtde
        
    }else if(Espessura > 0 && Espessura <= 8) {
        document.getElementById('uit').innerHTML=qtde
    }else if(Espessura > 0 && Espessura <= 10) {
        document.getElementById('diz').innerHTML=qtde++
    }else{
        document.getElementById('espessura3').innerHTML="Espessura da Placa - Valor digitado incorreto!"
    
    }
}