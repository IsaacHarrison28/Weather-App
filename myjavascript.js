let result = document.getElementById('result');
let searchBtn = document.getElementById('search-btn');
let cityRef = document.getElementById('city').value;

// let getWeather = ()  => {

//     if(cityRef.length == 0){
//         result.innerHTML = `<h5>Please Enter a City Name</h5>`
//     }
//     else{
//         let url = 'https://api.openweathermap.org/data/2.5/weather?q=${cityRef}&appid=${APIkey}&units=metric';
//         cityRef = ""
//         fetch(url)
//         .then((resp) => resp.json())
//         .then((data) => {
//             //I must remove this once done with everything
//             console.log(data);
//             console.log(data.weather[0].icon);
//             console.log(data.weather[0].main);
//             console.log(data.weather[0].description);
//             console.log(data.name);
//             console.log(data.main.temp_min);
//             console.log(data.main.temp_max);
//             result.innerHTML = `
//             <h2>${data.name}</h2>
//             <h4 class="weather">${data.weather[0].main}</h4>
//             <h4 class="desc">${data.weather[0].description}</h4>
//             <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
//             <h1>${data.main.temp} &#176;</h1>
//             <div class="temp-container">
//                 <div>
//                     <h4 class="title">Min</h4>
//                     <h4 class="temp">${data.main.temp_min}</h4>
//                 </div>
//                 <div>
//                     <h4 class="title">Max</h4>
//                     <h4 class="temp">${data.main.temp_max}</h4>
//                 </div>
//             </div>
//             `
//         })
//         .catch(()=> {
//             result.innerHTML = `<h3 class="msg">City Not Found</h3>`;
//         })
//     }
// };

// searchBtn.addEventListener('click', getWeather)
// window.addEventListener('load', getWeather);

