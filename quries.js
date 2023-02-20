const { response, request } = require('express')
const { Model } = require('sequelize')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'user_divum',
  host: 'localhost',
  database: 'magesh',
  password: 'iphone$21',
  port: 5432,
})

const all_users = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
const userbyid = (request, response) => {
    id = parseInt(request.params.id)
    console.log(id);
    pool.query('SELECT * FROM users WHERE id = $1',[id], (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const postuser = (request, response) => {
    const {id,name,email} = request.body
    console.log(id);
    pool.query('INSERT INTO users(id,name,email) VALUES($1,$2,$3)RETURNING * ',[id,name,email], (error, results) => {
        if(error){
            throw error
        }
        response.send(`User Added with id:${results.rows[0].id}`)
    })
}

const updateuser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with : ${results.rows[0].id}}`)
      }
    )
  }


const deleteuser = (request,response)=> {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID : ${id}`)
    })
  }
module.exports = {
    all_users,
    userbyid,
    postuser,
    updateuser,
    deleteuser,
}