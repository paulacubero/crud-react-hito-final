import Axios from 'axios';
import { useEffect, useState } from 'react';

function Add() {
	const [nombre, setNombre] = useState('');
	const [apellidos, setApellidos] = useState('');
	const [edad, setEdad] = useState(0);
	const [curso, setCurso] = useState('');
	const [id, setId] = useState();

	const [editar, setEditar] = useState('false');

	const [alumnosList, setAlumnos] = useState([]);

	const getAlumnos = () => {
		Axios.get('http://localhost:3001/alumnos').then((response) => {
			setAlumnos(response.data);
		});
	};

	const add = () => {
		Axios.post('http://localhost:3001/create', {
			nombre: nombre,
			apellidos: apellidos,
			edad: edad,
			curso: curso,
		}).then(() => {
			getAlumnos();
			limpiarCampos();
		});
	};

	const update = () => {
		Axios.put('http://localhost:3001/update', {
			id: id,
			nombre: nombre,
			apellidos: apellidos,
			edad: edad,
			curso: curso,
		}).then(() => {
			getAlumnos();
			limpiarCampos();
		});
	};

	const deleteAlumno = (id) => {
		Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
			getAlumnos();
			limpiarCampos();
		});
	};

	const limpiarCampos = () => {
		setNombre('');
		setApellidos('');
		setEdad('');
		setCurso('');
		setEditar(false);
	};

	const editarAlumno = (val) => {
		setEditar(true);
		setNombre(val.nombre);
		setApellidos(val.apellidos);
		setEdad(val.edad);
		setCurso(val.curso);
		setId(val.id);
	};

	useEffect(() => {
		getAlumnos();
	}, []);

	return (
		<div className='container'>
			<div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='nombre'>
						Nombre:
					</label>
					<input
						type='text'
						onChange={(event) => {
							setNombre(event.target.value);
						}}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={nombre}
						placeholder='Nombre del alumno'
						id='nombre'
					/>
				</div>

				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='apellidos'>
						Apellidos:
					</label>
					<input
						type='text'
						onChange={(event) => {
							setApellidos(event.target.value);
						}}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={apellidos}
						placeholder='Apellidos del alumno'
						id='apellidos'
					/>
				</div>

				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='edad'>
						Edad:
					</label>
					<input
						type='number'
						onChange={(event) => {
							setEdad(event.target.value);
						}}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={edad}
						placeholder='Edad del alumno'
						id='edad'
					/>
				</div>

				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='curso'>
						Curso:
					</label>
					<input
						type='text'
						onChange={(event) => {
							setCurso(event.target.value);
						}}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						value={curso}
						placeholder='Curso del alumno'
						id='curso'
					/>
				</div>

				<div className='flex items-center justify-between'>
					{editar ? (
						<div>
							<button
								className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
								onClick={update}>
								Actualizar
							</button>
							<button
								className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
								onClick={limpiarCampos}>
								Cancelar
							</button>
						</div>
					) : (
						<button
							className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
							onClick={add}>
							Registrar
						</button>
					)}
				</div>
			</div>

			<table className='table-auto w-full'>
				<thead>
					<tr>
						<th className='px-4 py-2'>#</th>
						<th className='px-4 py-2'>Nombre</th>
						<th className='px-4 py-2'>Apellidos</th>
						<th className='px-4 py-2'>Edad</th>
						<th className='px-4 py-2'>Curso</th>
						<th className='px-4 py-2'>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{alumnosList.map((val, key) => {
						return (
							<tr key={val.id}>
								<td className='border px-4 py-2'>{val.id}</td>
								<td className='border px-4 py-2'>{val.nombre}</td>
								<td className='border px-4 py-2'>{val.apellidos}</td>
								<td className='border px-4 py-2'>{val.edad}</td>
								<td className='border px-4 py-2'>{val.curso}</td>
								<td className='border px-4 py-2'>
									<button
										type='button'
										onClick={() => {
											editarAlumno(val);
										}}
										className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>
										Editar
									</button>
									<button
										type='button'
										onClick={() => {
											deleteAlumno(val.id);
										}}
										className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
										Eliminar
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Add;
