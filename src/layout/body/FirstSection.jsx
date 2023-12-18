import Button from '../../components/Button';
import BgImg from '../../assets/images/image-mockups.png';

function Index() {
	return (
		<main className='hero md:h-screen flex flex-col md:flex-row'>
			{/* info */}
			<section className='order-2 md:order-1 mb-16 md:mb-0 px-10 md:pl-32 flex flex-col items-center md:items-start gap-8'>
				<h1 className='text-5xl md:text-7xl font-normal text-center md:text-left'>
					Next generation digital banking
				</h1>
				<p className='text-xl font-normal text-center md:text-start opacity-50'>
					Take your financial life online. Your Easybank account will be a
					one-stop-shop for spending, saving, budgeting, investing, and much
					more.
				</p>
				<Button name='Request Invite' />
			</section>

			{/* image and background */}
			<section className='hero__img order-1 md:order-2 mb-[5rem] lg:mb-0 relative top-[-1rem] right-0 md:top-[-5rem]  md:right-[-10rem] z-30'>
				<img
					src={BgImg}
					alt='Mock ups'
					className='absolute top-[-8rem] md:top-[0] md:right-[2rem] z-30'
				/>
			</section>
		</main>
	);
}

export default Index;
