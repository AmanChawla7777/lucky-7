document.getElementById("reset").style.display = "none";

var length=document.querySelectorAll(".option").length;

for(var i=0;i<length;i++)
{

document.querySelectorAll(".option")[i].addEventListener("click",function(event){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource = "images/" + "dice" + randomNumber1 + ".png";
  
  setTimeout(function(){
    document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);  
    },1000);
  
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  
  
  setTimeout(function(){
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  
  },1000);

  var asnwer= event.path[1].id;


  
  if (randomNumber1 + randomNumber2<7) {
    if(asnwer==="one")
    {
    setTimeout(function(){
    document.querySelector("h1").innerHTML = "🚩 You Won 🚩";
    },2000);
    }
    else
    {
      setTimeout(function(){
        document.querySelector("h1").innerHTML = "You lost";
        },1500);
    }
  }
  else if (randomNumber2 + randomNumber1===7) {
    if(asnwer==="two")
    {
    setTimeout(function(){
    document.querySelector("h1").innerHTML = "🚩 Grand Victory🚩";
    },2000);
    }
    else
    {
      setTimeout(function(){
        document.querySelector("h1").innerHTML = "You lost";
        },2000);
    }
  }
  else {

    if(asnwer==="three")
    {
    setTimeout(function(){
    document.querySelector("h1").innerHTML = "🚩 You Won 🚩";
    },1500);
    }
    else
    {
      setTimeout(function(){
        document.querySelector("h1").innerHTML = "You lost";
        },1500);
    }

  }

  setTimeout(function(){
    document.getElementById("reset").style.display = "block";
  },1500);

  document.querySelector(".options").style.display = "none";
});
}


document.getElementById("reset").addEventListener("click",function(){
  location.reload(true);
});