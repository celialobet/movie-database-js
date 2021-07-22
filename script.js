const apikey = "c647f684";
const searchInput = document.getElementById("search-input");
const movieForm = document.getElementById("form");
const divDisplay = document.getElementById("display");
const divModal = document.getElementById("modal");

// Search
movieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  divDisplay.innerHTML = "";

  fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=${searchInput.value}`)
    .then((response) => response.json())
    .then((response) => {
      displayMovies(response);
      const readMoreButton = document.getElementById("read-more");
      readMoreButton.addEventListener("click", () => {
        displayModal(response);
      });
    })
    .catch((error) => console.log(error));
});

// Display movies
const displayMovies = (response) => {
  divDisplay.innerHTML += `
  <div class="card">
    <div class="card-body">
      <div class="float-start px-5"> <img src="${response.Poster}" /> </div>
      <div>
        <h1>${response.Title}</h1>
	      <h4>${response.Released}</h4>
      </div> 
      <button 
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      id="read-more"
    >
      Read More
    </button>   
    </div>
  </div>
  `;
};

// Display modal
const displayModal = (response) => {
  divModal.innerHTML += `
  <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${response.Title}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="float-start px-5"> <img src="${response.Poster}" /> </div>
            <div>
	            <p class="px-5">Release date: ${response.Released}</p>
              <p class="px-5">${response.Plot}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
};
