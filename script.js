$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Freelancer", "Graphic Designer", "Encoder", "Web Designer", "Virtual Assistant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Freelancer", "Graphic Designer", "Encoder", "Web Designer", "Virtual Assistant"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});


// ===== modal for all certificates =====

// Get the modal
var certModal = document.getElementById("certModal");

// Get the button that opens the modal
var certbtn = document.getElementById("cert-btn");

// Get the <span> element that closes the modal
var certspan = document.getElementsByClassName("certClose")[0];

// When the user clicks on the button, open the modal
certbtn.onclick = function() {
    certModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
certspan.onclick = function() {
    certModal.style.display = "none";
}