import React, { ReactElement } from 'react';
import './styles.scss';
import Item from '../Item/Item';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import NoResults from '../NoResults/NoResults';

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
            <main id='modal__wrapper'>
                <div className='modal__header'>
                    <h1>FAVORITES</h1>
                    <Button onClick={handleModal} btnType='not-floating' color='secondary' shape='round' id='btn-close-modal'>X</Button>
                </div>
                <div className='filter__container'>
                    <SearchBar setSearchString={setFavSearchString}/>
                </div>
                <div className='modal__item-list item-container'>
                    {
                        filteredFavs && filteredFavs.length === 0 ?
                        <NoResults message='Nothing here... 😢 , go and show some love! 😍' />
                        :
                        filteredFavs.map((fav) => {
                            const { title, image } = fav;
                            return (
                                <Item key={title} title={title} image={image} layout='pill' onClickFav={() => handleFav(fav)}/>
                            )
                        })
                    }
                </div>
            </main>
        </div>
    );
} 

export default Modal;