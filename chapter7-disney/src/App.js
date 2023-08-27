import './App.css';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import DatailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};
const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path=":movieId" element={<DatailPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
