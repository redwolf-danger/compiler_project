import express from "express"
const app = express();
import cors from "cors";
const port = 3000;

// app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
  res.json({message: 'Hello World! Hi'});
})


app.post('/coderesult',(req,res)=>{
  console.log('result is ', res);
  res.send("ok");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})