const express = require('express');
const pg = require('pg')

const port = process.env.PORT || 3002;
const app = express();

app.use(express.static('./client/build'))

let db;
if (process.env.NODE_ENV === 'production') {
  db = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
} else {
  db = new pg.Pool({
    database: 'my_local_database_name',
    password: 'optional_password' // If you have a password on your local db
  })
}

app.get('/', (req, res) => {
  res.send('hello')
});

app.listen(port, () => {
  console.log(`server listening on port: ${port}`)
});