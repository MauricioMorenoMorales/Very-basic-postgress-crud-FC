require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	password: process.env.DBPASSWORD,
	database: 'library',
})

const getBooks = async () => {
	try {
		const response = await pool.query('select * from books')
		console.log(response.rows)
		pool.end()
	} catch (err) {
		console.log(err)
	}
}

const insertUser = async () => {
	try {
		const text = 'INSERT INTO users(username, password) VALUES($1, $2)'
		const values = ['john', 'john1234']
		const response = await pool.query(text, values)
		console.log(response)
		pool.end()
	} catch (err) {
		console.log(err)
	}
}

const deleteUser = async () => {
	const text = 'DELETE FROM users WHERE username = $1'
	const value = ['john']
	const response = await pool.query(text, value)
	console.log(response)
}

const editUser = async () => {
	const text = 'UPDATE users SET username = $1 WHERE username = $2'
	const values = ['joel', 'joe']
	const response = await pool.query(text, values)
	console.log(response)
}

editUser()
