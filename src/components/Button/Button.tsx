import React, { ReactChild, useContext } from 'react';
import { Context } from '../../storage';
import './styles.scss';

type ButtonsProps = {
    children: ReactChild;
    action?: ActionButtonVariants;
    color?: ColorVariants;
    btnType?: ButtonTypeVariants;
    shape?: ShapeVariants;
    id: string;
}

const btnModifiers = (modifiers: Array<string>) => {
    const classNames: Array<string> = [];

    modifiers.forEach((modifier: string) => {
        classNames.push(`btn--${modifier}`);
    });

    return classNames.join(' ');
}

const Button = ({children, action, color = 'primary', btnType = 'not-floating', shape = 'rectangle', id = ''} : ButtonsProps) => {
    const modifiers = [color, btnType, shape]
    const className = `btn ${btnModifiers(modifiers)}`;

    const { buttonAction } = useContext(Context);

    return (
        <button aria-label='button' type='button' onClick={(e) => { buttonAction(e, action) } } className={className} id={id}>
            <span>{children}</span>
        </button>
    );
}

export default Button;