const express = require('express');
const pg = require('pg')

const sessionRouter = require('./controllers/session')

const port = process.env.PORT || 3002;
const app = express();

app.use(express.static('./client/build'))
app.use(express.json())

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
// use routers
app.use('/', sessionsRouter)

app.use((req, res, next) => {
  console.log(`I am middleware! Request ${req.path}`)
  next()
})

app.listen(port, () => {
  console.log(`server listening on port: ${port}`)
});