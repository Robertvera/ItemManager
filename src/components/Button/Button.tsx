import React, { ReactChild } from 'react';
import './styles.scss';

type ButtonsProps = {
    children: ReactChild;
    onClick?: (ev: React.MouseEvent) => void;
    color?: ColorVariants;
    position?: PositionVariants;
    shape?: ShapeVariants;
}

const btnModifiers = (modifiers: Array<string>) => {
    const classNames: Array<string> = [];

    modifiers.forEach((modifier: string) => {
        classNames.push(`btn--${modifier}`);
    });

    return classNames.join(' ');
}

const Button = ({children, onClick = () => {}, color = 'primary', position = 'relative', shape = 'rectangle'} : ButtonsProps) => {
    const modifiers = [color, position, shape]
    const className = `btn ${btnModifiers(modifiers)}`;

    return (
        <button type='button' onClick={onClick} className={className}>
            <span>{children}</span>
        </button>
    );
}

export default Button;