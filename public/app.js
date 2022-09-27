const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a233616d6amsh27ded8d54e136aep17518cjsna63a0c865061",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  
  const datosApi = async (city) => {
    const api = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,options);
    const datos = await api.json();
    console.log(datos);
    try {
      const container = document.querySelector(".container");
      const countryes = document.querySelector(".country");
      const temp = document.querySelector(".temp");
      const localTime = document.querySelector(".localtime");
      const wind = document.querySelector(".wind");
      const humidit = document.querySelector(".humidity");
      const img = document.querySelector(".img");
      const updated = document.querySelector(".updated");
      const texto = document.querySelector(".text");
     
        
        const { humidity, temp_c, wind_kph,last_updated
        } = datos.current;
        const { icon, text } = datos.current.condition;
        const { name, country, localtime } = datos.location;
        countryes.innerHTML = name;
        img.src = icon;
        texto.innerHTML = text;
        temp.innerHTML = `${temp_c}°C`;
        wind.innerHTML = ` wind: ${wind_kph}km/h`;
        humidit.innerHTML = `${humidity}%`;
    
        document.body.style.backgroundImage = url(`https://source.unsplash.com/1600x900/? ${name}
        `);
        
      
    } catch (error) {
      console.log(error);
  
      
    }
    
  };
  
  
  function search () {
      datosApi(document.getElementById("texto").value);
     
  
  }
  
  const btnSearch = document.querySelector(".btnSearch");
  btnSearch.addEventListener("click", (e)=>{
      
      search();
      if (e.keyKode === "Enter") {
        search();
        
      }
  });
  
  
  
  
  datosApi("Pedro Juan Caballero")
  
  