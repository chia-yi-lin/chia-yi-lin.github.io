var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/animal-6897849_1920.jpg") {
    myImage.setAttribute("src", "images/australian-shepherd-6556697_1920.jpg");
  } else {
    myImage.setAttribute("src", "images/animal-6897849_1920.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML =  " Hi " + myName + " ! " + "Welcome to Pets Millennial";
    }
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = " Hi " + storedName + " ! " + "Welcome to Pets Millennial";
  }

  myButton.onclick = function () {
    setUserName();
  };
  
  
  