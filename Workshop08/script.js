// Exercise 1
const text = '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

document.getElementById('displayNames').addEventListener('click', () => {
  const data = JSON.parse(text).employees;
  const result = data.map(employee => `${employee.firstName} ${employee.lastName}`).join('<br>');
  document.getElementById('jsondata').innerHTML = result;
});

document.getElementById('displayAll').addEventListener('click', () => {
  const data = JSON.parse(text);
  document.getElementById('jsondata').innerHTML = JSON.stringify(data, null, 2);
});

// Exercise 2
document.getElementById('loadRawData').addEventListener('click', () => {
  fetch('http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750')
    .then(response => response.json())
    .then(data => {
      document.getElementById('rawdata').textContent = JSON.stringify(data, null, 2);
    });
});

document.getElementById('loadAndParseData').addEventListener('click', () => {
  fetch('http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750')
    .then(response => response.json())
    .then(data => {
      const table = document.createElement('table');
      const headerRow = `<tr><th>Title</th><th>Year</th><th>Poster</th></tr>`;
      const rows = data.Search.map(movie => 
        `<tr><td>${movie.Title}</td><td>${movie.Year}</td><td><img src="${movie.Poster}" alt="${movie.Title}" width="100"/></td></tr>`
      ).join('');
      table.innerHTML = headerRow + rows;
      document.getElementById('rawdata').innerHTML = '';
      document.getElementById('rawdata').appendChild(table);
    });
});

// Exercise 3
const apiKey = '6ddb5d1b75d2b26708999d43c74e92c9';
document.getElementById('getWeatherData').addEventListener('click', () => {
  const city = 'Helsinki';
  fetchWeather(city);
});

document.getElementById('search').addEventListener('click', () => {
  const city = document.getElementById('citysearch').value;
  fetchWeather(city);
});

document.getElementById('city').addEventListener('change', (event) => {
  const city = event.target.value;
  fetchWeather(city);
});

function fetchWeather(city) {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('weatherdata').innerHTML = `
        <p>City: ${data.name}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Clouds: ${data.weather[0].description}</p>
      `;
    });
}
