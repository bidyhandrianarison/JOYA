import { login,calculateTotal} from "./assets/js/formulaire.js";
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
                    <input type="number" name="taille">
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
    `;
    productDetail.style.display="block";
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
const filtreAccessoire=document.getElementById("accessories");
filtreAccessoire.addEventListener("click",function(){
    const produitsFiltres=produits.filter(produits => produits.categorie==="Accessoire");
    titleNew.innerHTML="";
    eraseContent();
    genererProduits(produitsFiltres);
});
const filtreJewelry=document.getElementById("jewelry");
filtreJewelry.addEventListener("click",function(){
    const produitsFiltres=produits.filter(produits => produits.categorie==="Bijoux");
    titleNew.innerHTML="";
    eraseContent();
    genererProduits(produitsFiltres);
});
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

//PRODUCTS
/*const articles = document.querySelectorAll("article");
for(let i=0;i<articles.length;i++){
    articles[i].addEventListener('click',function(){
        
    })
}*/
//MONTRER LES ELEMENTS CACHES ONCLICK
/*const hidden=document.querySelectorAll(".notShowed");
const account=document.querySelector("#profile");
account.addEventListener("click",function(){
    account.style.cursor="pointer";
    hidden[0].style.display = hidden[0].style.display==="block" ? "none": "block"
    // if( hidden[0].style.display==="block"){
    //     hidden[0].style.display="none";
    //     document.querySelector(".showed").style.color="black";
    // }
    // else{
    //     hidden[0].style.display="block";
    //     document.querySelector(".showed").style.color="#d5959e";
    // }
});*/
//SE CONNECTER
login();
const menu=document.querySelectorAll(".largeMenu .notShowed li");
for(let i=0;i<menu.length;i++){
    menu[i].addEventListener("click",function(){
        console.log(menu[i].innerText);
        const produitsFiltres=produits.filter(produits => produits.categorie==menu[i].innerText);
        titleNew.innerHTML="";
        eraseContent();
        genererProduits(produitsFiltres);
    })
}