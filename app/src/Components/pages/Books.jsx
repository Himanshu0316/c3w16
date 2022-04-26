import React from "react";
import { useEffect, useState } from "react";
//import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 //add required style here
`;

const Books = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data[]
        fetch('http://localhost:8080/books',{
          method: 'GET',
          headers: {"content-type":"application/json"}
        }).then(res=>res.json()).then(data=>setData(data))
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
            {data.map((elem)=>{
              <BookCard item={elem} /> 
              } )}
      </Grid>
    </>
  );
};
export default Books;
