import React, { useState, useRef, useEffect, useCallback } from 'react';
import './assets/styles/_base.scss';
import Home from './components/Home/Home';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import Spinner from './components/Spinner/Spinner';
import Layout from './components/Layout/Layout'
import useItems from './hooks/useItems';
import useFilterItems from './hooks/useFilterItems';
import usePagination from './hooks/usePagination';
import AppContext from './storage';

const App: React.FC<{}> = () => {
  const { isLoading, error, items } = useItems();
  const [page, setPage] = useState(1);
  const { filterResults } = useFilterItems(items?.items, '', 'Title', 'ascending', setPage);
  const { paginatedResults } = usePagination(filterResults, page);
  const loader = useRef<HTMLDivElement>(null);

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
  }, [handleObserver, isLoading]);

  if (error) {
    return(
      <Layout>
        <ErrorScreen error={error}/ >
      </Layout>
    )
  }

  return (
    <AppContext>
      <Layout >
        {isLoading ?
        <Spinner/>
        :
        <Home
          items={paginatedResults}
          loader={loader}
        />
        }
      </Layout>
    </AppContext>
  )
} 

export default App;
