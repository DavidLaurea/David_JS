// Exercise 1
function getData() {
    const destination = document.getElementById('destination').value;
    const arrival = document.getElementById('arrival').value;

    const services = [];
    document.querySelectorAll('#services input[type="checkbox"]:checked').forEach((checkbox) => {
        services.push(checkbox.value);
    });

    localStorage.setItem('destination', destination);
    localStorage.setItem('arrival', arrival);
    localStorage.setItem('services', JSON.stringify(services));
    
    alert('Reservation saved!');
}

// Exercise 2
function loadSessionData() {
    const destination = localStorage.getItem('destination');
    const arrival = localStorage.getItem('arrival');
    const services = JSON.parse(localStorage.getItem('services'));

    if (destination && arrival && services) {
        let sessionData = `<p>Destination: ${destination}</p>`;
        sessionData += `<p>Arrival Date: ${arrival}</p>`;
        sessionData += `<p>Services: ${services.join(', ')}</p>`;
        
        document.getElementById('sessiondata').innerHTML = sessionData;
    } else {
        document.getElementById('sessiondata').innerHTML = '<p>No saved session data found.</p>';
    }
}

// Exercise 3
function getSessionData() {
    const destination = document.getElementById('sessionDestination').value;
    const arrival = document.getElementById('sessionArrival').value;

    const services = [];
    document.querySelectorAll('#sessionServices input[type="checkbox"]:checked').forEach((checkbox) => {
        services.push(checkbox.value);
    });

    sessionStorage.setItem('sessionDestination', destination);
    sessionStorage.setItem('sessionArrival', arrival);
    sessionStorage.setItem('sessionServices', JSON.stringify(services));

    alert('Session reservation saved!');
}

function loadSessionStorageData() {
    const destination = sessionStorage.getItem('sessionDestination');
    const arrival = sessionStorage.getItem('sessionArrival');
    const services = JSON.parse(sessionStorage.getItem('sessionServices'));

    if (destination && arrival && services) {
        let sessionStorageData = `<p>Destination: ${destination}</p>`;
        sessionStorageData += `<p>Arrival Date: ${arrival}</p>`;
        sessionStorageData += `<p>Services: ${services.join(', ')}</p>`;
        
        document.getElementById('sessionStorageData').innerHTML = sessionStorageData;
    } else {
        document.getElementById('sessionStorageData').innerHTML = '<p>No session data found.</p>';
    }
}

window.onload = function() {
    loadSessionData();
    loadSessionStorageData();
};
