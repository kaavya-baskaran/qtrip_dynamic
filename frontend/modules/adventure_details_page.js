import config from "../conf/index.js";

//Implementation to extract adventure ID from query params
function getAdventureIdFromURL(search) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Get the Adventure Id from the URL
  let query = new URLSearchParams(search);
  let cityID = query.get("adventure"); // console.log(cityID);
  return cityID;

  // Place holder for functionality to work in the Stubs
 return null;
}
//Implementation of fetch call with a paramterized input based on adventure ID
async function fetchAdventureDetails(adventureId) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Fetch the details of the adventure by making an API call
  try {
    let response = await fetch(
      config.backendEndpoint + "/adventures/detail?adventure=" + adventureId
      );
      let data = await response.json();
      return data; } catch (err) {
         return null; }

  // Place holder for functionality to work in the Stubs
  return null;
}

//Implementation of DOM manipulation to add adventure details to DOM
function addAdventureDetailsToDOM(adventure) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the details of the adventure to the HTML DOM
  let name = document.getElementById("adventure-name");
   name.textContent = adventure.name;
    let subtitle = document.getElementById("adventure-subtitle");
     subtitle.textContent = adventure.subtitle;
      let photos = document.getElementById("photo-gallery");
      for (let i of adventure.images) {
        let photo = document.createElement("img");
         photo.setAttribute("class", "activity-card-image");
         photo.setAttribute("src", i);
         photos.append(photo);
         }
          let content = document.getElementById("adventure-content");
           content.textContent = adventure.content;

}

//Implementation of bootstrap gallery component
function addBootstrapPhotoGallery(images) {
  // TODO: MODULE_ADVENTURE_DETAILS
  // 1. Add the bootstrap carousel to show the Adventure images
  let photos = document.getElementById("photo-gallery");
  let middle = "";
  for (let i = 1; i < images.length; i++) {
    middle +=
    "<div class='carousel-item'><img src=" +images[i] + " class='d-block w-100' alt='...'></div>"; }photos.innerHTML = ` <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"> <div class="carousel-indicators"> <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button> <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> </div> <div class="carousel-inner"> <div class="carousel-item active"> <img src="${images[0]}" class="d-block w-100" alt="..."> </div> ${middle} </div> <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
       </button> <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span> </button> </div>`;
}

//Implementation of conditional rendering of DOM based on availability
function conditionalRenderingOfReservationPanel(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If the adventure is already reserved, display the sold-out message.
  
   if (adventure.available) {
     document.getElementById("reservation-panel-sold-out").style.display ="none";
      document.getElementById("reservation-panel-available").style.display ="block";
       document.getElementById("reservation-person-cost").textContent = adventure.costPerHead; 
      } 
      else { document.getElementById("reservation-panel-available").style.display = "none"; document.getElementById("reservation-panel-sold-out").style.display ="block";
    }
}

//Implementation of reservation cost calculation based on persons
function calculateReservationCostAndUpdateDOM(adventure, persons) {
  // TODO: MODULE_RESERVATIONS
  // 1. Calculate the cost based on number of persons and update the reservation-cost field
  let totalCost = adventure.costPerHead * persons;
   document.getElementById("reservation-cost").textContent = totalCost;
}

//Implementation of reservation form submission
function captureFormSubmit(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. Capture the query details and make a POST API call using fetch() to make the reservation
  // 2. If the reservation is successful, show an alert with "Success!" and refresh the page. If the reservation fails, just show an alert with "Failed!".
}

//Implementation of success banner after reservation
function showBannerIfAlreadyReserved(adventure) {
  // TODO: MODULE_RESERVATIONS
  // 1. If user has already reserved this adventure, show the reserved-banner, else don't

}

export {
  getAdventureIdFromURL,
  fetchAdventureDetails,
  addAdventureDetailsToDOM,
  addBootstrapPhotoGallery,
  conditionalRenderingOfReservationPanel,
  captureFormSubmit,
  calculateReservationCostAndUpdateDOM,
  showBannerIfAlreadyReserved,
};
