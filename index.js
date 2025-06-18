const Config  = require('./config')
const sql = require('mssql')
const express = require('express')
const app = express()
const UserRequest = require('./Common/Api/UserRequest')

const port = 4000
app.use('/user',UserRequest)


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
// const db = async () => {
//  try {
//   // make sure that any items are correctly URL encoded in the connection string
//   const DbConnect = await sql.connect(Config)
// const result = await sql.query`select * from FACADE_Users`
// console.log("DbConnect", DbConnect)
//  } catch (err) {
//     console.log("db error", err);
//   // ... error checks
//  }
// }
// db()