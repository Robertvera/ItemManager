const isFav = (title: string, favorites: Array<Item>) => {
    const favTitles = favorites.map((fav) => fav.title);

    return favTitles.includes(title)
}

export default isFav;