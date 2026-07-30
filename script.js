const menuToggle = document.getElementById("menu-toggle");
const menuLinks = document.querySelector(".menu-links");

// fermer et ouvrir le menu
menuToggle.addEventListener("click", () => menuLinks.classList.toggle("active"));
document.querySelectorAll(".menu-links a").forEach(link => link.addEventListener("click", ()=>menuLinks.classList.remove("active")));

let lastScroll = 0; 
window.addEventListener("scroll", () => { 
  const currentScroll = window.pageYOffset; 
  if(currentScroll>lastScroll) menuLinks.classList.remove("active"); // Ferme le menu sur petit ecran si on descends
  lastScroll=currentScroll; 
});

// pour les onglets de about me
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");
buttons.forEach(btn => { 
  btn.addEventListener("click", () => {
    buttons.forEach(b=>b.classList.remove("active")); // Affiche un onglet à la fois
    contents.forEach(c=>c.classList.remove("active"));
    btn.classList.add("active"); // active un seul bouton et affiche son contenu  
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// l'animation du début
const revealElements = document.querySelectorAll(".reveal");
window.addEventListener("scroll", ()=>{
  revealElements.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top<window.innerHeight-50) el.classList.add("active");
  });
});

// retourner les cartes
document.querySelectorAll(".project-card").forEach(card=>{
  card.addEventListener("mouseenter", ()=>card.classList.add("flip"));//si je le survole
  card.addEventListener("mouseleave", ()=>card.classList.remove("flip")); // au depart
  card.addEventListener("click", ()=>card.classList.toggle("flip")); // si je clique
});

// revenir en haut si je ckique sur mon logo
document.querySelector(".logo").addEventListener("click", function(e){
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" }); //remonte lentement
});
// FINISH !