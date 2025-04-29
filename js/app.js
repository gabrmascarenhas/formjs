// Formulário de Cadastro 
const forms = document.getElementById('forms');
const mensagem = document.getElementById('mensagem')
//Criação de um evento ouvinte para o envio do form
forms.addEventListener("submit", (event) => { //() => arrow function
        event.preventDefault(); //Previne o submit padrão do NAV
       
        mensagem.textContent = '';
       
    //    Tudo a seguir será substituido pela function verify
        // if(nome.value == ''){
        //     mensagem.textContent ="Informe o nome!"
        //    nome.focus();
        //    return;
        // }  
        // if(telefone.value == ''){
        //     mensagem.textContent ="Informe o Telefone!"
        //    telefone.focus();
        //    return;
        // } 
        // if(email.value == ''){
        //     mensagem.textContent ="Informe o E-mail!"
        //    email.focus();
        //    return;
        // }
        // if(senha.value == ''){
        //     mensagem.textContent ="Informe a senha!"
        //    senha.focus();
        //    return;
        // }         
        if(verify(nome)) return;
        if(verify(telefone)) return;
        if(verify(email)) return;
        if(verify(senha)) return;
        forms.reset(); 
    
       
});
//verifica se há informação no input
function verify(campo){
    if(campo.value == ''){
        campo.focus();
        mensagem.textContent = `Informe seu  ${campo.getAttribute('id')}`;
        return true;
    }
    return false;
}

//Verificar caracteres:

function hasSpecialChar(str) {
    let regex = /[@!#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return regex.test(str);
  }
const teste = document.getElementById('teste');
const msg = document.getElementById('msg');
const frase = document.getElementById('frase');
btn.addEventListener('click', () => {
if (hasSpecialChar(frase.value)) {
  msg.textContent =  "String is not accepted";
} else {
  msg.textContent =  "String is accepted";
}

});