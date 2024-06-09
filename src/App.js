import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BooksContextProvider from './components/BooksContext/BooksContextProvider';
import CardsContainer from './components/CardsContainer';
import MyShelf from './components/My Shelf';

function App() {
  const [isShowing, setIsShowing] = useState(false)
  

  return (
    <BooksContextProvider>

    
    <div className="App">
      {
        isShowing ? <MyShelf setIsShowing={setIsShowing}/> : <CardsContainer setIsShowing={setIsShowing}/>
      }
      
      
    </div>
    </BooksContextProvider>
  );
}

export default App;
