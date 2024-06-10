import { login,calculateTotal,afficherReceipt} from "./assets/js/formulaire.js";
const produits=await fetch('produits.json').then(produits => produits.json());
export function eraseContent(){
    document.querySelector('#dynamic').innerHTML=`
    <section class="produits">
      </section>
      <section id="loginContent">
      </section>
      <section id="productDetail">
      </section>
      `;

}
//CREATION D'UNE FONCTION pour generer le contenu du section produits
function genererProduits(produits){
    const sectionProduits=document.querySelector(".produits");
    for(let i=0;i<produits.length;i++){
        const produitElement=document.createElement("article");
        //IMAGE
        const imageElement=document.createElement("img");
        imageElement.src=produits[i].image;
        produitElement.appendChild(imageElement);
        //NOM DU PRODUIT
        const nomElement=document.createElement("h2");
        nomElement.innerText=produits[i].nom ?? "";
        produitElement.appendChild(nomElement);
        //PRIX DU PRODUIT
        const prixElement=document.createElement("p");
        prixElement.innerText=produits[i].prix ?? "";
        produitElement.appendChild(prixElement);
        //DESCRIPTION
        const descriptionElement=document.createElement("p");
        descriptionElement.innerText=produits[i].description ?? "";
        produitElement.appendChild(descriptionElement);
        //STAR
        const starElement=document.createElement("div");
        for(let i=0;i<5;i++)
            {
                starElement.innerHTML+='<i class="fa-solid fa-star text-secondary">';
            };
        produitElement.appendChild(starElement);
        produitElement.addEventListener("click",()=>{
            afficherDetailProduit(produits[i]);
        })
    sectionProduits.appendChild(produitElement);
    };
};
//FONCTION QUI AFFICHE LE DETAIL DU PRODUIT LORSQU'ON CLIQUE DESSUS
function afficherDetailProduit(produit){
    const productDetail=document.querySelector('#productDetail');
    titleNew.innerHTML="";
    productDetail.innerHTML=
    `
    <div>
    <link rel="stylesheet" href="assets/css/products.css">
        <div class="extern">
        <section class="products">
            <div class="mainArticle">
                <img src="${produit.image}" alt="${produit.nom}">
            </div>
        </section>
        <section class="information">
            <h2>${produit.nom}</h2>
            <h4>${produit.prix}</h4>
            <hr>
            <form action="">
                <div id="taille">
                    <label for="taille">Taille</label>
                    <input type="number" name="taille" value=1>
                </div>
                <div>
                    <label for="quantite">Quantité</label>
                    <input type="number" name="quantite">
                </div>
                <input type="submit" value="AJOUTER AU PANIER" id="addToCart">
            </form>
            <ul>
                <li><img class="icone" src="assets/img/articles/rea_customer_service.png" alt=""><span>Service client au 06 49 54 94
                        19</span></li>
                <li><img class="icone" src="assets/img/articles/reassurance-joya-le-store-moyens-paiements.png"
                        alt=""><span>Paiements sécurisés & 3x sans frais avec Alma</span></li>
                <li><img class="icone" src="assets/img/articles/rea_shipping.png" alt=""><span>Livraison offerte avec Mondial Relay à
                        partir de 100$</span></li>
                <li><img class="icone" src="assets/img/articles/rea_click_collect.png" alt=""><span>Click & Collect à la Grande
                        Matte</span></li>
            </ul>
            <hr>
        </section>
        </div>
    </div>
    `
    ;
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        let qte=document.querySelector('input[name="quantite"]');
        afficherReceipt(produit.nom,produit.image,produit.prix,qte.value);
    });   
    productDetail.style.display="block";
    document.querySelector('#nbreShopping').value= parseInt(document.querySelector('#nbreShopping').value)+1;
    document.querySelector(".produits").style.display="none";
}
//PAGE D'ACCUEIL
const filtreFirst=produits.filter(produits=>produits.description==="Nouveautés");
const titleNew=document.createElement('h2');
titleNew.innerText="Nouveautés";
genererProduits(filtreFirst);
document.querySelector('#dynamic').insertBefore(titleNew,document.querySelector('.produits'));
const filtreCategories=produits.filter(produits=>produits.categorie==="catégorie")
genererProduits(filtreCategories);

const filtreBasket=document.getElementById("basket");
filtreBasket.addEventListener("click",function(){
    const produitsFiltres=produits.filter(produits => produits.categorie==="Basket");
    titleNew.innerHTML="";
    eraseContent();
    genererProduits(produitsFiltres);
});
//FILTRE ACCESSOIRE
const filtreAccessoire=document.getElementById("accessories");
filtreAccessoire.addEventListener("click",function(){
    const produitsFiltres=produits.filter(produits => produits.categorie==="Accessoire");
    titleNew.innerHTML="";
    eraseContent();
    genererProduits(produitsFiltres);
});
//FILTRE BIJOUX
const filtreJewelry=document.getElementById("jewelry");
filtreJewelry.addEventListener("click",function(){
    const produitsFiltres=produits.filter(produits => produits.categorie==="Bijoux");
    titleNew.innerHTML="";
    eraseContent();
    genererProduits(produitsFiltres);
});
//FILTRE HOMME
const filtreMan=document.getElementById("man");
filtreMan.addEventListener("click",function(){
    const produitsFiltres=produits.filter(produits => produits.categorie==="Hommes");
    titleNew.innerHTML="";
    eraseContent();
    genererProduits(produitsFiltres);
});



//Barre de recherche
const textToFind=document.getElementById('textToFind');
const barre=document.getElementById("find");
barre.addEventListener("click",function(){
    const produitsFiltres=produits.filter(produits => produits.nom===textToFind.value || produits.description===textToFind.value);
    titleNew.innerHTML="";
    eraseContent();
    genererProduits(produitsFiltres);
});
login();

const menu=document.querySelectorAll(".largeMenu .notShowed li");
for(let i=0;i<menu.length;i++){
    menu[i].addEventListener("click",function(){
        const produitsFiltres=produits.filter(produits => produits.categorie==menu[i].innerText);
        titleNew.innerHTML="";
        eraseContent();
        genererProduits(produitsFiltres);
    })
}