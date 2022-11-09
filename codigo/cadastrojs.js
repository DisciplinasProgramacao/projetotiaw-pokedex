let bancoCadastros = JSON.parse(localStorage.getItem("cadastros"));

if (!bancoCadastros) {


    bancoCadastros = [
        {
            "nome": "Gustavo",
            "email": "gustavohf15@hotmail.com",
            "senha": "123456",
            "pokemonFavorito": "Electivire",
            "jogoFavorito": "Platinum",
            "plataforma": "emulador",
            "tipoFavorito": "fogo",

        },
        {
            "nome": "Enzo",
            "email": "enzobolado@hotmail.com",
            "senha": "123",
            "pokemonFavorito": "Charizard",
            "jogoFavorito": "Fire Red ",
            "plataforma": "emulador",
            "tipoFavorito": "vento",

        }
    ]
}

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
    email1 = document.getElementById('email').value; 
    password1 = document.getElementById('senha').value; 
   
    if(email1 == document.getElementById("email").value && password1 == document.getElementById("senha").value){
        alert('sucesso');
        location.href="pokedex.html";
    }else{
        alert('usuário incorreto'); 
    }


}
