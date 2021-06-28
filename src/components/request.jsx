import axios from 'axios';

export function enviarDatos(email,password,cbresponse,cberror){
    axios.post('http://challenge-react.alkemy.org/', {
        email: email,
        password: password
      })
      .then(function (response) {
        cbresponse(response);
      })
      .catch(function (error) {
        cberror(error.response.data);
      });
    
}

export function traerHeroe() {
  let heroName;
  axios.get('https://www.superheroapi.com/api.php/3603195309782355/search/batman')
  .then(function (response) {
    heroName = response.data.results[0].name;
    return heroName;
  })
  .catch(function(error){
    console.log(error.response);
  });
}