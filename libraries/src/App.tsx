import React from 'react';
import './App.css';
import Zustandlibrary from 'src/zustand/Zustandlibrary';
import { Route, Routes } from 'react-router';
import ReactRouterLibrary, { ReactRouterPage1, ReactRouterPage2 } from './react-router/ReactRouterLibrary';
import Layout from './react-router/Layout';
import AxiosLibrary from './axios/AxiosLibrary';

function App() {
  return (
    <Routes>
      {/* <Route index element={<ReactRouterLibrary />} />
      <Route path='/page1' element={<ReactRouterPage1 />} />
      <Route path='/page2' element={<ReactRouterPage2 />} />
      <Route path='/zustand' element={<Zustandlibrary />} /> */}

      <Route path='/router' element={<Layout />}>
      <Route index element={<ReactRouterLibrary />} />
      <Route path='page1/:value' element={<ReactRouterPage1 />} />
      <Route path='page2' element={<ReactRouterPage2 />} />
      </Route>
      <Route path='/zustand' element={<Zustandlibrary />} />
      <Route path='/axios' element={<AxiosLibrary />} />
      <Route path='*' element={<h3>404 NOT FOUND</h3>} />
    </Routes>
  );
}

export default App;
