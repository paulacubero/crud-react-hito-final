import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

const navigation = [
	{ name: 'Home', href: '/home', current: true },
	{ name: 'Añadir', href: '/add', current: false },
	{ name: 'Registro', href: '/update', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
	return (
		<Disclosure as='nav' className='bg-gray-800'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
								<div className='hidden sm:ml-6 sm:block'>
									<div className='flex space-x-4'>
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current
														? 'bg-gray-900 text-white'
														: 'text-gray-300 hover:bg-gray-700 hover:text-white',
													'rounded-md px-3 py-2 text-sm font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
}
