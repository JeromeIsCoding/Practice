//Animate Smooth Scroll
$('#ViewWork').on('click', function() {
    const Images = $('#Images').position().top;

    $('html, body').animate(
        {
            scrollTop: Images
        }, 
        900
    );
});