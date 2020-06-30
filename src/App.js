import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchInput from './components/Searchinput';
import TodoList from './components/TodoList';






function App() {
  return (
    <div className="App">
     <Header />
      <SearchInput />
      <TodoList />
     
    </div>
  );
}

export default App;