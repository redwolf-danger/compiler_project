
// import React from "react";
// import { useForm } from 'react-hook-form';
import { useForm} from "react-hook-form";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import Language_Select from "./Language_Select";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import {React,useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

const Code_space = ({ submit_to_API }) => {
  
  const { register, handleSubmit } = useForm();
  

  const onsubmit = (data)=>{
    console.log(data);
    console.log("calling submit_to API");
    // submit_to_API(data.code_area);
  };

  let props_for_select = {...register("language")};

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <Language_Select props_for_select={props_for_select}/>
        {/* <textarea {...register("code_area")} cols="30" rows="10"></textarea> */}
        <Box component={"div"}>
          
        <TextField
        sx={{minWidth:"80vw"}}
        hiddenLabel
        {...register("code_area")}
        defaultValue="Small"
        variant="filled"
        multiline 
        minRows={20}
        maxRows={30}
        />
        </Box>

       
        {/*todo opens */}
        {/* <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" /> */}
        
        {/* //!! */}

        {/*todo closes  */}
        <Button
          size="small"
          color="secondary"
          variant="contained"
          onClick={() => {
            console.log("submit btn clicked");
            handleSubmit(onsubmit)();
          }}
        >
          submit
        </Button>
      </form>
    </div>
  );
};

export default Code_space;
