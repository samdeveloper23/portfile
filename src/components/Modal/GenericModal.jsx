import Modal from 'react-modal';
import './genericModal.css';

const GenericModal = ({ isOpen, onRequestClose, title, content }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel='Modal'
            className='modal'
            overlayClassName='overlay'
        >
            <div className='container-modal'>
                <div className='modal-header'>
                    <h3>{title}</h3>
                </div>
                <div className='modal-content'>
                    <p>{content}</p>
                </div>
                <button className='modal-close' onClick={onRequestClose}>
                    Cerrar
                </button>
            </div>
        </Modal>
    );
};

export default GenericModal;
