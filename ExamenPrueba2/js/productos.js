// State Necesario para Local storage
let state = {
  products: [],
  filteredProducts: [],
  favorites: []
};

// loadState Cargar Local storage 
function loadState(){
  const stateStorage = sessionStorage.getItem("state");
  if(stateStorage){
    state = JSON.parse(stateStorage);
  }
}

// saveState Guardar Local storage
function saveState(){
  sessionStorage.setItem("state",JSON.stringify(state));
}

// Funcion para cargar los productos del json
function loadProducts(){    
    fetch("./data/productos.json")
        .then(response => response.json())
        .then(data => {
            state.products = data.productes;
            state.filteredProducts = [...data.productes];
           
            loadState();
            displayProducts(state.filteredProducts);
        })
        .catch(error => console.error("Error loading products:", error));
}

//Funcion para enseñar los productos cargados gracias a la funcion anterior
function displayProducts(products){
    //Especificamos donde vamos a trabajar nos encargamos de una seccion con la clase product-grid  
    const productGrid = document.querySelector(".product-grid");
    //vaciamosproduct-grid 
    productGrid.innerHTML = "";

    // hacemos un foreach para sacar la informacion de cada producto individualmente en este caso sacamos favoritos descuentos y estrellas
    products.forEach((product) => {
        const isFavorite = state.favorites.includes(product.id);
        var reducedPrice =  (product.preu * (1 - product.descompte/100)).toFixed(2);
        var displayPrice = "";
        var stars = "";

        if(product.descompte){
            displayPrice = reducedPrice+" € <del>"+product.preu+" €</del>";
        }
        else{
            displayPrice = reducedPrice+" € ";
        }
       
        for(let i=0; i<5; i++){
          stars += `<i class="star ${product.puntuacio > i?'fa-solid fa-star':'fa-solid fa-star grey-star'}" data-id="${product.id}" data-puntuacio="${i+1}"></i>`;
        }

        
       // Lo construimos
        const productCard = `
        <article class="card">
          <div class="info-1">
            <img src="${product.imatge}" alt="${product.nom}">
            <h3>${product.nom}</h3>
            <h5>${product.marca}</h5>
            <h4>${product.descripcio}</h4>
          </div>
          <div class="info2">${stars}</div>
          <div class="info2">
            <div class="price-box">
              <p class="price">${displayPrice}</p>
              <button>Add</button>
            </div>
          </div>
          <div class="favorite">
              <i class="fa-${isFavorite?'solid':'regular'} fa-heart" data-id="${product.id}"></i>
          </div>
        </article>
        `;  
        productGrid.innerHTML += productCard;    
    });
    // usamos las funciones toggleFavorite, setStarRating que cuando clicken a los botones especificados 
    document.querySelectorAll(".favorite").forEach(icon => {
      icon.addEventListener("click",toggleFavorite);
    });

    document.querySelectorAll(".star").forEach(icon => {
      icon.addEventListener("click",setStarRating);
    });
}

// funcion que guarda en local storage y en la pagina los favoritos
function toggleFavorite(event){
  const productId = Number(event.target.dataset.id);
  const index = state.favorites.indexOf(productId);

  if(index == -1){
    state.favorites.push(productId);
  }
  else {
    state.favorites.splice(index,1);
  }
  // necesario para que se guarde en local storage
  saveState();
  displayProducts(state.filteredProducts);
}
  //funcion que guarda las estrellas
function setStarRating(event){
  const productId = Number(event.target.dataset.id);
  const score = Number(event.target.dataset.puntuacio);

  const product = state.products.find(product => product.id == productId);
  const filteredProduct = state.filteredProducts.find(product => product.id == productId);

  if(filteredProduct){
    product.puntuacio = score;
    filteredProduct.puntuacio = score;
    saveState();
    displayProducts(state.filteredProducts);
  }
}

  //boton que filtra los objetos por precio maximo
function filterByDiscountedPrice(maxPrice){
  state.filteredProducts = state.products.filter(product => {
    let reducedPrice = product.preu * (1 - product.descompte/100);
    return reducedPrice <= maxPrice;
  });
  displayProducts(state.filteredProducts);
}
  //boton que borra los filtros que tengamos en la pagina
function resetAll(){
  state.filteredProducts = [...state.products];
  displayProducts(state.filteredProducts);
}
  //boton que nos enseña los favoritos
function showFavorites(){
  state.filteredProducts = state.products.filter(product => state.favorites.includes(product.id));
  displayProducts(state.filteredProducts);
}
  //boton que nos enseña los no favoritos
function showNonFavorites(){
  state.filteredProducts = state.products.filter(product => !state.favorites.includes(product.id));
  displayProducts(state.filteredProducts);
}
  //filtra por marca
function filterByBrand(brand){
  const productGrid = document.querySelector(".product-grid");

  state.filteredProducts = state.products.filter(product => product.marca.toLowerCase() == brand.toLowerCase());
  if(state.filteredProducts.length == 0){
    productGrid.innerHTML = "There are no products matching your search criteria.";
  }else{
    displayProducts(state.filteredProducts);
  }
}
//ordena a-z z-a de mayo a menor o de menor a mayor
function sortProducts(order){
  if(order == "Aasc"){
    state.filteredProducts.sort((a,b) => a.nom.localeCompare(b.nom));
  }
  else if(order == "Adesc"){
    state.filteredProducts.sort((a,b) => b.nom.localeCompare(a.nom));
  }
  else if(order == "Pasc"){
    state.filteredProducts.sort((a,b) => {
      let reducedPriceA = a.preu * (1 - a.descompte/100);
      let reducedPriceB = b.preu * (1 - b.descompte/100);
      return reducedPriceA - reducedPriceB;
    });
  }
  else if(order == "Pdesc"){
    state.filteredProducts.sort((a,b) => {
      let reducedPriceA = a.preu * (1 - a.descompte/100);
      let reducedPriceB = b.preu * (1 - b.descompte/100);
      return reducedPriceB - reducedPriceA;
    });
  }
  displayProducts(state.filteredProducts);
}
//init necesario para que cuando cargues la pagina funcione los selectores
function init(){
  // Filtres de marca
  const pickBrands = document.querySelectorAll(".main-nav a");
  pickBrands.forEach(link => {
      link.addEventListener("click",event => {
        event.preventDefault();
        const brand = event.target.dataset.marca;
        filterByBrand(brand);
      });
  });

  document.querySelector("select[name='order']").addEventListener("change", event => {
        const order = event.target.value;
        sortProducts(order);
  });

  document.querySelector(".icons-container .fa-solid.fa-heart").addEventListener("click",showFavorites);
  document.querySelector(".icons-container .fa-regular.fa-heart").addEventListener("click",showNonFavorites);
  document.querySelector(".fa-eraser").addEventListener("click",resetAll);

  document.querySelector(".hero button").addEventListener("click", () => filterByDiscountedPrice(70));

  loadProducts();
}

document.addEventListener("DOMContentLoaded",init);