// Exercise 2
// Console vastaukset
// 1.
// $('h3');

// 2.
// $('#contant').text('vastaus');

// 3.
// $('img').attr('src', 'https://via.placeholder.com/150');

// 4.
// $('.sideBarListBox').toggle();

// 5.
// $('li:contains("Lorem")').css('text-decoration', 'underline');

// 6.
// $('.sideBarListBox a').css({'color': 'blue','font-weight': 'bold'});

// Exercise 3
// console vastaukset

// 1.
// $('#button').click(() => $('h1').fadeIn());

// 2.
// $('#button2').click(() => $('h1').fadeOut());

// 3.
// $('#button3').click(() => $('main').slideUp());

// 4.
// $('#button4').click(() => $('main').slideDown());

// 5. Animate example
// $('#button5').click(() => {$('h1').animate({opacity: 0}, 1000).animate({opacity: 1}, 1000);});

// Exercise 4
// 1. console vastaus
// $('#ajax').load('https://meijastiina.github.io/news_rss_topstories.xml');
 

function loadAjaxContent() {
    const url = $('#mySelect').val();
    $('#ajax').load(url, function(response, status, xhr) {
        if (status === "error") {
            $('#ajax').text("An error occurred while loading the content.");
        }
    });
}

