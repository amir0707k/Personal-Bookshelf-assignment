import React, { useContext } from 'react'
import { booksContext } from '../BooksContext/BooksContext'
import back from '../../assets/left-arrow.svg'
import './style.css'

function MyShelf({setIsShowing}) {
    const {myshelf, } = useContext(booksContext);
    
  return (
    <div className='main-container'>
      <img src={back} alt="back" className='back' onClick={() => setIsShowing(false)}/>
     
      <div className='cards-container'>
        {
            myshelf.length>0 &&
            myshelf.map((doc) => {
            return <div className="card" key={crypto.randomUUID()}>

              <div className='title'>
                <h5>Book Title:</h5>
                <p>{doc.title}</p>
              </div>
              <div className="edition-count">
                <h5>Edition Count:</h5>
                <p>{doc.edition_count}</p>
              </div>
              
            </div>

          })
        }
      </div>

    </div>
  )
}

export default MyShelf