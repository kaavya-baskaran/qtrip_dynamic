import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  try{ 
    let backarr= await fetch(config.backendEndpoint+"/cities");
    let arr= await backarr.json();
    return arr;
  }
  catch(err){
return null;


  }
  // 1. Fetch cities using the Backend API and return the data
}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let outerDiv = document.createElement("div");
  outerDiv.setAttribute("class", "col-12 col-sm-6 col-lg-3 mb-4");
   let link = document.createElement("a");
    link.setAttribute("href", "pages/adventures/?city=" + id);
     link.setAttribute("id", id);
     let divTile = document.createElement("div");
      divTile.setAttribute("class", "tile"); 
      let img = document.createElement("img");
       img.setAttribute("src", image);
       let text = document.createElement("div");
        text.setAttribute("class", "tile-text text-center");
         let h5 = document.createElement("h5");
          h5.textContent = city;
          let p = document.createElement("p");
           p.textContent = description;
   text.append(h5);
    text.append(p);
     divTile.append(img);
      divTile.append(text);
      link.append(divTile);
       outerDiv.append(link);
        let content = document.getElementById("data");
         content.append(outerDiv);

}

export { init, fetchCities, addCityToDOM };
