import './add-new-word.scss';

const AddNewWord = () => {
    return (
        <div className="add-word-wrapper">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            {/* тема через выпадающий список */}
            <div>
            <button className="card-btn" type="button">
                        <img src="/img/add-word.png" alt="add-word" />
                </button>
                <button className="card-btn" type="button">
                        <img src="/img/edit.png" alt="edit" />
                </button>
                <button className="card-btn" type="button">
                        <img src="/img/delete.png" alt="delete" />
                </button>
            </div>
            



            {/* <h1 className="word">Слово на англ</h1>
            <h2 className="transcription">[Транскрипция]</h2>
            <h2 className="translation">Перевод на англ</h2>
            <h3 className="topic">Тема: </h3> */}
            
        </div>
    )
}

export default AddNewWord;

