import './header.css';
import introVideo from '../../../public/intro.mp4';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {
    const [startTime, setStartTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = Date.now();
            const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Tiempo transcurrido en segundos
            document.getElementById(
                'reloj'
            ).textContent = `Tiempo transcurrido: ${formatTiempo(elapsedTime)}`;
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [startTime]);

    const formatTiempo = (seconds) => {
        const dias = Math.floor(seconds / 86400);
        const horas = Math.floor((seconds % 86400) / 3600);
        const minutos = Math.floor((seconds % 3600) / 60);
        const segundos = seconds % 60;

        return `${dias} días, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
    };
    return (
        <div className='header'>
            <div className='header-video'>
                <video
                    src={introVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className='header-video-element'
                ></video>
            </div>
            <div className='header-retro'>
                <h1 className='header-title'>Samael@Machado:~$</h1>
            </div>
            <nav className='header-nav'>
                <ul className='nav-align'>
                    <NavLink to={'/'}>
                        <li className='hover-list'>Sobre mí</li>
                    </NavLink>
                    <NavLink to={'/proyectos'}>
                        <li className='hover-list'>Proyectos</li>
                    </NavLink>
                    <NavLink to={'/objetivos'}>
                        <li className='hover-list'>Objetivos</li>
                    </NavLink>
                    <NavLink to={'/titulos'}>
                        <li className='hover-list'>Títulos</li>
                    </NavLink>
                    <NavLink to={'/aficiones'}>
                        <li className='hover-list'>Aficiones</li>
                    </NavLink>
                    <NavLink to={'/contacto'}>
                        <li className='hover-list'>Contacto</li>
                    </NavLink>
                </ul>
            </nav>

            <div id='reloj' className='reloj'>
                Tiempo transcurrido: 0 minutos, 0 segundos
            </div>
        </div>
    );
};

export default Header;
