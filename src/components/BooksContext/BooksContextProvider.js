import { useEffect, useState } from "react";
import { booksContext } from "./BooksContext";

const BooksContextProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [myshelf, setMyShelf] = useState([])
    
    console.log(myshelf)
    useEffect(() => {
        let timeoutId;

        async function fetchData() {
            const response = await fetch(`https://openlibrary.org/search.json?q=${searchTerm}&limit=10&page=1`);
            const result = await response.json();
            setData(result.docs);
        }

        const debouncedFetchData = () => {
            clearTimeout(timeoutId);
            console.log("I am running after", 600);
            timeoutId = setTimeout(fetchData, 600);
        };

        debouncedFetchData();

        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchTerm]);

    return (
        <booksContext.Provider value={{ searchTerm, setSearchTerm, data,myshelf, setMyShelf }}>
            {children}
        </booksContext.Provider>
    )
}

export default BooksContextProvider;
