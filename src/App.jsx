import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import Sobremi from './pages/Sobremi/Sobremi';
import Proyectos from './pages/Proyectos/Proyectos';
import Objetivos from './pages/Objetivos/Objetivos';
import Titulos from './pages/Titulos/Titulos';
import Aficiones from './pages/Aficiones/Aficiones';
import Contacto from './pages/Contacto/Contacto';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/sobremi' element={<Sobremi />} />
                <Route path='/proyectos' element={<Proyectos />} />
                <Route path='/objetivos' element={<Objetivos />} />
                <Route path='/titulos' element={<Titulos />} />
                <Route path='/aficiones' element={<Aficiones />} />
                <Route path='/contacto' element={<Contacto />} />
            </Routes>
        </>
    );
}

export default App;
