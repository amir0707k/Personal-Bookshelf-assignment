import React, { useContext, useState } from 'react'
import './style.css';
import { booksContext } from '../BooksContext/BooksContext';

function CardsContainer({setIsShowing}) {

  const [addedToShelf, setAddedToShelf] = useState({});
  const { setSearchTerm, searchTerm, data, setMyShelf,myshelf } = useContext(booksContext);

  const addToShelf = (index, card) => {
    setAddedToShelf(prevState => ({ ...prevState, [index]: true }));
    setMyShelf(prevBookshelf => [...prevBookshelf, card]);
  }

  const handleMyShelf = () => {
    if(myshelf.length>0){
      setIsShowing(true)
    }
  }

  return (
    <div className='main-container'>

      <div className='heading'>
        <div className='search-input'>
          <h2>Search by book name:</h2>
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

        </div>

        <button className=' my-shelf' onClick={handleMyShelf}>My Bookshelf</button>
      </div>

      <div className='cards-container'>
        {

          data.map((doc, index) => {
            return <div className="card" key={crypto.randomUUID()}>

              <div className='title'>
                <h5>Book Title:</h5>
                <p>{doc.title}</p>
              </div>
              <div className="edition-count">
                <h5>Edition Count:</h5>
                <p>{doc.edition_count}</p>
              </div>
              {
                !addedToShelf[index] ? <button className='add-to-shelf' onClick={() => addToShelf(index, doc)}>Add to Bookshelf</button> : ""
              }
            </div>

          })
        }
      </div>

    </div>
  )
}


export default CardsContainer