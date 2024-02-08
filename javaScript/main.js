document.addEventListener('DOMContentLoaded', function() {

    //Paralax
    var elemsParal = document.querySelectorAll('.parallax');
    var instancesParal = M.Parallax.init(elemsParal, {});

    var elemsNav = document.querySelectorAll('.sidenav');
    var instancesNav = M.Sidenav.init(elemsNav, {});
});

