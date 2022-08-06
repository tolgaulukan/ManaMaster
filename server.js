const express = require('express');

const port = process.env.PORT || 3002;
const app = express();

app.use(express.static('./client/build'))
app.use(express.json())

/* final catch-all route to index.html defined last */
 app.get('/*', (req, res) => {
   res.sendFile(__dirname + '/client/build/index.html');
})

app.listen(port, () => {
  console.log(`server listening on port: ${port}`)
}); 