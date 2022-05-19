
const country = document.querySelector(".box");

fetch("https://restcountries.com/v3.1/all").then(response => response.json())
    .then(data => data.forEach(element => {
        country.innerHTML += `
    

    <div class="card" style="width: 18rem;">
    <img src="${element.flags.png}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class=>${element.name.common}</h5>
      <p class=>Population:${element.population}</p>
      <p class=>Region:${element.region}</p>
      <p class=>Capital:${element.capital}</p>
      
    </div>
  </div>



    
    
    
    `


    }))