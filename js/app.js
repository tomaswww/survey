//
// // function that creates stars and asign them their eventlistener...
// // testing clousure with udacity tips on cat clicker

// function punctuateApp(){
//   for(var i=0;i<5;i++){
// var createStar = document.getElementById("stars");
// var newStar = document.createElement("span");
// newStar.className = "fa fa-star";
// createStar.appendChild(newStar);
// // changing closure
// newStar.addEventListener('click',function(copyNewStar){
//   return function(){
//    if (copyNewStar.classList.contains("checked")){
//     copyNewStar.classList.remove("checked");
//   }
//   else {
//     copyNewStar.classList.add("checked")
//   }
// }
// })();
// };
// };
//
// punctuateApp();

// own thought

//
// // star creation
function punctuateApp() {
  for (let i = 0; i < 5; i++) {
    var createStar = document.getElementById("stars");
    var newStar = document.createElement("span");
    newStar.className = "fa fa-star";
    newStar.id = "starN" + i;

if (createStar !== null) {

    createStar.appendChild(newStar);
  }}
};

punctuateApp();


// gimme some color stars
function gimmeColor() {
  for (let i = 0; i < 5; i++) {
    var newStar = document.getElementById("starN" + i);
    if (newStar !== null) {
    newStar.addEventListener('click', function() {
      if (newStar.classList.contains("checked")) {
        newStar.classList.remove("checked");
      } else {
        newStar.classList.add("checked")
      };
    })
  }};
};

gimmeColor();





// question6 creating the table for checkboxes
var adjectivesArray = ["Boring", "Busy", "Calm", "Cheap",
  "Creative", "Cutting-edge", "Exciting", "Expensive",
  "Familiar", "Fresh", "Impressive", "Innovative",
  "Inspiring", "Intimidating", "Old", "Professional",
  "Trustworthy", "Unprofessional", "Empowering",
  "Approachable", "Disconnected", "Friendly",
  "Irrelevant", "Patronizing", "Stable"
];


function createTable(adjectivesArray) {
  var lineLenght;
  // set the line lenght for table
  if (adjectivesArray.length % 5 === 0) {
    var lineLenght = 5;
  } else if (adjectivesArray.length % 4 === 0) {
    var lineLenght = 4;
  } else if (adjectivesArray.length % 3 === 0) {
    var lineLenght = 3;
  } else {
    console.log("error dude");
  }
  var theTable = document.createElement("table");
  var amountOfLines = adjectivesArray.length / lineLenght;
  // build table per se
  for (var j = 0; j < amountOfLines; j++) {
    var newTr = document.createElement("tr");
    for (var i = 0; i < lineLenght; i++) {
      var newTd = document.createElement("td");
      var newInpt = document.createElement("input");
      newInpt.type = "checkbox";
      var newSpan = document.createElement("span");
      newSpan.class = "checkmark";
      var k = (j * lineLenght + i);
      newSpan.innerHTML = adjectivesArray[k];
      newTd.appendChild(newInpt);
      newTd.appendChild(newSpan);
      newTr.appendChild(newTd);
    }
    theTable.appendChild(newTr);
  }
  var tableFrame = document.getElementById("tableCard");
  tableFrame.appendChild(theTable);
};

createTable(adjectivesArray);
