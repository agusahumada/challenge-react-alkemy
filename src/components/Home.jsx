import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import Header from "./HeaderLogin";
import { getHeroData } from "./Request";
import Hero from './Hero';

const Home = () => {
  let history = useHistory();
  if (!localStorage.getItem("token")) {
    history.push("/");
  }

  //   const [heros, setHeros] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const formik = useFormik({
    initialValues: {
      search: "",
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await getHeroData(formik.values.search);
    const listaDeHeroes  =  response.data.results;
    setHeroes([]);
    listaDeHeroes.forEach((heroe) => { 
      setHeroes((heroes) => [...heroes, heroe]);
    });
  }

  return (
    <div className="bg-dark bg-home">
      <nav className="d-flex justify-content-end">
        <a className="text-light m-4 text-decoration-none" href="/">
          Cerrar sesión
        </a>
      </nav>
      <Header titulo="EQUIPO DE HEROES" />
      <form className="d-flex mx-5" onSubmit={handleSubmit}>
        <input
          id="search"
          name="search"
          className="form-control"
          type="text"
          placeholder="Search Hero Name"
          aria-label="Search"
          onChange={formik.handleChange}
          value={formik.values.search}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div>
        {heroes.length > 0 ? heroes.map((hero) => (
            <Hero 
                className="text-light"
                name={hero.name}
                image={hero.image.url}
                id={hero.id}
            />
        )) : <span className="text-light">No hay heroes</span> }
        </div>
    </div>
  );
};

export default Home;
