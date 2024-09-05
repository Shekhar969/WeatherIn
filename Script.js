const UserInput = document.getElementById("userInput")
const Btn =document.getElementById("Submit")
const inFo =document.getElementById("info")
const apiKey="0d94baf1cb9fb0f9165274c3f5c42ee2";


Btn.addEventListener("click" , ()=>{
    UserInputvalue =UserInput.value;
    // console.log(UserInputvalue)

    fetch="https://api.openweathermap.org/data/2.5/weather?q=${UserInputvalue}&appid=0d94baf1cb9fb0f9165274c3f5c42ee2"
    .then(Response => Response.json())
    .then(data =>{
        inFo.innerHTML=data;
    })
})