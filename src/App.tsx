import React, { useEffect, useState } from 'react';
import './assets/styles/_base.scss';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout'
import useItems from './hooks/useItems';
import { FILTER_CRITERIA } from './constants';

const App: React.FC<{}> = () => {
  const { isLoading, error, items } = useItems();
  const [ searchString, setSearchString ] = useState('');
  const [searchResults, setSearchResults] = useState(items);
  const [ sortBy, setSortBy ] = useState('')

  useEffect(() => {
    const results = items?.items.filter((item: ItemProps) => {
      const itemCriteriaDetails:Array<string> = [];

      FILTER_CRITERIA.forEach((criteria) => {
        itemCriteriaDetails.push(item[criteria].toLowerCase());
      });

      return itemCriteriaDetails.join('').includes(searchString.toLowerCase());
    })
    setSearchResults(results);
  }, [searchString])

  const processedItems = searchString.length > 0 ? searchResults : items?.items;

  return (
    <Layout>
      <Home 
        items={processedItems}
        setSearchString={setSearchString}
        setSortBy={setSortBy}
      />
    </Layout>
  )
} 

export default App;
