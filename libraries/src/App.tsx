import React from 'react';
import './App.css';
import Zustandlibrary from 'src/zustand/Zustandlibrary';
import { Route, Routes } from 'react-router';
import ReactRouterLibrary, { ReactRouterPage1, ReactRouterPage2 } from './react-router/ReactRouterLibrary';

function App() {
  return (
    <Routes>
      <Route index element={<ReactRouterLibrary />} />
      <Route path='/page1' element={<ReactRouterPage1 />} />
      <Route path='/page2' element={<ReactRouterPage2 />} />
      <Route path='/zustand' element={<Zustandlibrary />} />
    </Routes>
  );
}

export default App;
