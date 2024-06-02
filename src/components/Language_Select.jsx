import React from 'react'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { useState } from 'react';

const Language_Select = ({props_for_select}) => {
    let [code_language, set_code_language] = useState("Python3");
    console.log(code_language);

    function handle_lang_change(event){
        console.log("prev language is ", code_language)
        console.log("setting language as ", event.target.value)
        set_code_language(()=>event.target.value)
      }
    
  return (
    <Box sx={{ maxWidth: 90, minHeight: 20 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Language</InputLabel>

      <Select 
      {...props_for_select}
        defaultValue="Python3"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={code_language}
        label="Language"
        onChange={handle_lang_change}
      >

        <MenuItem value={"C"}>C</MenuItem>
        <MenuItem value={"Python3"}>C++14</MenuItem>
        <MenuItem value={"Python8"}>C++17</MenuItem>
        <MenuItem value={"Python8"}>Clojure</MenuItem>

        <MenuItem value={"Python38"}>C#</MenuItem>
        <MenuItem value={"Python3"}>Go</MenuItem>
        <MenuItem value={"Python8"}>Haskell</MenuItem>
        <MenuItem value={"Python8"}>Java 8</MenuItem>

        <MenuItem value={"Python38"}>Java 14</MenuItem>
        <MenuItem value={"Python3"}>JavaScript</MenuItem>
        <MenuItem value={"Python8"}>Kotlin</MenuItem>
        <MenuItem value={"Python8"}>Objective C</MenuItem>

        <MenuItem value={"Python38"}>Pascal</MenuItem>
        <MenuItem value={"Python3"}>Perl</MenuItem>
        <MenuItem value={"Python8"}>PHP</MenuItem>
        <MenuItem value={"Python8"}>Python 2</MenuItem>

        <MenuItem value={"Python38"}>Python 3</MenuItem>
        <MenuItem value={"Python3"}>Python 3.8</MenuItem>
        <MenuItem value={"Python8"}>R</MenuItem>
        <MenuItem value={"Python8"}>Ruby</MenuItem>

        <MenuItem value={"Python38"}>Python 3</MenuItem>
        <MenuItem value={"Python3"}>Python 3.8</MenuItem>
        <MenuItem value={"Python8"}>R</MenuItem>
        <MenuItem value={"Python8"}>Ruby</MenuItem>

        <MenuItem value={"Python38"}>Rust</MenuItem>
        <MenuItem value={"Python3"}>Scala</MenuItem>
        <MenuItem value={"Python8"}>Swift</MenuItem>
        <MenuItem value={"Python8"}>TypeScript</MenuItem>

        {/* <MenuItem value={"20"}>Twenty</MenuItem>
    <MenuItem value={"30"}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  </Box>
  )
}

export default Language_Select
