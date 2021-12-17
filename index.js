const express = require('express'); 
const app = express();
const port = 8080;

const productos = require('./routes/products.js');

//Estaticos
app.use(express.static(__dirname + '/public'));

app.use ("/productos", productos);


 app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});