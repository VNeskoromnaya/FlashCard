import CardListItem from "../card-list-item/card-list-item";
import ListHeader from "./list-header";
import AddNewWord from "./add-new-word";

import './card-list.scss';


const CardList = () => {
    return (
        <div className="card-list">
            <div className="card-list-wrapper">
                <ListHeader/>
                <AddNewWord/>
                <CardListItem/>
                <CardListItem/>
                <CardListItem/>
            </div>
        </div>
    )
}

export default CardList;