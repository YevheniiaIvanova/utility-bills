const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const path = require('path');


const PORT = 5000;
const app = express();
const fileName = path.join(__dirname, 'bills.json');


app.use(cors());
app.use(cookieParser());
app.use(bodyParser());



app.get('/api/data-bills', (request, response) => {  
  fs.readFile(fileName, 'utf-8', (err, content) => {
    response.json({"data": JSON.parse(content)});
  });
});

app.post('/api/data-bills', (request, response) => {
  const dataBills = request.body.data;
  
  for (const bill of dataBills) {
    const keys = Object.keys(bill);
    const isValid = keys.includes('title') && keys.includes('tariff') && keys.length === 2;
    if (!isValid) {
      response.statusCode = 400;
      response.json({"error": "Invalid Data"});
      return;  
    }
  }


  fs.writeFile(fileName, JSON.stringify(dataBills), (err, content) => {
    if(err) {
      response.statusCode = 500;
      response.json({"error": "Server Error"});
      console.log(err);
    } else {
      response.send();
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});