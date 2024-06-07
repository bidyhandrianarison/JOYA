import { eraseContent } from "../../produits.js";
export function login(){
    const login=document.querySelector('#login');
    login.addEventListener('click',function(){
  eraseContent();
    const loginContent=document.getElementById('loginContent');
   loginContent.innerHTML= `
    <div id="#loginContent">
    <link rel="stylesheet" href="assets/css/login.css">

    <div class="loginTitle">
    <h2>CONNECTEZ-VOUS A VOTRE COMPTE</h2>
</div>
<form action="" class="loginForm shadow p-3 mb-5 bg-body-tertiary rounded">
    <div>
        <div><label for="">Email</label></div>
        <div><input type="email" name="" id=""></div>
    </div>
    <div>
        <div><label for="">Mot de Passe </label></div>
        <div class="password">
            <div><input type="password" name="" id=""></div>
            <button>MONTRER</button>
        </div>
        <div class="noAccount"><a href="">Mot de passe oublié?</a></div>
    </div>
    <div class="submitContainer"><input type="submit" value="SE CONNECTER"></div>
    <hr>
    <div class="noAccount">Pas de compte</div>
</form>
    </div>
    `;
})
}
export function calculateTotal(price,quantity){
    return price * quantity;

}
export function afficherReceipt(){
    
}