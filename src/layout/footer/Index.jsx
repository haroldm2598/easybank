import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Button from '../../components/Button';
import logo from '../../assets/images/logo-white.svg';

function Index() {
	const { footerLinks, footerIcons } = useSelector(
		(state) => state.dataTemplate
	);

	return (
		<footer className='footerBg p-10 md:px-32 md:py-16 flex flex-col md:flex-row  md:justify-between gap-4'>
			<section className='flex flex-col justify-between items-center md:items-start [&>*]:my-4 md:[&>*]:my-0 '>
				<img src={logo} alt='easybank logo' />

				<div className='flex gap-3'>
					{footerIcons?.map((item, index) => (
						<Fragment key={index}>
							<img src={item.image} alt='image icon' />
						</Fragment>
					))}
				</div>
			</section>

			<section className='flex flex-col items-center md:flex-row md:flex-wrap gap-4'>
				{footerLinks?.map((item, index) => (
					<Fragment key={index}>
						<div className='footerBg__links flex-grow w-[33%] text-white text-center md:text-start opacity-75'>
							{item}
						</div>
					</Fragment>
				))}
			</section>

			<section className='flex flex-col items-center md:justify-around md:items-end gap-5 md:gap-0'>
				<Button name='Request Invite' customClass='btn-outline-none' />

				<h1 className='text-white opacity-50'>
					© Easybank. All Rights Reserved
				</h1>
			</section>
		</footer>
	);
}

export default Index;
