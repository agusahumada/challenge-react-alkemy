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
