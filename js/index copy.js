window.onload = (event) => {
    var submit = document.getElementById('submit_id');
};


function onLogin(){
    var inputUsuario = document.getElementById('id_usuario')
    var inputSenha = document.getElementById('id_senha')

    usuario = inputUsuario.value
    senha = inputSenha.value
    
    if(usuario.trim()){
        console.log("Usuário não é null.");
    }

    if(senha.trim()){
        console.log("Senha não é null.");


        if(senha.length >= 8){
            console.log("Senha maior/igual a 8 char");

            if(usuario == "gabriel.silva" && senha == "12345678"){
                alert("Usuário logado com sucesso.")
            }else{
                alert("Usuário ou senha incorreto.")
            }
            
        }else{
            console.log("Senha menor que 8 char");
        }
        
    }
     
    
    var resposeElement = document.getElementById("response")

}

