import imagen from '../assets/img/home.png';
function Home() {
	return (
		<div
			className='bg-cover bg-center h-screen flex items-center justify-center'
			style={{ backgroundImage: `url(${imagen})` }}>
			<div className='text-black text-center'>
				<h1 className='text-4xl font-bold mb-4'>
					Bienvenido al sistema de registro de los alumnos
				</h1>
			</div>
		</div>
	);
}

export default Home;
