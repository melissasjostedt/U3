"use script"
// Skapa olika mode
let themeSelector =document.querySelector("#theme");
let cssSelector =document.getElementById("css-selector");

themeSelector.addEventListener("change", change);

    function change(){
        if (themeSelector.value == "dark") {
            cssSelector.href =`dark.css`;
            localStorage.setItem("theme", `dark.css`)
        } else if( themeSelector.value == "colorful"){
            cssSelector.href =`colorful.css`;
            localStorage.setItem("theme", `colorful.css`)
        } else if(themeSelector.value == "light"){
            cssSelector.href = "";
            localStorage.setItem("theme", "")
        } 
    }
    function setTheme(){
        let theme = localStorage.getItem("theme")
        cssSelector.href ="";
    }

    setTheme();

    function myFunction(){
        document.getElementById("dropdown").classList.toggle("show");
    }

    
    const menuIcon = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle("change");
    });


