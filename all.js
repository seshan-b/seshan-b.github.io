// Navbar

const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const clickNavLink = document.getElementsByClassName('nav-link');


menu.addEventListener("click", () =>
{
    navbar.classList.toggle("open-navbar");
    menu.classList.toggle("change-icon");

    // for(var i = 0; i < clickNavLink.length; i++)
    // {

    //     console.log(clickNavLink[i]);
    // }

});


// Array.prototype.forEach.call(clickNavLink, function(element) {
//   element.addEventListener('click', function() {
    
//     // navbar.classList.remove("open-navbar");
//     // menu.classList.remove("change-icon");

//     console.log("Click is happening"); //For Testing
//     alert("Yes");
//   });
// });
