function openCloseMenu(change) {
    var x = document.getElementById("menu-responsive");

    if (x.className === "nav") {
        x.className += " responsive";

    } else {
        x.className = "nav";
    }
    
    change.classList.toggle("change")

}

function closeMenu() {
    var iconMenu = document.querySelector(".icon-menu")
    var menuResponsive = document.getElementById("menu-responsive")
    
    if (menuResponsive.className === 'nav responsive' && iconMenu.className === 'icon-menu change') {
        iconMenu.classList.toggle("change")
        menuResponsive.classList.toggle('responsive')
    }
}


const menuItems = document.querySelectorAll('#menu-responsive a[href^="#"]');
 
menuItems.forEach(item => {
    item.addEventListener('click', scrollToAdOnClick)
})

function scrollToAdOnClick(event) {
    event.preventDefault();
    const element = event.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop
    
    if (id === '#home') {
        window.scroll({
            top: to - 80,
            behavior: "smooth",
        })
    } else {
        window.scroll({
            top: to,
            behavior: "smooth"
        })
    }
}