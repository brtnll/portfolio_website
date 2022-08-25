// Get the modal
var portModal1 = document.getElementById("portModal1");
var portModal2 = document.getElementById("portModal2");
var portModal3 = document.getElementById("portModal3");
var portModal4 = document.getElementById("portModal4");
var portModal5 = document.getElementById("portModal5");

// Get the button that opens the modal
var portbtn1 = document.getElementById("popup_btn1");
var portbtn2 = document.getElementById("popup_btn2");
var portbtn3 = document.getElementById("popup_btn3");
var portbtn4 = document.getElementById("popup_btn4");
var portbtn5 = document.getElementById("popup_btn5");

// Get the <span> element that closes the modal
var portClose1 = document.getElementsByClassName("portClose1")[0];
var portClose2 = document.getElementsByClassName("portClose2")[0];
var portClose3 = document.getElementsByClassName("portClose3")[0];
var portClose4 = document.getElementsByClassName("portClose4")[0];
var portClose5 = document.getElementsByClassName("portClose5")[0];

// When the user clicks on the button, open the modal
portbtn1.onclick = function() {
    portModal1.style.display = "block";
}
portbtn2.onclick = function() {
    portModal2.style.display = "block";
}
portbtn3.onclick = function() {
    portModal3.style.display = "block";
}
portbtn4.onclick = function() {
    portModal4.style.display = "block";
}
portbtn5.onclick = function() {
    portModal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
portClose1.onclick = function() {
    portModal1.style.display = "none";
}
portClose2.onclick = function() {
    portModal2.style.display = "none";
}
portClose3.onclick = function() {
    portModal3.style.display = "none";
}
portClose4.onclick = function() {
    portModal4.style.display = "none";
}
portClose5.onclick = function() {
    portModal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == portModal1) {
        portModal1.style.display = "none";
    }
    if (event.target == portModal2) {
        portModal2.style.display = "none";
    }
    if (event.target == portModal3) {
        portModal3.style.display = "none";
    }
    if (event.target == portModal4) {
        portModal4.style.display = "none";
    }
    if (event.target == portModal5) {
        portModal5.style.display = "none";
    }
}