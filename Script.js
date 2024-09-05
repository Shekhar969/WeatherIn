const UserInput = document.getElementById("userInput");
const Btn = document.getElementById("Submit");
const inFo = document.getElementById("info");
const apiKey = "0d94baf1cb9fb0f9165274c3f5c42ee2";

Btn.addEventListener("click", () => {
  let UserInputValue = UserInput.value.trim();
  UserInputValue = encodeURIComponent(UserInputValue);

  const urlCall = `https://api.openweathermap.org/data/2.5/weather?q=${UserInputValue}&appid=${apiKey}`;

  fetch(urlCall)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const tempCelsius = (data.main.temp - 273.15).toFixed(1);
      const weatherDescription = data.weather[0].description;
      inFo.innerHTML = `
                <h1>${data.name}</h1>
                <h2>Temperature: ${tempCelsius} °C</h2>
                <h3>Weather: ${weatherDescription}</h3>

        
`;
    });
});
