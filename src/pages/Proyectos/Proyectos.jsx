import { NavLink } from 'react-router-dom';
import './proyectos.css';

const Proyectos = () => {
    return (
        <main>
            <h2>-Proyectos:</h2>
            <div className='container-proyect'>
                <div className='sbm-title-two'>
                    <p>Algúnos de mís proyectos</p>
                </div>
                <div className='container-card'>
                    <NavLink
                        to={'https://courageous-mandazi-4cff23.netlify.app/'}
                        target='_blank'
                    >
                        <div className='img-one'></div>
                    </NavLink>
                    <div className='description-one'>
                        <NavLink
                            to={
                                'https://courageous-mandazi-4cff23.netlify.app/'
                            }
                            target='_blank'
                        >
                            <h3>Movie Quiz</h3>
                        </NavLink>
                        <NavLink
                            to={
                                'https://www.linkedin.com/posts/samael-machado-919a19274_programadorweb-programar-programacion-activity-7060031693839069184-Sb2m?utm_source=share&utm_medium=member_desktop'
                            }
                            target='_blank'
                        >
                            <p>
                                -> Bateria de preguntas sobre cine, este
                                proyecto fué uno de los primeros.
                            </p>
                        </NavLink>
                    </div>
                </div>
                <div className='container-card'>
                    <NavLink
                        to={'https://willowy-kelpie-d8598b.netlify.app/'}
                        target='_blank'
                    >
                        <div className='img-two'></div>
                    </NavLink>
                    <div className='description-one'>
                        <NavLink
                            to={'https://willowy-kelpie-d8598b.netlify.app/'}
                            target='_blank'
                        >
                            <h3>Piedra Papel o Tijera</h3>
                        </NavLink>
                        <NavLink
                            to={
                                'https://www.linkedin.com/posts/samael-machado-919a19274_nuevoproyecto-activity-7059445355796471808-4d9u?utm_source=share&utm_medium=member_desktop'
                            }
                            target='_blank'
                        >
                            <p>
                                -> Qué mejor para desarrollar buenas habilidades
                                que realizar un juego el cual todos nos sentimos
                                identificados en nuestra infancia.
                            </p>
                        </NavLink>
                    </div>
                </div>
                <div className='container-card'>
                    <NavLink
                        to={'https://moonlit-sawine-5d687d.netlify.app'}
                        target='_blank'
                    >
                        <div className='img-three'></div>
                    </NavLink>
                    <div className='description-one'>
                        <NavLink
                            to={'https://moonlit-sawine-5d687d.netlify.app'}
                            target='_blank'
                        >
                            <h3>Rompe ladrillos</h3>
                        </NavLink>
                        <NavLink
                            to={
                                'https://www.linkedin.com/posts/samael-machado-919a19274_un-peque%C3%B1o-ejercicio-de-la-mdn-donde-repasar-activity-7083749797337153536-ZEv8?utm_source=share&utm_medium=member_desktop'
                            }
                            target='_blank'
                        >
                            <p>
                                -> Como modo de repaso realicé éste clasico
                                juego, reforzando la lógica y conceptos.
                            </p>
                        </NavLink>
                    </div>
                </div>
                <div className='container-card'>
                    <NavLink
                        to={'https://dancing-beignet-23847c.netlify.app/'}
                        target='_blank'
                    >
                        <div className='img-four'></div>
                    </NavLink>
                    <div className='description-one'>
                        <NavLink
                            to={'https://dancing-beignet-23847c.netlify.app/'}
                            target='_blank'
                        >
                            <h3>Cruz y raya</h3>
                        </NavLink>
                        <NavLink
                            to={
                                'https://www.linkedin.com/posts/samael-machado-919a19274_programadorweb-desarrollodelfrontend-desarrolladorweb-activity-7078824290900484096-sioS?utm_source=share&utm_medium=member_desktop'
                            }
                            target='_blank'
                        >
                            <p>
                                -> ¿Por qué no divertirse mientras fijamos
                                conceptos en React?
                            </p>
                        </NavLink>
                    </div>
                </div>
                <div className='container-card'>
                    <NavLink
                        to={
                            'https://6499c8e6f981b704028e9a61--cozy-kringle-f088d0.netlify.app/'
                        }
                        target='_blank'
                    >
                        <div className='img-five'></div>
                    </NavLink>
                    <div className='description-one'>
                        <NavLink
                            to={
                                'https://6499c8e6f981b704028e9a61--cozy-kringle-f088d0.netlify.app/'
                            }
                            target='_blank'
                        >
                            <h3>Pokedex</h3>
                        </NavLink>
                        <NavLink
                            to={
                                'https://www.linkedin.com/posts/samael-machado-919a19274_programadores-desarrollodelfrontend-codigo-activity-7079756187285487616-yZ5Q?utm_source=share&utm_medium=member_desktop'
                            }
                            target='_blank'
                        >
                            <p>
                                -> Créo que éste proyecto es esencial cuando
                                queremos aprender a realizar llamadas a API´s,
                                me sirvió para repasar muchos conceptos.
                            </p>
                        </NavLink>
                    </div>
                </div>
                <div className='container-card'>
                    <NavLink
                        to={'https://deluxe-bienenstitch-cc27bb.netlify.app/'}
                        target='_blank'
                    >
                        <div className='img-six'></div>
                    </NavLink>
                    <div className='description-one'>
                        <NavLink
                            to={
                                'https://deluxe-bienenstitch-cc27bb.netlify.app/'
                            }
                            target='_blank'
                        >
                            <h3>Nave espacial</h3>
                        </NavLink>
                        <NavLink
                            to={
                                'https://www.linkedin.com/posts/samael-machado-919a19274_aprobechando-que-est%C3%A1is-con-el-ataque-de-activity-7087974853214883840-Co0h?utm_source=share&utm_medium=member_desktop'
                            }
                            target='_blank'
                        >
                            <p>
                                -> Bueno, simpremente recordaré este juego con
                                mucho cariño, lo realice mediante un reto que me
                                puso un profesor en Hack a Boss.
                            </p>
                        </NavLink>
                    </div>
                </div>
                <div className='container-card'>
                    <NavLink
                        to={'https://github.com/samdeveloper23/appDirectChat'}
                        target='_blank'
                    >
                        <div className='img-seven'></div>
                    </NavLink>
                    <div className='description-one'>
                        <NavLink
                            to={
                                'https://github.com/samdeveloper23/appDirectChat'
                            }
                            target='_blank'
                        >
                            <h3>Chat Direct</h3>
                        </NavLink>
                        <NavLink
                            to={
                                'https://www.linkedin.com/posts/samael-machado-919a19274_nodejs-programadorweb-developer-activity-7091333601274789888-6N2i?utm_source=share&utm_medium=member_desktop'
                            }
                            target='_blank'
                        >
                            <p>
                                Aprendí Sokect y lo realice en JQuery
                                demostrando que no tengo limites a la hora de
                                aprender.
                            </p>
                        </NavLink>
                    </div>
                </div>
                <div className='container-card'>
                    <NavLink
                        to={
                            'https://www.linkedin.com/posts/samael-machado-919a19274_tatooart-una-app-nacida-del-proyecto-final-activity-7097505572983336960-iKAx?utm_source=share&utm_medium=member_desktop'
                        }
                        target='_blank'
                    >
                        <div className='img-eight'></div>
                    </NavLink>
                    <div className='description-one'>
                        <NavLink
                            to={
                                'https://www.linkedin.com/posts/samael-machado-919a19274_tatooart-una-app-nacida-del-proyecto-final-activity-7097505572983336960-iKAx?utm_source=share&utm_medium=member_desktop'
                            }
                        >
                            <h3>TatooArt</h3>
                        </NavLink>
                        <NavLink
                            to={
                                'https://github.com/jorgenovorodriguez/RedSocialFrontEnd'
                            }
                            target='_blank'
                        >
                            <p>-> Repositorio GitHub Front</p>
                        </NavLink>
                        <NavLink
                            to={
                                'https://github.com/jorgenovorodriguez/RedSocialBackEnd'
                            }
                            target='_blank'
                        >
                            <p>-> Repositorio GitHub Back</p>
                        </NavLink>
                        <p>
                            Red social realizada como proyecto final en Hack a
                            Boss.
                        </p>
                    </div>
                </div>
                <div className='container-card'>
                    <NavLink
                        to={'https://github.com/samdeveloper23'}
                        target='_blank'
                    >
                        <div className='img-nine'></div>
                    </NavLink>
                    <div className='description-one'>
                        <NavLink
                            to={'https://github.com/samdeveloper23'}
                            target='_blank'
                        >
                            <h3>GitHub</h3>
                        </NavLink>
                        <NavLink
                            to={'https://github.com/samdeveloper23'}
                            target='_blank'
                        >
                            <p>-> Todos mis repositorios</p>
                        </NavLink>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Proyectos;
