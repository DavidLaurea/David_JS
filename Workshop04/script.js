// Ex 1
function changeHeading() {
    document.querySelector('h1').innerHTML = 'Modified Heading!';
}

function secondButton() {
    const heading = document.querySelector('#ex1');
    heading.style.fontSize = '30px';
    heading.style.fontStyle = 'italic';
    heading.style.color = 'red';
    heading.style.backgroundColor = 'yellow';
}

function thirdButton() {
    const newPara = document.createElement('p');
    newPara.innerHTML = '<strong id="lorem"><em>Lorem ipsum</em></strong><em> dolor sit amet, consectetuer adipiscing elit...</em>';
    const fourthPara = document.getElementsByTagName('p')[3];
    fourthPara.parentNode.insertBefore(newPara, fourthPara.nextSibling);

    document.body.style.backgroundColor = 'lightblue';

    const img = document.createElement('img');
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png';
    img.alt = 'Logo';
    img.width="200";
    newPara.appendChild(img);
}

// Ex 2
function hide() {
    document.getElementById("me").style.display = "none";
}

function show() {
    document.getElementById("me").style.display = "block";
}

function changeSurpriseFontSize() {
    const elements = document.getElementsByClassName("surprise");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.fontSize = "20px";
    }
}

// Ex 3
function alertChoice() {
    const selectedValue = document.getElementById("mySelect").value;
    alert("You selected: " + selectedValue);
}

function changeCarImage() {
    const selectedCar = document.getElementById("mySelect").value;
    const carImage = document.getElementById("carimage");

    const carImages = {
        "BMW": "https://www.bmw.fi/content/dam/bmw/common/all-models/m-series/m8-coupe/2022/navigation/bmw-8series-coupe-modellfinder.png",
        "Audi": "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCElzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grj1XjPJu_u4_ctNESsdu5tGzrp8bNFxhYgboYVwEJ5iVAgm87kOB0ZQCTIPPWgIgqEJ_JmpmBgbUCyIhkAAFBDQMigTC7i2uIo6dPMAAwDt3Z2QAAAA?wid=850",
        "Mercedes": "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/e-class/sedan/all-vehicles/2024-E350-4M-SEDAN-AVP-DR.png",
        "Volvo": "https://www.lloydmotorgroup.com/ImageLibrary/images/Volvo/Retail/New%20Car%20Range/Volvo-New-Cars-Hero-Image.png"
    };

    carImage.src = carImages[selectedCar] || "https://via.placeholder.com/400";
}

function changeImageBorder() {
    document.getElementById("carimage").style.border = "5px solid red";
}

function removeImageBorder() {
    document.getElementById("carimage").style.border = "none";
}

// Ex 4
function changePosition() {
    const image = document.getElementById("carimage");
    image.style.position = "relative";
    image.style.left = "200px";
    image.style.top = "500px";
}

let moveRight = true;

function doMove() {
    const image = document.getElementById("carimage");
    let position = parseInt(image.style.left, 10) || 0;
    if (moveRight) {
        position += 10;
    } else {
        position -= 10;
    }
    image.style.left = position + "px";

    if (position > window.innerWidth - image.width || position < 0) {
        moveRight = !moveRight;
    }
}

function fadeOut() {
    const image = document.getElementById("carimage");
    let opacity = parseFloat(image.style.opacity) || 1;
    if (opacity > 0) {
        opacity -= 0.1;
        image.style.opacity = opacity;
    }
}

function remove() {
    const image = document.getElementById("carimage");
    image.remove();
}

// Ex 5
function insertRows() {
    const table = document.getElementById("data").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).textContent = document.getElementById("textfield").value;
    newRow.insertCell(1).textContent = document.getElementById("textfield2").value;
    newRow.insertCell(2).textContent = document.getElementById("textfield3").value;
}
