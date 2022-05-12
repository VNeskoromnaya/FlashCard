import './card.scss';



const Card = () => {
    return (
        <div className="card">
            <h1 className="word">luggage</h1>
            <h2 className="transcription">[ ˈlʌɡɪdʒ ]</h2>
            <h2 className="translation">багаж</h2>
            <h3 className="topic">Тема: Airport</h3>
            <div className="icons-wrapper">
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