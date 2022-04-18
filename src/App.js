import React from 'react'
import { useRoutes } from 'react-router-dom';
import MainContextProvider from './components/Context/MainContextProvider';
import Header from './components/Header/Header/Header';
import MenuBar from './components/MenuBar/MenuBar';
import router from './routes';

function App() {
  let routes = useRoutes(router)

  return (
    <>
    <MainContextProvider>
      <Header />
      <div className='container_App'>
        <MenuBar />
        {routes}  
      </div>
    </MainContextProvider>
    </>
  );
}

export default App;
