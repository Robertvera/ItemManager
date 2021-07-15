import React, { ReactElement } from 'react';
import './styles.scss';
import Item from '../Item/Item';
import Button from '../Button/Button';

type ModalProps = {
    modalVisibility: string;
    setModalVisibility: React.Dispatch<React.SetStateAction<string>>;
}

const Modal = ({ modalVisibility='hidden', setModalVisibility }: ModalProps) => {
    const handleModal = (event: React.MouseEvent<ReactElement>) => {
        event.preventDefault();
    
        setModalVisibility('hidden');
    }

    return (
        <div className={`modal__container modal__container--${modalVisibility}`}>
            <div className='modal__header'>
                <h1>FAV LIST</h1>
                <Button onClick={handleModal} btnType='not-floating' color='secondary' shape='round' id='btn-close-modal'>X</Button>
            </div>
            <div className='modal__item-list'>
                <Item title='Macbook 13 pulgadas' image='https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png' layout='pill'/>
                <Item title='dd' image='https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png' layout='pill'/>
                <Item title='dd' image='https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png' layout='pill'/>
                <Item title='dd' image='https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png' layout='pill'/>
                <Item title='dd' image='https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png' layout='pill'/>
                <Item title='dd' image='https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png' layout='pill'/>
                <Item title='dd' image='https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/img/barbecue.png' layout='pill'/>
            </div>
        </div>
    );
} 

export default Modal;