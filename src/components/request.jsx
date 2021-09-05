import axios from "axios";

export function enviarDatos(email, password, cbresponse, cberror) {
  axios
    .post("http://challenge-react.alkemy.org/", {
      email: email,
      password: password,
    })
    .then(function (response) {
      cbresponse(response);
    })
    .catch(function (error) {
      cberror(error.response.data);
      console.log(cberror);
    });
}

export const getHeroData = async (heroName) => {
  return await axios.get(`https://www.superheroapi.com/api.php/3603195309782355/search/${heroName}`);
}


