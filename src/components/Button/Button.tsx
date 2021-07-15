import React, { ReactChild, ReactElement } from 'react';
import './styles.scss';

type ButtonsProps = {
    children: ReactChild;
    onClick?: (ev: React.MouseEvent<ReactElement>) => void;
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

const Button = ({children, onClick = () => {}, color = 'primary', btnType = 'not-floating', shape = 'rectangle', id = ''} : ButtonsProps) => {
    const modifiers = [color, btnType, shape]
    const className = `btn ${btnModifiers(modifiers)}`;

    return (
        <button type='button' onClick={onClick} className={className} id={id}>
            <span>{children}</span>
        </button>
    );
}

export default Button;