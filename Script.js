const UserInput = document.getElementById("userInput");
const Btn = document.getElementById("Submit");
const inFo = document.getElementById("info");
const apiKey = "0d94baf1cb9fb0f9165274c3f5c42ee2";
const boys=["tushar","roshan","alle"]


Btn.addEventListener("click", () => {
  let UserInputValue = UserInput.value.trim().toLowerCase();
  UserInputValue = encodeURIComponent(UserInputValue);
if(boys.includes(UserInputValue)){
  console.log("Hello")
}
  const urlCall = `https://api.openweathermap.org/data/2.5/weather?q=${UserInputValue}&appid=${apiKey}`;

  fetch(urlCall)
    .then((response) => {
      if (!response.ok) {
        throw new error(`Error In Reteriviting Data`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const tempCelsius = (data.main.temp - 273.15).toFixed(1);
      const weatherDescription = data.weather[0].description;
      inFo.innerHTML = `
                <p>${data.name}</p>
                <p>Temperature : ${tempCelsius} °C</p>
                <p>Weather : ${weatherDescription}</p>
                <p>Humidity : ${data.main.humidity} %</p>
                <p>Wind Speed : ${data.wind.speed} Km/h</p>


`;
    })
    .catch((error) => {
      console.error("error Fetching Weather:", error)
      (inFo.innerHTML = ` <p>  Abba K Vo k YO Laiiiii </p>`)
    });
});
