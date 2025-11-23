// Change navigation menu style when scrolled
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Change menu item style on hover
var menuItems = document.querySelectorAll('#navbar-menu a');

menuItems.forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        this.classList.add('active');
    });
    
    item.addEventListener('mouseleave', function() {
        this.classList.remove('active');
    });
});

