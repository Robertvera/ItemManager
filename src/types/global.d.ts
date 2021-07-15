declare type ColorVariants = 'primary' | 'secondary';
declare type ButtonTypeVariants = 'not-floating' | 'floating';
declare type ShapeVariants = 'rectangle' | 'square' | 'round';
declare type Item = {
    title: string;
    description?: string;
    price?: string;
    email?: string;
    image: string;
    layout?: string;
    fav?: boolean;
}