
// function that creates stars and asign them their eventlistener... must figure out how to fix click XD


function punctuateApp(){
  for(var i=0;i<5;i++){
var createStar = document.getElementById("stars");
var newStar = document.createElement("span");
newStar.className = "fa fa-star";
newStar.addEventListener('click',function(){
  if (newStar.classList.contains("checked")){
    newStar.classList.remove("checked");
  }
  else {
    newStar.classList.add("checked")
  }
});
createStar.appendChild(newStar);
}};

punctuateApp();
