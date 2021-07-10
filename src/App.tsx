import React from 'react';
import './assets/styles/_base.scss';
import Layout from './components/Layout/Layout'
import useItems from './hooks/useItems';
import ItemList from './components/ItemList/ItemList';


const App: React.FC<{}> = () => {
  const { isLoading, error, items } = useItems();
  return (
    <Layout>
      <ItemList itemsArray={items?.items}/>
    </Layout>
  ) 

} 

export default App;