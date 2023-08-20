import './contacto.css';
import playa from '../../../public/playafondo.mp4';
import { NavLink } from 'react-router-dom';
import GenericModal from '../../components/Modal/GenericModal';
import { useState } from 'react';

const Contacto = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalContent, setModalContent] = useState(null);

    const openModal = (title, content) => {
        setModalTitle(title);
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='contacto'>
                <div className='contacto-video'>
                    <video
                        src={playa}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className='contacto-video-element'
                    ></video>
                </div>
            </div>
            <div className='container-contacto'>
                <h2>Contactos:</h2>
            </div>
            <div className='responsi'>
                <h3 className='reco'>S@M</h3>
                <NavLink
                    to={'https://www.instagram.com/samdeveloper23/'}
                    target='_blank'
                >
                    <div className='insta'></div>
                </NavLink>
                <NavLink
                    to={'https://www.linkedin.com/in/samael-machado-919a19274/'}
                    target='_blank'
                >
                    <div className='linkedin'></div>
                </NavLink>
                <NavLink
                    to={'mailto:sam.developer.23@gmail.com'}
                    target='_blank'
                >
                    <div className='gmail'></div>
                </NavLink>
                <NavLink
                    to={'https://github.com/samdeveloper23'}
                    target='_blank'
                >
                    <div className='github'></div>
                </NavLink>
                <div
                    className='telegram'
                    onClick={() =>
                        openModal(
                            'Telegram',
                            <>
                                <NavLink
                                    to={'https://t.me/SamaelDeveloper'}
                                    target='_blank'
                                >
                                    Samael Machado
                                </NavLink>
                            </>
                        )
                    }
                ></div>
                <div
                    className='telefono'
                    onClick={() =>
                        openModal('Número de Teléfono', '654 256 127')
                    }
                ></div>
            </div>
            <GenericModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                title={modalTitle}
                content={modalContent}
            />
        </>
    );
};
//revision
export default Contacto;
