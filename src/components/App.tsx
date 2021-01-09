import * as React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../store';

const App = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
  const { state } = useContext(StoreContext);
  return (
    <>
      <header className='header'>
        <div>
          <h1>Money Heist</h1>
          <p>Pick your favourite episode</p>
        </div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/faves'>favourite(s): {state.favourites.length}</Link>
        </div>
      </header>
      {children}
    </>
  );
};

export default App;
