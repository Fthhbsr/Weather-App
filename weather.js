const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

form.addEventListener("submit", () => {
  getWeatherDataFromApi();
});

const getWeatherDataFromApi = () => {
  alert("http request sended");
};

// localStorage.setItem(
//   "apiKey",
//   EncryptStringAES("fc216cb1fd2ce5d7f04e79e272fe97cf")
// );

// const search = document.querySelector("button");
// const cityInput = document.querySelector("input");
// const container = document.querySelector(".cities");

// const getWeatherInfo = async () => {
//   // if (
//   //   container.innerHTML.toLowerCase().includes(cityInput.value.toLowerCase())
//   // ) {
//   //   alert(cityInput.value + " is already exists");
//   // }

//   const key = `fc216cb1fd2ce5d7f04e79e272fe97cf`;
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=${key}`;

//   try {
//     const response = await fetch(url);
//     const weatherInfo = await response.json();
//     console.log(weatherInfo);
//     const { weather, main, name } = weatherInfo;

//     container.innerHTML = `${main.temp} <br> ${name} <br> ${weather[0].description} <br> <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png"/> <br>`;
//   } catch (error) {
//     alert("There is not a city called : " + cityInput.value);
//   } finally {
//     cityInput.value = "";
//   }
// };

// search.addEventListener("click", getWeatherInfo);
