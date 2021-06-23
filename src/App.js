import {Fragment} from 'react';
import Header from './components/headerLogin';
import Login from './components/login';
import Fondo from '../src/images/bg-Login.png';

function App() {

  const sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage:  `url(${Fondo})`
  };
  

  return (
    <Fragment>
      <div className="background" style={sectionStyle}>
        <Header titulo = "CREA TU PROPIO EQUIPO DE SUPERHEROES"/>
        <Login/>
      </div>
    </Fragment>
  );
}

export default App;
