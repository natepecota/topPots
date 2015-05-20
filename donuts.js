
function Store(location, minCust, maxCust, avgPurchase){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPurchase = avgPurchase;
}

//form data
var elAddiontalLocation, elMinCustHr, elMaxCustHr, elAvgDPC, elFormSubmit, elAlterLocation;
elAddiontalLocation = document.getElementById("addiontalLocation");
elMinCustHr = document.getElementById("minCustHr");
elMaxCustHr = document.getElementById("maxCustHr");
elAvgDPC = document.getElementById("avgDPC");
elFormSubmit = document.getElementById("formSubmit");
elAlterLocation = document.getElementById("alterLocation");


//This creates the header of the table
Store.prototype.fillHeader = function(){

  var table = document.getElementById("DonutTable");
  var row = document.createElement("tr");
  var hours= ["Locations"," 7:00 am ", " 8:00am ", " 9:00am ", " 10:00am ", " 11:00am ", " 12:00pm ", " 1:00pm ", " 2:00pm ", " 3:00pm ", " 4:00pm ", " 5:00pm ", " 6:00pm ", "Total"];

  for (var i = 0; i < hours.length; i++) {
    var cell = document.createElement("th");
    var cellText = document.createTextNode(hours[i]);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  table.appendChild(row);
}

//Random Cutomer Generator
Store.prototype.genRandom = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust +1)) +this.minCust;
};
Store.prototype.donutsPerHour = function() {
  return parseInt(this.genRandom(this.minCust, this.maxCust) * this.avgPurchase);
};

//Fill table data
Store.prototype.fill = function(){

  var table = document.getElementById("DonutTable");
  var row = document.createElement("tr");
  var totalPerDay = 0;
  //This generates the first column with the location
  var shop = document.createElement("td");
  var shopText = document.createTextNode(this.location);
  shop.class = "locNames"
  shop.appendChild(shopText);
  row.appendChild(shop);

  //loop to create and fill a cell for each hour of opperation
  for (var i = 0; i < 12; i++) {
    var dPerHr = this.donutsPerHour();
    var cell = document.createElement("td");
    var cellText = document.createTextNode(dPerHr);
    cell.appendChild(cellText);
    row.appendChild(cell);
    totalPerDay += dPerHr;
    }

    var totalCell = document.createElement('td');
    var textTotalCell = document.createTextNode(totalPerDay);
    totalCell.appendChild(textTotalCell);
    row.appendChild(totalCell);

  table.appendChild(row);
}

/*
//populate drop down menu with locations.
function populateOptions (){
  for (var i = 0; ; i < 12; i++) {
    var locPop = getElementByClass("locNames");
    var option = document.createElement("option");
    var optText = document.createTextNode(locPop);
    locPop.appendChild(optText);
    elAlterLocation.appendChild(locPop);
  };
}
*/

var downtown = new Store('Downtown', 8, 43, 4.50);
var capHill = new Store('Capital Hill', 4, 37, 2.00);
var slu = new Store('South Lake Union', 9, 23, 6.33);
var wedge = new Store('Wedgewood', 2, 28, 1.25);
var ballard = new Store('Ballard', 8, 58, 3.75);

downtown.fillHeader();
downtown.fill();
capHill.fill();
slu.fill();
wedge.fill();
ballard.fill();



