import React, { useState } from 'react';
import './assets/styles/_base.scss';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout'
import useItems from './hooks/useItems';
import useFilterItems from './hooks/useFilterItems';
import useFilterFavs from './hooks/useFilterFavs';

const App: React.FC<{}> = () => {
  const { isLoading, error, items } = useItems();
  const [ searchString, setSearchString ] = useState('');
  const [ favSearchString, setFavSearchString ] = useState('');
  const [ sortBy, setSortBy ] = useState('Title');
  const [ orderBy, setOrderBy ] = useState('ascending');
  const [ modalVisibility, setModalVisibility ] = useState('hidden');
  const [ favorites, setFavorites ] = useState<Item[]>([]);
  const { filterResults } = useFilterItems(items?.items, searchString, sortBy, orderBy);
  const { filterFavsResults } = useFilterFavs(favorites, favSearchString);

  return (
    <Layout setModalVisibility={setModalVisibility}>
      <Home 
        items={filterResults}
        setSearchString={setSearchString}
        setFavSearchString={setFavSearchString}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
        setModalVisibility={setModalVisibility}
        modalVisibility={modalVisibility}
        favorites={favorites}
        setFavorites={setFavorites}
        filteredFavs={filterFavsResults}
      />
    </Layout>
  )
} 

export default App;
