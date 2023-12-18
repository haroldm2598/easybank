import { useSelector } from 'react-redux';
import { FaBars } from 'react-icons/fa';

import EasyBankLogo from '../../assets/images/logo.svg';
import Button from '../../components/Button';

function Index() {
	const { navLinks } = useSelector((state) => state.dataTemplate);

	return (
		<header className='px-10 md:px-32 py-4 md:py-8 flex flex-row justify-between items-center relative z-50 bg-white'>
			{/* Logo */}
			<div>
				<img src={EasyBankLogo} alt='Easy Bank Logo' />
			</div>

			{/* navlinks */}
			<nav className='hidden lg:flex'>
				<ul className='flex md:flex-row gap-8'>
					{navLinks?.map((item, index) => (
						<li key={index} className='navLinks navGrow'>
							{item}
						</li>
					))}
				</ul>
			</nav>

			{/* Button */}
			<div className='hidden lg:flex'>
				<Button name='Request Invite' />
			</div>

			<div className='dropdown dropdown-end lg:hidden'>
				<div tabIndex={0} role='button' className='btn btn-ghost'>
					<FaBars size={40} />
				</div>
				<ul
					tabIndex={0}
					className='menu menu-sm dropdown-content mt-3 z-[1] p-2 text-center shadow bg-base-100 rounded-box w-96'
				>
					{navLinks?.map((item, index) => (
						<li key={index} className='navLinks my-5'>
							{item}
						</li>
					))}
				</ul>
			</div>
		</header>
	);
}

export default Index;
