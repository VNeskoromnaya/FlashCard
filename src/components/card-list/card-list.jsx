import {Table} from 'react-bootstrap';

// import CardListItem from "../card-list-item/card-list-item";
// import ListHeader from "./list-header";
// import AddNewWord from "./add-new-word";

import './card-list.scss';

const words = [
    {
        "word": "customs",
        "transcription": "[ ˈkʌstəmz ]",    
        "translation": "таможня",
        "category": "Airport"    
    },
    {
        "number": 2,
        "word": "boarding pass",
        "transcription": "[ ˈbɔːdɪŋ pɑːs ]",    
        "translation": "посадочный талон",
        "category": "Airport"    
    },
    {
        "word": "carry-on bag",
        "transcription": "[ ˈkæri ɒn bæɡ ]",    
        "translation": "ручная кладь",
        "category": "Airport"    
    },
    {
        "word": "flight attendant",
        "transcription": "[ flaɪt əˈtendənt ]",    
        "translation": "бортпроводник",
        "category": "Airport"    
    },
    {
        "word": "crossroads",
        "transcription": "[ ˈkrɒsrəʊdz ]",    
        "translation": "перекрёсток",
        "category": "City"    
    },
    {
        "word": "jewellery shop",
        "transcription": "[ ˈdʒuːəlri ʃɒp ]",    
        "translation": "ювелирный магазин",
        "category": "City"    
    },
    {
        "word": "church",
        "transcription": "[ tʃɜːtʃ ]",    
        "translation": "церковь",
        "category": "City"    
    },
    {
        "word": "to haggle (with)",
        "transcription": "[ tə ˈhæɡl̩ wɪð ]",    
        "translation": "торговаться (с кем-л.)",
        "category": "City"    
    },
    {
        "word": "sociable",
        "transcription": "[ˈsəʊʃəbl]",    
        "translation": "общительный",
        "category": "Character"    
    },
    {
        "word": "caring",
        "transcription": "[ ‘kɛə(r)ɪŋ ]",    
        "translation": "заботливый",
        "category": "Character"    
    },
    {
        "word": "curious",
        "transcription": "[ ‘kjuərɪəs ]",    
        "translation": "общительный",
        "category": "Character"    
    },
    {
        "word": "creative",
        "transcription": "[ krɪ’eɪtɪv ]",    
        "translation": "творческий",
        "category": "Character"    
    }
];

// const words = JSON.parse(fs.readFileSync('./data.json'));

function CardList(props) {
    return (
        <Table bordered hover className="table">
            <thead className="table-head">
                <tr>
                    <th>Слово</th>
                    <th>Транскрипция</th>
                    <th>Перевод</th>
                    <th>Тема</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {words.map((word, index) =>
                    <tr className="table-row" key={index}>
                        <td className="cell">
                            <input type="text" className="cell-input" defaultValue={word.word} disabled />
                        </td>
                        <td className="cell">
                            <input type="text" className="cell-input" defaultValue={word.transcription} disabled />
                        </td>
                        <td className="cell">
                            <input type="text" className="cell-input" defaultValue={word.translation} disabled />
                        </td>
                        <td className="cell">
                            {/* !!! тут хочу реализовать выпадающий список категория */}
                            <input type="text" className="cell-input" defaultValue={word.category} disabled />  
                        </td>
                        <td className="btn-block">
                            <button className="card-btn save" type="button">
                                <img src="/img/save.png" alt="edit" />
                            </button>
                            <button className="card-btn" type="button">
                                <img src="/img/edit.png" alt="edit" />
                            </button>
                            <button className="card-btn" type="button">
                                <img src="/img/delete.png" alt="delete" />
                            </button>
                        </td>
                    </tr>
                )
                }
            </tbody>
        </Table>
    )
}




// const CardList = () => {
//     return (
//         <div className="card-list">
//             <div className="card-list-wrapper">
//                 <ListHeader/>
//                 {/* <AddNewWord/> */}
//                 <CardListItem/>
//                 <CardListItem/>
//                 <CardListItem/>
//             </div>
//         </div>
//     )
// }

export default CardList;