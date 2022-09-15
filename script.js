function telefone_mascara() {
 
 var tel = document.getElementById("telefone").value;
 console.log(tel)

 var formato_telefone = document.getElementById("telefone").value;
 if (formato_telefone[0] != "(" && formato_telefone[0] != undefined){
     document.getElementById("telefone").value="("+formato_telefone[0]
 }

if (formato_telefone[3] != ")" && formato_telefone[3] != undefined){
    document.getElementById("telefone").value=formato_telefone.slice(0,3)+")"+formato_telefone[3]}

if (formato_telefone[9] != "-" && formato_telefone[9] != undefined){
document.getElementById("telefone").value=formato_telefone.slice(0,9)+"-"+formato_telefone[9]}
}

function confirmarSenha(){
    console.log("Enviado");
    
    var senha = document.getElementById("senha").value;
    var confirmarsenha = document.getElementById("confirmarsenha").value;
    if (senha !== confirmarsenha){
        window.alert("Senhas não conferem");
    }
}