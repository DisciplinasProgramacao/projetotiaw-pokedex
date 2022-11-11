var bancoCadastros = JSON.parse(localStorage.getItem("cadastros"));



function limparForm() {
    document.getElementById("name1").value = "";
    document.getElementById("email1").value = "";
    document.getElementById("password1").value = "";
    document.getElementById("pokefav1").value = "";
    document.getElementById("gamefav1").value = "";
    document.getElementById("plat1").value = "";
    document.getElementById("typefav1").value = "";

}

function cadastrarNovo() {
    var name1 = document.getElementById("name1").value;
    var email1 = document.getElementById("email1").value;
    var password1 = document.getElementById("password1").value;
    var pokefav1 = document.getElementById("pokefav1").value;
    var gamefav1 = document.getElementById("gamefav1").value;
    var plat1 = document.getElementById("plat1").value;
    var typefav1 = document.getElementById("typefav1").value;

    var novoCadastro = {
        "nome": name1,
        "email": email1,
        "senha": password1,
        "pokemonFavorito": pokefav1,
        "jogoFavorito": gamefav1,
        "plataforma": plat1,
        "tipoFavorito": typefav1,
    }
    
    bancoCadastros.push(novoCadastro);
    localStorage.setItem("cadastros", JSON.stringify(bancoCadastros));
    
    limparForm();


}


function logar(){
    var emailcad = document.getElementById("email").value;
    var senhacad = document.getElementById("senha").value;
    
    let listaUser = []

    var Uservalid = {
        nome: '',
        email: '',
        senha: '',
        pokemonFavorito: '',
        jogoFavorito: '',
        plataforma: '',
        tipoFavorito: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem("cadastros"));
    listaUser.forEach ((item) => {
            if(emailcad == item.email && senhacad == item.senha) {
                Uservalid = {
                    nome: item.nome,
                    email: item.email,
                    senha: item.senha,
                    pokemonFavorito: item.pokemonFavorito,
                    jogoFavorito: item.jogoFavorito,
                    plataforma: item.plataforma,
                    tipoFavorito: item.tipoFavorito
                }
            }
        }
    )
    

    if (emailcad == Uservalid.email && senhacad == Uservalid.senha) {
        alert("LOGADO");
        location.href="pokedex.html";
    } else {
        alert("USUÁRIO INCORRETO");
    }
}
