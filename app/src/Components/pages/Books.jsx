import React from "react";
import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
  margin: auto;
  display: grid;
  width: 80%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap:20px
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
   
    const getData = async () => {
      try{
        let res = await fetch("http://localhost:8080/books");
        let resdata = await res.json();
  
        console.log("ddd:",resdata);
        setData(resdata);
      }catch(e){
        console.log(e);
      }
     
    };
    getData();
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          
          } */}
        {data.map((item) => {
          return <BookCard {...item} />;
        })}
      </Grid>
    </>
  );
};
export default Books;
