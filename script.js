const apikey = "c647f684";
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const movieForm = document.getElementById("form");
const divDisplay = document.getElementById("display");
let myModal = document.getElementById("myModal");
let myInput = document.getElementById("myInput");

//Modal
// myModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
// });

//Search
movieForm.addEventListener("submit", (e) => {
  e.preventDefault();
  divDisplay.innerHTML = "";

  fetch(`http://www.omdbapi.com/?apikey=${apikey}&t=${searchInput.value}`)
    .then((response) => response.json())
    .then((response) => displayMovies(response))
    .catch((error) => console.log(error));
});

const displayMovies = (response) => {
  divDisplay.innerHTML += `
  <div class="card">
    <div class="card-body">
      <div class="float-start px-5"> <img src="${response.Poster}" /> </div>
      <div>
        <h1>${response.Title}</h1>
	      <h4>${response.Released}</h4>
      </div>    
    </div>
  </div>
  `;
};
