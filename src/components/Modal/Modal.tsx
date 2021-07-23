import React, {  useContext } from 'react';
import './styles.scss';
import Item from '../Item/Item';
import Button from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import NoResults from '../NoResults/NoResults';
import { Context } from '../../storage/app';

const Modal = () => {

    const { 
        modalVisibility,
        filterFavsResults,
        updateFavorites 
    } = useContext(Context);

    return (
        <div data-testid='modal-container' className={`modal__container modal__container--${modalVisibility}`}>
            <main id='modal__wrapper'>
                <div className='modal__header'>
                    <h1>FAVORITES</h1>
                    <Button action='hide-modal' btnType='not-floating' color='secondary' shape='round' id='btn-close-modal'>X</Button>
                </div>
                <div className='filter__container'>
                    <SearchBar type='fav'/>
                </div>
                <div className='modal__item-list item-container'>
                    {
                        filterFavsResults && filterFavsResults.length === 0 ?
                        <NoResults message='Nothing here... 😢 , go and show some love! 😍' />
                        :
                        filterFavsResults.map((fav) => {
                            const { title, image } = fav;
                            return (
                                <Item key={title} title={title} image={image} layout='pill' onClickFav={() => updateFavorites(fav)}/>
                            )
                        })
                    }
                </div>
            </main>
        </div>
    );
} 

export default Modal;