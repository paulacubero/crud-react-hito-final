import Axios from 'axios'
import { useState } from 'react'

function Add() {
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [edad, setEdad] = useState()
  const [curso, setCurso] = useState('')

  const update = () => {
    Axios.post('http://localhost:3001/api/alumno', {
      nombre,
      apellidos,
      edad,
      curso,
    })
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <form className='w-full max-w-lg'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='nombre'
            >
              Nombre
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='nombre'
              type='text'
              placeholder='Nombre'
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='apellidos'
            >
              Apellidos
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='apellidos'
              type='text'
              placeholder='Apellidos'
              value={apellidos}
              onChange={e => setApellidos(e.target.value)}
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='edad'
            >
              Edad
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='edad'
              type='number'
              placeholder='Edad'
              value={edad}
              onChange={e => setEdad(e.target.value)}
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='curso'
            >
              Curso
            </label>
            <div className='relative'>
              <select
                className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                id='curso'
                value={curso}
                onChange={e => setCurso(e.target.value)}
              >
                <option>1º ESO</option>
                <option>2º ESO</option>
                <option>3º ESO</option>
                <option>4º ESO</option>
                <option>1º Bachillerato</option>
                <option>2º Bachillerato</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                <svg
                  className='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M11.95 7.95a.5.5 0 010 .7l-3 3a.5.5 0 01-.7 0l-3-3a.5.5 0 11.7-.7L8 10.79l2.65-2.64a.5.5 0 01.7 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap -mx-3 mb-2'>
          <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              type='button'
              onClick={update}
            >
              Insertar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Add
