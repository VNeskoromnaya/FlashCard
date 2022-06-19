import { useState } from 'react';

import './card.scss';

const TranslationBtn = () => (
    <button className="btn-translation">Translation</button>
)

const TranslationWord  = () => (
    <h2 className="translation">багаж</h2> 
)


const Card = () => {

    const [pressed, setPressed] = useState(false);

    const onPressed = () => {
        setPressed(!pressed)
    }

    return (
        <div className="card">
            <h1 className="word">luggage</h1>
            <h2 className="transcription">[ ˈlʌɡɪdʒ ]</h2>
            <div className="translation-wrapper" onClick={onPressed}>
            {!pressed ? <TranslationBtn /> : <TranslationWord />}
            </div>
            <h3 className="topic">Тема: Airport</h3>
            <div className="icons-wrapper">
                <button className="card-btn save" type="button">
                            <img src="/img/save.png" alt="edit" />
                </button>
                <button className="card-btn" type="button">
                    <img src="/img/edit.png" alt="edit" />
                </button>
                <button className="card-btn" type="button">
                    <img src="/img/delete.png" alt="delete" />
                </button>
            </div>
        </div>
    )
}

export default Card;