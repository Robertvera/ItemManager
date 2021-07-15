import React, { useState } from 'react';
import './assets/styles/_base.scss';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout'
import useItems from './hooks/useItems';
import useFilter from './hooks/useFilter';
import useFavorites from './hooks/useFavorites';

const App: React.FC<{}> = () => {
  const { isLoading, error, items } = useItems();
  const [ searchString, setSearchString ] = useState('');
  const [ sortBy, setSortBy ] = useState('Title');
  const [ orderBy, setOrderBy ] = useState('ascending');
  const [ modalVisibility, setModalVisibility ] = useState('hidden');
  const [ favorites, setFavorites ] = useState([]);
  const { filterResults } = useFilter(items?.items, searchString, sortBy, orderBy);

  return (
    <Layout setModalVisibility={setModalVisibility}>
      <Home 
        items={filterResults}
        setSearchString={setSearchString}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
        setModalVisibility={setModalVisibility}
        modalVisibility={modalVisibility}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </Layout>
  )
} 

export default App;
