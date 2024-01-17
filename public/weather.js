
const getWeather = async (city) => {
    cityName.innerHTML=city
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=`+city;
    const apiKey = '20ccd84da3mshc70081598dfefadp146d67jsn39258fa63cb2'; // Replace with your actual API key
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    // Assuming you have HTML elements with these IDs
    
    const temp = document.getElementById('temp');
    const feels_like = document.getElementById('feels_like');
    const humidity = document.getElementById('humidity');
    const min_temp = document.getElementById('min_temp');
    const max_temp = document.getElementById('max_temp');
    const wind_speed = document.getElementById('wind_speed');
    const wind_degrees = document.getElementById('wind_degrees');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');

    const cloud_pct1 = document.getElementById('cloud_pct_mumbai');
    const temp1 = document.getElementById('temp_mumbai');
    const feels_like1 = document.getElementById('feels_like_mumbai');
    const humidity1 = document.getElementById('humidity_mumbai');
    const min_temp1 = document.getElementById('min_temp_mumbai');
    const max_temp1 = document.getElementById('max_temp_mumbai');
    const wind_speed1 = document.getElementById('wind_speed_mumbai');
    const wind_degrees1 = document.getElementById('wind_degrees_mumbai');
    

    const temp3 = document.getElementById('temp_newyork');
        const cloud_pct3 = document.getElementById('cloud_pct_newyork');
    const feels_like3 = document.getElementById('feels_like_newyork');
    const humidity3 = document.getElementById('humidity_newyork');
    const min_temp3 = document.getElementById('min_temp_newyork');
    const max_temp3 = document.getElementById('max_temp_newyork');
    const wind_speed3 = document.getElementById('wind_speed_newyork');
    const wind_degrees3 = document.getElementById('wind_degrees_newyork');

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Assuming the response is in JSON format

        // Update the HTML elements with the data
        cloud_pct.innerHTML = data.cloud_pct;
        temp.innerHTML = data.temp;
        temp2.innerHTML = data.temp;
        feels_like.innerHTML = data.feels_like;
        humidity.innerHTML = data.humidity;
        humidity2.innerHTML = data.humidity;
        min_temp.innerHTML = data.min_temp;
        max_temp.innerHTML = data.max_temp;
        wind_speed.innerHTML = data.wind_speed;
        wind_speed2.innerHTML = data.wind_speed;
        wind_degrees.innerHTML = data.wind_degrees;
        
    } catch (error) {
        console.error(error);
    }
    
};

const SubmitEvent = document.getElementById('submit-button');
const cityInput = document.getElementById('city-input');

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value);
    

});
getWeather("Delhi")


const getWeather2 = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai`;
    const apiKey = '20ccd84da3mshc70081598dfefadp146d67jsn39258fa63cb2'; // Replace with your actual API key
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Assuming the response is in JSON format

        // Assuming you have HTML elements with these IDs
       
        const temp = document.getElementById('temp_mumbai');
        const cloud_pct = document.getElementById('cloud_pct_mumbai');
    const feels_like = document.getElementById('feels_like_mumbai');
    const humidity = document.getElementById('humidity_mumbai');
    const min_temp = document.getElementById('min_temp_mumbai');
    const max_temp = document.getElementById('max_temp_mumbai');
    const wind_speed = document.getElementById('wind_speed_mumbai');
    const wind_degrees = document.getElementById('wind_degrees_mumbai');
    

        

        // Update the HTML elements with the data
        
        temp_mumbai.innerHTML = data.temp;
        cloud_pct_mumbai.innerHTML = data.cloud_pct;
        feels_like_mumbai.innerHTML = data.feels_like;
        humidity_mumbai.innerHTML = data.humidity;
        min_temp_mumbai.innerHTML = data.min_temp;
        max_temp_mumbai.innerHTML = data.max_temp;
        wind_speed_mumbai.innerHTML = data.wind_speed;
        wind_degrees_mumbai.innerHTML = data.wind_degrees;
        
    } catch (error) {
        console.error(error);
    }
    
};

getWeather2("Mumbai"); // Call the function to fetch weather data

const getWeather3 = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Miami`;
    const apiKey = '20ccd84da3mshc70081598dfefadp146d67jsn39258fa63cb2'; // Replace with your actual API key
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Assuming the response is in JSON format

        // Assuming you have HTML elements with these IDs
       
        const temp = document.getElementById('temp_newyork');
        const cloud_pct = document.getElementById('cloud_pct_newyork');
    const feels_like = document.getElementById('feels_like_newyork');
    const humidity = document.getElementById('humidity_newyork');
    const min_temp = document.getElementById('min_temp_newyork');
    const max_temp = document.getElementById('max_temp_newyork');
    const wind_speed = document.getElementById('wind_speed_newyork');
    const wind_degrees = document.getElementById('wind_degrees_newyork');
    

        

        // Update the HTML elements with the data
        
        temp_newyork.innerHTML = data.temp;
        cloud_pct_newyork.innerHTML = data.cloud_pct;
        feels_like_newyork.innerHTML = data.feels_like;
        humidity_newyork.innerHTML = data.humidity;
        min_temp_newyork.innerHTML = data.min_temp;
        max_temp_newyork.innerHTML = data.max_temp;
        wind_speed_newyork.innerHTML = data.wind_speed;
        wind_degrees_newyork.innerHTML = data.wind_degrees;
        
    } catch (error) {
        console.error(error);
    }
    
};

getWeather3("Miami"); // Call the function to fetch weather data


const getWeather4 = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai`;
    const apiKey = '20ccd84da3mshc70081598dfefadp146d67jsn39258fa63cb2'; // Replace with your actual API key
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Assuming the response is in JSON format

        // Assuming you have HTML elements with these IDs
       
        const temp = document.getElementById('temp_shanghai');
        const cloud_pct = document.getElementById('cloud_pct_shanghai');
    const feels_like = document.getElementById('feels_like_shanghai');
    const humidity = document.getElementById('humidity_shanghai');
    const min_temp = document.getElementById('min_temp_shanghai');
    const max_temp = document.getElementById('max_temp_shanghai');
    const wind_speed = document.getElementById('wind_speed_shanghai');
    const wind_degrees = document.getElementById('wind_degrees_shanghai');
    

        

        // Update the HTML elements with the data
        
        temp_shanghai.innerHTML = data.temp;
        cloud_pct_shanghai.innerHTML = data.cloud_pct;
        feels_like_shanghai.innerHTML = data.feels_like;
        humidity_shanghai.innerHTML = data.humidity;
        min_temp_shanghai.innerHTML = data.min_temp;
        max_temp_shanghai.innerHTML = data.max_temp;
        wind_speed_shanghai.innerHTML = data.wind_speed;
        wind_degrees_shanghai.innerHTML = data.wind_degrees;
        
    } catch (error) {
        console.error(error);
    }
    
};

