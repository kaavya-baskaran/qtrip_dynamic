
import config from "../conf/index.js";

//Implementation to extract city from query params
function getCityFromURL(search) {

  // TODO: MODULE_ADVENTURES
  // 1. Extract the city id from the URL's Query Param and return it
  let query= new URLSearchParams(search);
  let city=query.get("city");
  return city;

}

//Implementation of fetch call with a paramterized input based on city
async function fetchAdventures(city) {
  // TODO: MODULE_ADVENTURES
  // 1. Fetch adventures using the Backend API and return the data
  try{
  let response= fetch(config.backendEndpoint+ "/adventures?city=" + city);
  let data=(await response).json();
  return data;

}
catch(err){
  return null;
}
}
//Implementation of DOM manipulation to add adventures for the given city from list of adventures
function addAdventureToDOM(adventures) {
  // TODO: MODULE_ADVENTURES
  // 1. Populate the Adventure Cards and insert those details into the DOM
  let row=document.getElementById("data");
  for( let i of adventures){
let content=document.createElement("div");
content.setAttribute("class","col-6 col-lg-3 mb-3");
let link=document.createElement("a");
link.setAttribute("id",i.id);
link.setAttribute("href","detail/?adventure=" + i.id);
let advcard=document.createElement("div");
advcard.setAttribute("class","activity-card");
let img=document.createElement("img");
img.setAttribute("src",i.image);
let category=document.createElement("div");
category.textContent=i.category;
category.setAttribute("class","category-banner");

let text1 = document.createElement("div");
 text1.setAttribute("id", "adv-card-text");
  let p1 = document.createElement("div");
  p1.textContent = i.name;
  let p2 = document.createElement("div");
  p2.innerHTML = "&#8377 " + i.costPerHead;
  let text2 = document.createElement("div");
  text2.setAttribute("id", "adv-card-text");
  let p3 = document.createElement("div");
  p3.textContent = "Duration";
  let p4 = document.createElement("div");
  p4.textContent = i.duration + " Hours";

  advcard.append(img);
  advcard.append(category);
  advcard.append(text1);
  advcard.append(text2);
  link.append(advcard);
  content.append(link);
  row.append(content);
  }

}

//Implementation of filtering by duration which takes in a list of adventures, the lower bound and upper bound of duration and returns a filtered list of adventures.
function filterByDuration(list, low, high) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on Duration and return filtered list

}

//Implementation of filtering by category which takes in a list of adventures, list of categories to be filtered upon and returns a filtered list of adventures.
function filterByCategory(list, categoryList) {
  // TODO: MODULE_FILTERS
  // 1. Filter adventures based on their Category and return filtered list

}

// filters object looks like this filters = { duration: "", category: [] };

//Implementation of combined filter function that covers the following cases :
// 1. Filter by duration only
// 2. Filter by category only
// 3. Filter by duration and category together

function filterFunction(list, filters) {
  // TODO: MODULE_FILTERS
  // 1. Handle the 3 cases detailed in the comments above and return the filtered list of adventures
  // 2. Depending on which filters are needed, invoke the filterByDuration() and/or filterByCategory() methods


  // Place holder for functionality to work in the Stubs
  return list;
}

//Implementation of localStorage API to save filters to local storage. This should get called everytime an onChange() happens in either of filter dropdowns
function saveFiltersToLocalStorage(filters) {
  // TODO: MODULE_FILTERS
  // 1. Store the filters as a String to localStorage

  return true;
}

//Implementation of localStorage API to get filters from local storage. This should get called whenever the DOM is loaded.
function getFiltersFromLocalStorage() {
  // TODO: MODULE_FILTERS
  // 1. Get the filters from localStorage and return String read as an object


  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add the following filters to DOM :
// 1. Update duration filter with correct value
// 2. Update the category pills on the DOM

function generateFilterPillsAndUpdateDOM(filters) {
  // TODO: MODULE_FILTERS
  // 1. Use the filters given as input, update the Duration Filter value and Generate Category Pills

}
export {
  getCityFromURL,
  fetchAdventures,
  addAdventureToDOM,
  filterByDuration,
  filterByCategory,
  filterFunction,
  saveFiltersToLocalStorage,
  getFiltersFromLocalStorage,
  generateFilterPillsAndUpdateDOM,
};
