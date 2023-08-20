import './header.css';
import introVideo from '../../../public/intro.mp4';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                    <NavLink to={'/sobremi'}>
                        <li className='hover-list'>sobre mí</li>
                    </NavLink>
                    <NavLink to={'/proyectos'}>
                        <li className='hover-list'>proyectos</li>
                    </NavLink>
                    <NavLink to={'/objetivos'}>
                        <li className='hover-list'>objetivos</li>
                    </NavLink>
                    <NavLink to={'/titulos'}>
                        <li className='hover-list'>títulos</li>
                    </NavLink>
                    <NavLink to={'/aficiones'}>
                        <li className='hover-list'>aficiones</li>
                    </NavLink>
                    <NavLink to={'/contacto'}>
                        <li className='hover-list'>contacto</li>
                    </NavLink>
                </ul>
            </nav>
            <div className='reloj'>reloj desde que se despregó la WebApp</div>
        </div>
    );
};

export default Header;
