import React, { useState } from 'react';
import './assets/styles/_base.scss';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout'
import useItems from './hooks/useItems';
import useFilter from './hooks/useFilter';

const App: React.FC<{}> = () => {
  const { isLoading, error, items } = useItems();
  const [ searchString, setSearchString ] = useState('');
  const [ sortBy, setSortBy ] = useState('Title');
  const [ orderBy, setOrderBy ] = useState('ascending');
  const { filterResults } = useFilter(items?.items, searchString, sortBy, orderBy);

  return (
    <Layout>
      <Home 
        items={filterResults}
        setSearchString={setSearchString}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setOrderBy={setOrderBy}
      />
    </Layout>
  )
} 

export default App;
