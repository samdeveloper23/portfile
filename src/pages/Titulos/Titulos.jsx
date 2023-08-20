import { NavLink } from 'react-router-dom';
import './titulos.css';

const Titulos = () => {
    return (
        <main>
            <h2>Titulos:</h2>
            <div className='carpeta-titulos'>
                <div className='sbm-title'>
                    <p>Algunos títulos...</p>
                </div>
                <div className='lista-titulos'>
                    <h3>Operador Linux</h3>
                    <p>Udemy</p>
                    <div className='precarga'>
                        <NavLink
                            to={
                                'https://drive.google.com/file/d/1lUjq-7aT59sYFxWgAggy-NOQ1swiLQdl/view?usp=drive_link'
                            }
                            target='_blank'
                        >
                            <p>ver</p>
                        </NavLink>
                    </div>
                </div>
                <div className='lista-titulos'>
                    <h3>Git and GitHub</h3>
                    <p>Udemy</p>
                    <div className='precarga'>
                        <NavLink
                            to={
                                'https://drive.google.com/file/d/174sdZXUgXegwRV9AbQteiNAN2Cwsi5VH/view?usp=drive_link'
                            }
                            target='_blank'
                        >
                            <p>ver</p>
                        </NavLink>
                    </div>
                </div>
                <div className='lista-titulos'>
                    <h3>Master JavaScript</h3>
                    <p>Udemy</p>
                    <div className='precarga'>
                        <NavLink
                            to={
                                'https://drive.google.com/file/d/1V7Bi2afL8eleKL-P61jJfdqCvQFqONra/view?usp=drive_link'
                            }
                            target='_blank'
                        >
                            <p>ver</p>
                        </NavLink>
                    </div>
                </div>
                <div className='lista-titulos'>
                    <h3>Full Start JavaScript</h3>
                    <p>Hack a Boss</p>
                    <div className='precarga'>
                        <NavLink to={'#'} target='_blank'>
                            <p>ver</p>
                        </NavLink>
                    </div>
                </div>
                <div className='advertencia'>
                    Estos son algunos de los títulos relacionados con la
                    programación web, para conocer todos pongase en contacto,
                    como autodidacta me apasiona los codigos hasta el punto de
                    aprender ciberseguridad cullos titulos están guardados en mi
                    nube personal realizada por mí.
                </div>
            </div>
        </main>
    );
};

export default Titulos;
