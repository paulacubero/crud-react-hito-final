const express = require('express');
const app = express();
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const sequelize = new Sequelize('alumnos_crud', 'root', 'curso', {
	host: 'localhost',
	dialect: 'mysql',
});

const Alumno = sequelize.define('Alumno', {
	nombre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	apellidos: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	edad: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	curso: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

sequelize.sync().then(() => {
	console.log('Database synced');
});

app.post('/create', async (req, res) => {
	const { nombre, apellidos, edad, curso } = req.body;

	try {
		const alumno = await Alumno.create({ nombre, apellidos, edad, curso });
		res.send(alumno);
	} catch (err) {
		console.log(err);
		res.status(500).send('Error creating alumno');
	}
});

app.get('/alumnos', async (req, res) => {
	try {
		const alumnos = await Alumno.findAll();
		res.send(alumnos);
	} catch (err) {
		console.log(err);
		res.status(500).send('Error retrieving alumnos');
	}
});

app.post('/api/alumno', async (req, res) => {
	const { nombre, apellidos, edad, curso } = req.body;

	try {
		const alumno = await Alumno.create({ nombre, apellidos, edad, curso });
		res.send(alumno);
	} catch (err) {
		console.log(err);
		res.status(500).send('Error creating alumno');
	}
});

app.put('/update', async (req, res) => {
	const { id, nombre, apellidos, edad, curso } = req.body;

	try {
		const alumno = await Alumno.findByPk(id);
		if (alumno) {
			alumno.nombre = nombre;
			alumno.apellidos = apellidos;
			alumno.edad = edad;
			alumno.curso = curso;
			await alumno.save();
			res.send(alumno);
		} else {
			res.status(404).send('Alumno not found');
		}
	} catch (err) {
		console.log(err);
		res.status(500).send('Error updating alumno');
	}
});

app.delete('/delete/:id', async (req, res) => {
	const id = req.params['id'];

	try {
		const alumno = await Alumno.findByPk(id);
		if (alumno) {
			await alumno.destroy();
			res.send('Alumno deleted');
		} else {
			res.status(404).send('Alumno not found');
		}
	} catch (err) {
		console.log(err);
		res.status(500).send('Error deleting alumno');
	}
});

app.listen(3001, () => {
	console.log('server running on port 3001');
});
