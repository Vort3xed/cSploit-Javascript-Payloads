document.addEventListener("DOMContentLoaded", function () {
    var urls = [
        'https://example.com/tab1',
        'https://example.com/tab2',
        'https://example.com/tab3',
        'https://example.com/tab4'
    ];

    for (var i = 0; i < urls.length; i++) {
        window.open(urls[i], '_blank');
    }
});