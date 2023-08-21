import { NavLink } from 'react-router-dom';
import './sobremi.css';

const Sobremi = () => {
    return (
        <main className='main'>
            <div className='sbm-title'>
                <p>Sobre mí</p>
            </div>
            <h2>Bienvenidos a mi mundo digital</h2>
            <p>
                ¡Hola a todos! Me complace darles la bienvenida a este espacio
                en línea donde compartiré un poco de mi historia y pasión. Esta
                web ha sido cuidadosamente diseñada para llevarlos a través de
                un viaje en el que no solo descubrí mi amor por la programación,
                sino también me conecté con mi verdadero yo y cultivé el amor
                propio que tanto anhelaba. Les invito a adentrarse en mi relato.
            </p>
            <h3>Los orígenes inesperados</h3>
            <p>
                Todo comenzó durante mis días como vigilante de seguridad,
                cuando las largas noches de guardia en una pequeña garita me
                brindaron tiempo para la introspección. Fue en este punto donde
                comencé a conocerme más a mí mismo y a reconocer mis auténticas
                pasiones: la música, diversas aficiones y, por supuesto, mi
                trabajo.
            </p>
            <h3>El redescubrimiento de la pasión</h3>
            <p>
                A medida que exploraba mi ser, redescubrí un antiguo interés en
                la programación. Aunque en aquel entonces solo sabía crear una
                simple página en HTML, esa chispa de curiosidad se convirtió en
                un camino de aprendizaje. Con el tiempo, la dedicación y el amor
                propio como pilares fundamentales, me aventuré en el emocionante
                mundo de los lenguajes de programación.
            </p>
            <h3>De la dedicación al encanto</h3>
            <p>
                Cada línea de código que escribía era un paso hacia la
                comprensión y la maestría. El tiempo invertido y la dedicación
                constante me permitieron avanzar y construir proyectos que, una
                vez parecían inalcanzables, ahora eran una realidad. No solo se
                trataba de aprender un lenguaje de programación, sino de
                descubrir una forma de expresión y creatividad que me cautivaba
                por completo.
            </p>
            <h3>Presentando mis creaciones</h3>
            <p>
                Es con gran orgullo que les presento algunos de mis proyectos. Y
                esta web, la que están explorando en este momento, es un ejemplo
                tangible de mi pasión y esfuerzo. Aquí encontrarán una muestra
                de mi trabajo, ideas plasmadas en líneas de código y diseño,
                capturando momentos de mi trayectoria en esta emocionante
                travesía.
            </p>
            <h3>Un futuro en constante evolución</h3>
            <p>
                Mi viaje en el mundo de la programación no ha hecho más que
                empezar. Cada día, continúo explorando, aprendiendo y creciendo
                en este fascinante campo. Agradezco sinceramente su interés y
                les animo a acompañarme mientras sigo descubriendo nuevas
                fronteras y desafiando mis propios límites. Gracias por ser
                parte de este viaje conmigo. ¡Espero que disfruten explorando mi
                mundo digital tanto como yo disfruté creándolo!
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
