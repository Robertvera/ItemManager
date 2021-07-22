// import React from 'react';
// import './assets/styles/_base.scss';
// import Home from './components/Home/Home';
// import ErrorScreen from './components/ErrorScreen/ErrorScreen';
// import Spinner from './components/Spinner/Spinner';
// import Layout from './components/Layout/Layout'
// import useItems from './hooks/useItems';
// import AppContext from './storage/app';

// const App: React.FC<{}> = () => {
//   const { isLoading, error } = useItems();

//   if (error) {
//     return(
//       <Layout>
//         <ErrorScreen error={error}/ >
//       </Layout>
//     )
//   }

//   return (
//     <AppContext>
//       <Layout >
//         {isLoading ?
//         <Spinner/>
//         :
//         <Home />
//         }
//       </Layout>
//     </AppContext>
//   )
// } 

// export default App;

import React from 'react';
import './assets/styles/_base.scss';
import Home from './components/Home/Home';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import Layout from './components/Layout/Layout'
import useItems from './hooks/useItems';
import AppContext from './storage/app';

const App: React.FC<{}> = () => {
  const { isLoading, error } = useItems();

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
        <Home />
      </Layout>
    </AppContext>
  )
} 

export default App;
