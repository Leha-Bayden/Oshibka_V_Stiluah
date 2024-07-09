import { useState } from 'react';
import "./Button.css"
import "./../../pages/forms/Forms.css"

function Button() {

        const [showModal, setShowModal] = useState(false);

        const handleButtonClick = () => {
        setShowModal(true);
        };
    

    const handleHomeClick = () => {
        window.location.href = '/';
    }

    return (
        <div className={showModal ? 'vidno' : 'ne_vidno'}>
        <button type="submit" onClick={handleButtonClick}>Отправить</button>
        
        {showModal && (
            <div className="modal">
                <p>Ваша заявка отправлена</p>
                <button onClick={handleHomeClick}>Home</button>
            </div>
        )}
        </div>
    );
}
 
export default Button;



