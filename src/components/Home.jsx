import { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { getHeroData } from "./Request";
import Header from "./HeaderLogin";
import Hero from "./Hero";
import Team from "./Team";

const Home = () => {
  let history = useHistory();
  if (!localStorage.getItem("token")) {
    history.push("/");
  }

  const [heros, setHeros] = useState([]);
  const [team, addTeam] = useState([]);
  const [error, setError] = useState(false);
  const [teamPowerStats, setTeamPowerStats] = useState({
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
    bad: 0,
    good: 0,
  });

  const formik = useFormik({
    initialValues: {
      search: "",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await getHeroData(formik.values.search);

    if (response.data.response !== "error") {
      setError(false);
      const listaDeheros = response.data.results;
      setHeros([]);
      listaDeheros.forEach((hero) => {
        setHeros((heros) => [...heros, hero]);
      });
    } else {
      const error = response.data.error;
      setError(true);
      setHeros([]);
    }
  };
  return (
    <Fragment>
      <div className="bg-home blur">
        <nav className="d-flex justify-content-end">
          <a className="text-light m-4 text-decoration-none" href="/">
            Cerrar sesión
          </a>
        </nav>
        <Header titulo="EQUIPO DE HEROES" />
        <form
          id="form-search"
          className="d-flex justify-content-center mx-5"
          onSubmit={handleSubmit}
        >
          <input
            id="search"
            name="search"
            className="form-control d-flex w-25 bg-transparent text-light"
            type="text"
            placeholder="Search Hero Name"
            aria-label="Search"
            onChange={formik.handleChange}
            value={formik.values.search}
          />
          <button className="btn btn-primary mx-2" type="submit">
            Buscar
          </button>
        </form>
        {error ? (
          <p className="text-light d-flex justify-content-center mt-3">
            No se encontraron resultados.
          </p>
        ) : null}
        <div className="container">
          <div className="row">
            {heros.length > 0 ? (
              heros.map((hero) => (
                <Hero
                  id={hero.id}
                  key={hero.id}
                  hero={hero}
                  heros={heros}
                  setHeros={setHeros}
                  team={team}
                  addTeam={addTeam}
                  name={hero.name}
                  image={hero.image.url}
                  intelligence={hero.powerstats.intelligence}
                  strength={hero.powerstats.strength}
                  speed={hero.powerstats.speed}
                  durability={hero.powerstats.durability}
                  power={hero.powerstats.power}
                  combat={hero.powerstats.combat}
                  alignment={hero.biography.alignment}
                  teamPowerStats={teamPowerStats}
                  setTeamPowerStats={setTeamPowerStats}
                  className="text-light"
                />
              ))
            ) : (
              <span className="text-center text-light m-3">
                BIENVENID@, BUSCA HEROES EN EL BUSCADOR Y CREA TU PROPIO TEAM DE
                SUPERHEROES! ...PERO RECUERDA QUE TU TEAM TIENE QUE SER DE 6
                INTEGRANTES COMO MÁXIMO.
              </span>
            )}
          </div>
          <Team
            team={team}
            addTeam={addTeam}
            setTeamPowerStats={setTeamPowerStats}
            teamPowerStats={teamPowerStats}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
