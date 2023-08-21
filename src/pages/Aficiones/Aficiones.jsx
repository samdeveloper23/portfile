import './aficiones.css';

const Aficiones = () => {
    return (
        <div className='container-aficiones'>
            <h2>Mis aficiones son diversas:</h2>
            <ul>
                <h3 className='title-afi'>Deportes:</h3>
                <div className='correccion'>
                    <li>Espeología</li>
                    <li>Canyoning</li>
                    <li>Fitness</li>
                    <li>Drone racing pilot</li>
                </div>
            </ul>
            <ul>
                <h3 className='title-afi'>Culturales:</h3>
                <div className='correccion'>
                    <li>Lectura</li>
                    <li>Impresión artística</li>
                    <li>Piano</li>
                    <li>Guitarra acústica</li>
                </div>
            </ul>
            <ul>
                <h3 className='title-afi'>Tecnológicas:</h3>
                <div className='correccion'>
                    <li>Rescate de PCs obsoletos</li>
                    <li>Estudio de nuevas tendencias</li>
                    <li>Montaje y calibración de drones</li>
                </div>
            </ul>
            <ul>
                <h3 className='title-afi'>Voluntariados:</h3>
                <div className='correccion'>
                    <li>Refúgio de animales Sierra Nevada</li>
                    <li>
                        Residencia de personas mayores Hermanitas de los Pobres
                    </li>
                    <li>Protección Civil Las Gabias</li>
                </div>
            </ul>
        </div>
    );
};

export default Aficiones;
