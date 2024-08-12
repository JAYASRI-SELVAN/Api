fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(response=>{
    console.log("response",response);
     console.log("body",response.body);
     return response.json();
 })
 .then(data =>{
    console.log(data);
 })
 .catch(error =>{
    console.log('There was a problem with the fetch operation:',error)
 });