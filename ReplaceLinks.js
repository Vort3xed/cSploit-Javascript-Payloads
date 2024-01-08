document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('a');

    links.forEach(function (link) {
        //link.href = <PLACE LINK HERE>
        link.href = 'https://microsoft.com';
    });
});