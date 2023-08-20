import { NavLink } from 'react-router-dom';
import './sobremi.css';

const Sobremi = () => {
    return (
        <main className='main'>
            <div className='sbm-title'>
                <p>Sobre mí</p>
            </div>
            <h2>Empezamos, ¿Estás preparadx?</h2>
            <h3>
                Esta web a sido diseñada para hacer un breve recorrido en un
                proceso que no solo encontre el amor a los códigos, si no
                también me encontre a mí mismo y el amor propio que tanto
                hanelaba, hos invito a conocer mí historia.
            </h3>
            <p>
                Todo empezó siendo vigilante de seguridad, largas noches de
                guardia en una garíta, empecé a conocerme más a mi mismo y darme
                cuenta de lo que realmente me gustába, musica, aficiones,
                trabajo... Y encontrandome a mí reencontré la programación, tán
                solo sabia hacer una página de html por aquél entonces
            </p>
            <p>
                Tiempo, dedicación y amor própio fueron tres pilares
                fundamentales en mi aprendizaje del lenguaje de programación,
                hoy en dia me encanta pasar mis momentos leyendo código.
            </p>
            <p>
                Hos presento algunos de mis proyectos, siéndo esta web uno de
                ellos.
            </p>
            <div className='efecto'>
                <NavLink to={'/proyectos'}>
                    <p className='hover-options'>->Proyectos</p>
                </NavLink>
                <p className='marcador'>|</p>
            </div>
            <div className='photo-perfil'></div>
        </main>
    );
};

export default Sobremi;
