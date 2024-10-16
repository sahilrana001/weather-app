let url ="https://api.openweathermap.org/data/2.5/weather?q=";
let apiKey = "d76d1aea9dcfe867660b26ec84c07760&units=metric" 


let inp = document.querySelector("input");
let btn =document.querySelector(".btn");

btn.addEventListener("click",function enter(event){

   console.log("clicked");
   let q= inp.value
   console.log(q);
   
    weather(q)
    .then((response)=>{
      console.log(weather(q));

      
      
      let wind = document.querySelector(".wind")
      let h2 = document.querySelector(".city")
      let h1 = document.querySelector(".temp")
      let humidity = document.querySelector(".humidity")
      let img = document.querySelector(".weather-icon");
      
      
      wind.innerHTML = response.wind.speed +" "+ "km/hr";
      h2.innerHTML = response.name;
      h1.innerHTML = response.main.temp + "°c"
      humidity.innerHTML =response.main.humidity +"%"

      // ------>>>>>>>====change of photo------->>>>>
      let sky = response.weather[0].main;
      console.log(sky);

      if( response.weather[0].main =="Haze"){
         img.src ="/assets/mist.png"

      }
      else if( response.weather[0].main =="Clear"){
         img.src ="/assets/clear.png"

      }
      else if( response.weather[0].main =="Cloud"){
         img.src ="/assets/clouds.png"

      }
      else if( response.weather[0].main =="Drizzle"){
         img.src ="/assets/drizzle.png"

      }
      else if( response.weather[0].main =="Rain"){
         img.src ="/assets/rain.png"

      }
      else if( response.weather[0].main =="Mist"){
         img.src ="/assets/mist.png"

      } else if( response.weather[0].main =="Snow"){
         img.src ="/assets/snow.png"

      }
      else if( response.weather[0].main =="Wind"){
         img.src ="/assets/wind.png"

      }
      
    })
    .catch((err)=>{
     console.log(inp.value);
     
      console.log("error is her");
      alert("data not found")
      inp.value = "";
      
    })
    let div = document.querySelector(".weather")
    div.style.display ="block";

    inp.value = "";

     

});





// ---->>>>

async function weather(q) {
   try{
      const response = await fetch(url + q + "&appid="+apiKey);
      let data = await response.json();
   
      return data;
   }
   catch(err){
     console.log("error");
     
   }


}
  
   

   
   
   

