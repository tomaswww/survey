//
// // function that creates stars and asign them their eventlistener...
// // testing clousure with udacity tips on cat clicker
//
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


// star creation
function punctuateApp(){
  for(let i=0;i<5;i++){
var createStar = document.getElementById("stars");
var newStar = document.createElement("span");
newStar.className = "fa fa-star";
newStar.id = "starN"+i;
createStar.appendChild(newStar);
}};

punctuateApp();


// gimme some color stars
function gimmeColor(){
  for(let i=0;i<5;i++){
var newStar = document.getElementById("starN"+i);
newStar.addEventListener('click',function(){
   if (newStar.classList.contains("checked")){
    newStar.classList.remove("checked");
  }
  else {
    newStar.classList.add("checked")
  };
})};
};

gimmeColor();
