// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filterData to dataSet initially
var filterData = dataSet;

// renderTable renders the filterData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filterData.length; i++) {
    // Get get the current address object and its fields
    var address = filterData[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  //var filterdate = $dateInput.value.trim().toLowerCase();
  //var filterData = dataSet;

  var filters = {"Date":$dateInput.value.trim(),
  "City":filterCity = $cityInput.value.trim(),
  "State":$stateInput.value.trim(),
  "Country":$countryInput.value.trim(),
  "Shape":$shapeInput.value.trim()}


  if(filters["City"].length>0) {
      console.log("THERE'S A CITY WOWEE, it is"+filters["Date"])
  }


//Different functions for different filters
  
    //Date
    if(filters["Date"].length>0) {

        filterData = filterData.filter(function(address) {
            //var addressdate = address.date.toLowerCase();
            var addressdate = address.datetime;

            return addressdate === filters["Date"];
        });
    };

    //City
    if(filters["City"].length>0) {

        filterData = filterData.filter(function(address) {
            //var addressdate = address.date.toLowerCase();
            var addressCity = address.city;

            return addressCity === filters["City"];
        });
    };

    //State
    if(filters["State"].length>0) {

        filterData = filterData.filter(function(address) {
            //var addressdate = address.date.toLowerCase();
            var addressState = address.state;

            return addressState === filters["State"];
        });
    };

    //Country
    if(filters["Country"].length>0) {

        filterData = filterData.filter(function(address) {
            //var addressdate = address.date.toLowerCase();
            var addressCountry = address.country;

            return addressCountry === filters["Country"];
        });
    };

    //Shape
    if(filters["Shape"].length>0) {

        filterData = filterData.filter(function(address) {
            //var addressdate = address.date.toLowerCase();
            var addressShape = address.shape;

            return addressShape === filters["Shape"];
        });
    };

  renderTable();
}

// Render the table for the first time on page load
renderTable();
