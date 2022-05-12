import './card-list-item.scss';

const CardListItem = () => {
    return (
        <div className="card-item-wrapper">
            
            <span>Слово на англ</span>
            <span>[Транскрипция]</span>
            <span>Перевод слова</span>
            <span>Тема.</span>
            <span className="bnt-box">
                <button className="card-btn" type="button">
                    <img src="/img/edit.png" alt="edit" />
                </button>
                <button className="card-btn" type="button">
                    <img src="/img/delete.png" alt="delete" />
                </button>
            </span>



            {/* <h1 className="word">Слово на англ</h1>
            <h2 className="transcription">[Транскрипция]</h2>
            <h2 className="translation">Перевод на англ</h2>
            <h3 className="topic">Тема: </h3> */}
            
        </div>
    )
}

export default CardListItem;