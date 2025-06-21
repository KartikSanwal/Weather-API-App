console.log("hello jee kartik");

const API_KEY = "3108d1791054225cd348d10cb45a4269";

async function renderWeatherInfo(data) {
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)}℃`;
    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
    try{
        let city = "goa";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`);
        const data = await response.json();

        console.log("Weather data:->" , data);
    }

    catch(err){

// handle the error

    }

    //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
}

async function getCustomWeatherDetails() {
    let latitude = 15.633;
    let longitude = 18.333;

    let result =await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={API key}`)

    let data = await result.json();

    console.log(data);
}