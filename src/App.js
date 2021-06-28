import Header from './components/HeaderLogin';
import Login from './components/Login';
import Fondo from '../src/images/bg-Login.png';

function App() {
  const sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage:  `url(${Fondo})`
  };
  
  return (
          <div className="background" style={sectionStyle}>
            <Header titulo = "CREA TU PROPIO EQUIPO DE SUPERHEROES"/>
            <Login/>
          </div>
       
  );
}

export default App;
