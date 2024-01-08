document.addEventListener("DOMContentLoaded", function () {
    var paragraphs = document.getElementsByTagName('p');
    
    for (var i = 0; i < paragraphs.length; i++) {
        var p = paragraphs[i];
        var h1 = document.createElement('h1');
        h1.textContent = p.textContent;
        p.parentNode.replaceChild(h1, p);
    }
});
