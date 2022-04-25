import React from "react";
import { useEffect, useState } from "react";
//import axios from "axios";
import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 add required style here
 
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async()=>{
      try{
       let res = await fetch("http://localhost:8080/books")
       let d = await res.json();
       setData(d)
        console.log(d)
      }catch(e){
         console.log(e)
      }
    }
    getData()
    // make a GET request to http://localhost:8080/books to get all the books data
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {data.map((item)=>{
            <BookCard item = {item}/>
          })}
      </Grid>
    </>
  );
};
export default Books;
