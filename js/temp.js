const api_key=`ca929ab4ca53a261158d9918b7d8a1ac`;
const searchTemperature=()=>
{
    const city_name=document.getElementById('city_name');
    const city_value=city_name.value;
    city_name.value='';
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${city_value}&appid=${api_key}&units=metric`
    fetch(url)
    .then(res=>res.json())
    .then(data=>Display_Result(data));
}

const innerFunction=(id,text)=>
{
    document.getElementById(id).innerText=text;
    
}

const Display_Result=(data)=>
{
    innerFunction('city',data.name);
    innerFunction('temparature',data.main.temp);
    innerFunction('weather',data.weather[0].main);
    const url=` http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon=document.getElementById('weather-icon');
    imgIcon.setAttribute('src',url);
}