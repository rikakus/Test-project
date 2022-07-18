import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "../layouts/Sidebar";
import About from '../pages/About';
import Contact from '../pages/Contact';
import Detail from '../pages/Detail';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export default class router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Sidebar>
                  <Home />
                </Sidebar>
              }
            />
          </Route>
          <Route path="/detail/:id">
            <Route
              index
              element={
                <Sidebar>
                  <Detail />
                </Sidebar>
              }
            />
          </Route>
          <Route path="/about">
            <Route
              index
              element={
                <Sidebar>
                  <About />
                </Sidebar>
              }
            />
          </Route>
          <Route path="/contact">
            <Route
              index
              element={
                <Sidebar>
                  <Contact />
                </Sidebar>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

