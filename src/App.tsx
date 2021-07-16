import React, { useState, useRef, useEffect, useCallback } from 'react';
import './assets/styles/_base.scss';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout'
import useItems from './hooks/useItems';
import useFilterItems from './hooks/useFilterItems';
import useFilterFavs from './hooks/useFilterFavs';

const App: React.FC<{}> = () => {
  const { isLoading, error, items } = useItems();
  const [page, setPage] = useState(1);
  const [ searchString, setSearchString ] = useState('');
  const [ favSearchString, setFavSearchString ] = useState('');
  const [ sortBy, setSortBy ] = useState('Title');
  const [ orderBy, setOrderBy ] = useState('ascending');
  const [ modalVisibility, setModalVisibility ] = useState('hidden');
  const [ favorites, setFavorites ] = useState<Item[]>([]);
  const { filterResults } = useFilterItems(items?.items, searchString, sortBy, orderBy, page);
  const { filterFavsResults } = useFilterFavs(favorites, favSearchString);
  const loader = useRef<() => void>(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

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
        loader={loader}
      />
    </Layout>
  )
} 

export default App;
