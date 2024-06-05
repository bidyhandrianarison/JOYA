const produits=await fetch('produits.json').then(produits => produits.json());
function eraseContent(){
    document.querySelector('#dynamic').innerHTML=`
    <section class="produits">
      </section>
      <section id="loginContent">
      </section>`
}
function genererProduits(produits){
    for(let i=0;i<produits.length;i++)
    {
        const sectionProduits=document.querySelector(".produits");
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
        sectionProduits.appendChild(produitElement);
    }
   

};
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
const articles = document.querySelectorAll("article");
for(let i=0;i<articles.length;i++){
    articles[i].addEventListener('click',function(){
        
    })
}
//MONTRER LES ELEMENTS CACHES ONCLICK
const hidden=document.querySelectorAll(".notShowed");
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
});
//SE CONNECTER
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
