const express = require('express');

const port = process.env.PORT || 3002;
const app = express();

app.use(express.static('./client/build'))
app.use(express.json())


app.use((req, res, next) => {
  console.log(`I am middleware! Request ${req.path}`)
  next()
})

app.listen(port, () => {
  console.log(`server listening on port: ${port}`)
}); 