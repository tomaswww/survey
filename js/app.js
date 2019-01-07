function punctuateApp(){
  var buttonClicked = document.querySelectorAll("fa fa-star");
  buttonClicked.addEventListener('click',function(){
    if (buttonClicked.classList.contains("checked")){
      buttonClicked.classList.remove("checked");
    }
    else {
      buttonClicked.classList.remove("checked")
    }
  })
}

punctuateApp();
