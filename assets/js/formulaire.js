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
export function afficherReceipt(nom,image,price,quantity){

        const sectionRecu=document.querySelector("#shop");
        sectionRecu.innerHTML=`
         <div class="headShop">
            <h6>Le produit a bien été ajouté à votre panier.</h6>
        </div>
        <div class="shopContent">
            <div class="detailShop">
                <section class="imageBought"><img src="${image}" alt=""></section>
                <section>
                    <div>Nom du produit <span>${nom}</span></div>
                    <div><small>Prix</small> <span>${price}</span></div>
                    <div>Pointure: <span>36</span></div>
                    <div>Quantité: <span>${quantity}</span></div>
                </section>
            </div>
            <div>
                <section>
                    <div>Il y a <span class="nbreProduits"></span> produit dans</div>
                <div><small>Sous-total: <span>total</span></small></div>
                <div><small>Transport: gratuit</small></div>
                <div><small>Total TTC <span>${calculateTotal(price,quantity)}</span></small></div>
                <div class="buttonContainer">
                    <button id="continue">CONTINUER VOS ACHATS</button>
                    <button>COMMANDER</button>
                </div>
                </section>
                <section></section>
            </div>
        </div>
        `
        document.getElementById("page").classList=('darkTheme');
        sectionRecu.style.display="block";
        const boutonContinue= document.querySelector("#continue");
        boutonContinue.addEventListener("click",function(){
             sectionRecu.style.display="none";
             document.getElementById("page").classList.toggle('darkTheme');
         })
    
}