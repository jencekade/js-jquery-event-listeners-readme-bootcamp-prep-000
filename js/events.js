//define functions here
function getIt() {
  $("p").on("click", function (){
    alert(`Hey!`);
  });
}

function frameIt() {
  $("img").on("load", function(){

  });
}

function pressIt() {
  $("#typing").on("keydown", function(key) {
    if(key.which == 47) {
      alert(`G was pressed.`);
    }
  });
}

function submitIt() {
  $("form").on("submit", function(){
    alert(`Your form is going to be submitted now.`);
  });
}

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
