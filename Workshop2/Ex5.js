document.write("<p>Exercise 5</p>");
var images = [
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
];

document.write('<img src="' + images[0] + '" alt="Image">');

function displayRandomImage() {
    var randomIndex = Math.floor(Math.random() * images.length);
    document.write('<img src="' + images[randomIndex] + '" alt="Random Image">');
}

displayRandomImage();
