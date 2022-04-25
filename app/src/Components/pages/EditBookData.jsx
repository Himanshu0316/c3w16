//import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
width:800px,
hight:500px,
`;
// add style for text area
export const Textarea = styled.textarea`
width:400px,
hight:300px,
`;

export const EditBookData = () => {
  const [newData,setNewData] = useState(false)
  const handleUpdate = (e) => {
   
    try{
      e.preventDefault();
    let res = await fetch(`http://localhost:8080/books/${id}`,{
      method:"PATCH",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        thumbnailUrl:value,
        disc:value
      }),
    });
    // let data = await res.json()
    // setNewData(true)
  }catch(e){
    console.log(e)
  }
  }
    // if(newData){
    //   <Books/>
    // }
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page
 

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          // value = {value}
        />
        <Textarea
          data-testid="update-form-description"
          placeholder="Update long Description"
          // value = {value}
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  )
}
