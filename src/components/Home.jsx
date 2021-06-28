import { useHistory } from "react-router-dom";
 import { useEffect } from 'react';
import Header from "./HeaderLogin";
import { traerHeroe } from "./Request";



const Home = () =>{
   let  history = useHistory();
    if(!localStorage.getItem("token")){
        history.push("/");
    }
    
    useEffect(() => {
        let response = traerHeroe();
        console.log(response);
    },[]);
   
  
    return (
        <div className="bg-dark bg-home">
            <nav className="d-flex justify-content-end">
                <a className="text-light m-4 text-decoration-none" href="/">Cerrar sesión</a>
            </nav>
            <Header titulo = "EQUIPO DE HEROES"/>
                <form className="d-flex mx-5">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            <div className="d-flex justify-content-center text-light">
                <table className="table table-heroe text-light m-5">
                    <thead>
                        <tr className="table-thead">
                            <th className="heroe-item">IMAGEN</th>
                            <th className="heroe-item">NOMBRE</th>
                            <th className="heroe-item">DETALLES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="image1" className="heroe-item">
                                <div className="img-heroe" id="image"/>
                            </td>
                            <td id="name1" className="heroe-item">Alfreds Futterkiste</td>
                            <td id="detail1" className="heroe-item">Maria Anders</td>
                        </tr>
                        <tr>
                        <   td id="image2" className="heroe-item">
                                <div className="img-heroe" id="image"/>
                            </td>
                            <td id="name2" className="heroe-item">Alfreds Futterkiste</td>
                            <td id="detail2" className="heroe-item">Maria Anders</td>
                        </tr>
                        <tr>
                            <td id="image3" className="heroe-item">
                                <div className="img-heroe" id="image"/>
                            </td>
                            <td id="name3" className="heroe-item">Alfreds Futterkiste</td>
                            <td id="detail3" className="heroe-item">Maria Anders</td>
                        </tr>
                        <tr>
                            <td id="image4" className="heroe-item">
                                <div className="img-heroe" id="image"/>
                            </td>
                            <td id="name4" className="heroe-item">Alfreds Futterkiste</td>
                            <td id="detail4" className="heroe-item">Maria Anders</td>
                        </tr>
                        <tr>
                            <td id="image5" className="heroe-item">
                                <div className="img-heroe" id="image"/>
                            </td>
                            <td id="name5" className="heroe-item">Alfreds Futterkiste</td>
                            <td id="datail5" className="heroe-item">Maria Anders</td>
                        </tr>
                        <tr>
                            <td id="image6" className="heroe-item">
                                <div className="img-heroe" id="image"/>
                            </td>
                            <td id="name6" className="heroe-item">Alfreds Futterkiste</td>
                            <td id="detail6" className="heroe-item">Maria Anders</td>
                        </tr>
                    </tbody>
                </table>
            </div>
           
        </div>
    )
}

export default Home;