getWeather4("Shanghai"); // Call the function to fetch weather data




const getWeather5 = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London`;
    const apiKey = '20ccd84da3mshc70081598dfefadp146d67jsn39258fa63cb2'; // Replace with your actual API key
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Assuming the response is in JSON format

        // Assuming you have HTML elements with these IDs
       
        const temp = document.getElementById('temp_london');
        const cloud_pct = document.getElementById('cloud_pct_london');
    const feels_like = document.getElementById('feels_like_london');
    const humidity = document.getElementById('humidity_london');
    const min_temp = document.getElementById('min_temp_london');
    const max_temp = document.getElementById('max_temp_london');
    const wind_speed = document.getElementById('wind_speed_london');
    const wind_degrees = document.getElementById('wind_degrees_london');
    

        

        // Update the HTML elements with the data
        
        temp_london.innerHTML = data.temp;
        cloud_pct_london.innerHTML = data.cloud_pct;
        feels_like_london.innerHTML = data.feels_like;
        humidity_london.innerHTML = data.humidity;
        min_temp_london.innerHTML = data.min_temp;
        max_temp_london.innerHTML = data.max_temp;
        wind_speed_london.innerHTML = data.wind_speed;
        wind_degrees_london.innerHTML = data.wind_degrees;
        
    } catch (error) {
        console.error(error);
    }
    
};

getWeather5("London"); // Call the function to fetch weather data



const getWeather6 = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo`;
    const apiKey = '20ccd84da3mshc70081598dfefadp146d67jsn39258fa63cb2'; // Replace with your actual API key
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Assuming the response is in JSON format

        // Assuming you have HTML elements with these IDs
       
        const temp = document.getElementById('temp_tokyo');
        const cloud_pct = document.getElementById('cloud_pct_tokyo');
    const feels_like = document.getElementById('feels_like_tokyo');
    const humidity = document.getElementById('humidity_tokyo');
    const min_temp = document.getElementById('min_temp_tokyo');
    const max_temp = document.getElementById('max_temp_tokyo');
    const wind_speed = document.getElementById('wind_speed_tokyo');
    const wind_degrees = document.getElementById('wind_degrees_tokyo');
    

        

        // Update the HTML elements with the data
        
        temp_tokyo.innerHTML = data.temp;
        cloud_pct_tokyo.innerHTML = data.cloud_pct;
        feels_like_tokyo.innerHTML = data.feels_like;
        humidity_tokyo.innerHTML = data.humidity;
        min_temp_tokyo.innerHTML = data.min_temp;
        max_temp_tokyo.innerHTML = data.max_temp;
        wind_speed_tokyo.innerHTML = data.wind_speed;
        wind_degrees_tokyo.innerHTML = data.wind_degrees;
        
    } catch (error) {
        console.error(error);
    }
    
};

getWeather6("Tokyo"); // Call the function to fetch weather data



const getWeather7 = async (city) => {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sydney`;
    const apiKey = '20ccd84da3mshc70081598dfefadp146d67jsn39258fa63cb2'; // Replace with your actual API key
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Assuming the response is in JSON format

        // Assuming you have HTML elements with these IDs
       
        const temp = document.getElementById('temp_sydney');
        const cloud_pct = document.getElementById('cloud_pct_sydney');
    const feels_like = document.getElementById('feels_like_sydney');
    const humidity = document.getElementById('humidity_sydney');
    const min_temp = document.getElementById('min_temp_sydney');
    const max_temp = document.getElementById('max_temp_sydney');
    const wind_speed = document.getElementById('wind_speed_sydney');
    const wind_degrees = document.getElementById('wind_degrees_tsydney');
    

        

        // Update the HTML elements with the data
        
        temp_sydney.innerHTML = data.temp;
        cloud_pct_sydney.innerHTML = data.cloud_pct;
        feels_like_sydney.innerHTML = data.feels_like;
        humidity_sydney.innerHTML = data.humidity;
        min_temp_sydney.innerHTML = data.min_temp;
        max_temp_sydney.innerHTML = data.max_temp;
        wind_speed_sydney.innerHTML = data.wind_speed;
        wind_degrees_sydney.innerHTML = data.wind_degrees;
        
    } catch (error) {
        console.error(error);
    }
    
};

getWeather7("Sydney"); // Call the function to fetch weather data