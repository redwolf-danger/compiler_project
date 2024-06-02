
// import React from "react";
// import { useForm } from 'react-hook-form';
import { useForm} from "react-hook-form";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import {React,useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";

const Code_space = ({ submit_to_API }) => {
  let {code_language, set_code_language} = useState("Python");
  console.log(code_language);
  const { register, handleSubmit } = useForm();
  

  const onsubmit = (data)=>{
    console.log(data);
    console.log("calling submit_to API");
    submit_to_API(data.code_area);
  };

  function handle_lang_change(event){
    console.log("prev language is ", code_language)
    console.log("setting language as ", event.target.value)
    set_code_language(()=>event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <textarea {...register("code_area")} cols="30" rows="10"></textarea>
        <input
          {...register("lang")}
          placeholder="language"
          type="text"
          name="lang"
          id="lang"
        />

        {/*todo opens */}

        <Box sx={{ maxWidth: 90, minHeight: 20 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>

            <Select
              defaultValue=""
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={code_language}
              label="Age"
              onChange={handle_lang_change}
            >
              <MenuItem value={"Python38"}>Ten</MenuItem>
              <MenuItem value={"Python3"}>Three</MenuItem>
              <MenuItem value={"Python8"}>Two</MenuItem>

              {/* <MenuItem value={"20"}>Twenty</MenuItem>
          <MenuItem value={"30"}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        </Box>

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
