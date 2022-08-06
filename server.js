const express = require('express');

const port = process.env.PORT || 3002;
const app = express();

app.use(express.static('./client/build'))
app.use(express.json())

/* final catch-all route to index.html defined last */
server.get('/*', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html');
})

app.use((req, res, next) => {
  console.log(`I am middleware! Request ${req.path}`)
  next()
})

app.listen(port, () => {
  console.log(`server listening on port: ${port}`)
}); 