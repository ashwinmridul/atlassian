import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'App.css';
import Home from 'components/Home';
import Dynamic from 'components/Dynamic';
import NotFound from 'components/NotFound';
import Todos from 'components/Todos';
import Counter from 'components/Counter';
import Calculator from 'components/Calculator';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/:id" element={<Dynamic numeric />} />
        <Route path="search">
          <Route path=":id" element={<Dynamic />} />
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default React.memo(App);
