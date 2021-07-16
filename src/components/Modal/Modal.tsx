import React, { ReactElement } from 'react';
import './styles.scss';
import Item from '../Item/Item';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';

type ModalProps = {
    modalVisibility: string;
    setModalVisibility: React.Dispatch<React.SetStateAction<string>>;
    favorites: Array<Item>;
    filteredFavs: Array<Item>;
    setFavorites: React.Dispatch<React.SetStateAction<Array<Item>>>;
    setFavSearchString: React.Dispatch<React.SetStateAction<string>>;
}

const Modal = ({ modalVisibility='hidden', setModalVisibility, favorites, setFavorites, setFavSearchString, filteredFavs }: ModalProps) => {
    const handleModal = (event: React.MouseEvent<ReactElement>) => {
        event.preventDefault();
    
        setModalVisibility('hidden');
    }

    const handleFav = (item: Item) => {
        setFavorites(favorites.filter((fav) => fav.title !== item.title));
    }

    return (
        <div className={`modal__container modal__container--${modalVisibility}`}>
            <div className='modal__header'>
                <h1>FAV LIST</h1>
                <Button onClick={handleModal} btnType='not-floating' color='secondary' shape='round' id='btn-close-modal'>X</Button>
            </div>
            <div className='filter__container'>
                <SearchBar setSearchString={setFavSearchString}/>
            </div>
            <div className='modal__item-list'>
                { filteredFavs && filteredFavs.map((fav) => {
                    const { title, image } = fav;
                    return (
                        <Item title={title} image={image} layout='pill' onClickFav={() => handleFav(fav)}/>
                    )
                })}
            </div>
        </div>
    );
} 

export default Modal;