const UserInput = document.getElementById("userInput")
const Btn =document.getElementById("Submit")
const inFo =document.getElementById("info")
const apiKey="0d94baf1cb9fb0f9165274c3f5c42ee2";


Btn.addEventListener("click" , ()=>{
    let UserInputValue = UserInput.value.trim();
    UserInputValue = encodeURIComponent(UserInputValue);


    const urlCall =`https://api.openweathermap.org/data/2.5/weather?q=${UserInputValue}&appid=${apiKey}`;

    fetch(urlCall)
    .then(response => response.json())
    .then(data => {
        // console.log(data)

        

    })
})