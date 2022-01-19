import React from "react";
import './App.css';
import Home from './features/home/Home';
import Header from "./features/header/Header";
import Subreddits from "./features/subreddits/subreddits";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>

      <aside>
        <Subreddits />
      </aside>
    </>
  );
};

export default App;