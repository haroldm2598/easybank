import { useSelector } from 'react-redux';

function SecondSection() {
	const { ctaData } = useSelector((state) => state.dataTemplate);

	return (
		<main className='cta h-full p-10 md:px-32 md:py-16'>
			<section className='md:w-[40rem] md:my-4 md:[&>*]:my-10'>
				<h1 className='text-4xl text-center md:text-start'>
					Why choose Easybank?
				</h1>
				<p className='text-lg text-center md:text-start opacity-70'>
					We leverage Open Banking to turn your bank account into your financial
					hub. Control your finances like never before.
				</p>
			</section>

			<section className='my-10 flex flex-col md:flex-row gap-2'>
				{ctaData?.map((item, index) => (
					<div
						key={index}
						className='flex flex-col items-center md:items-start gap-4'
					>
						<div>
							<img src={item.image} alt={item.title} />
						</div>

						<h1 className='text-xl'>{item.title}</h1>
						<p className='text-center md:text-start opacity-60'>
							{item.article}
						</p>
					</div>
				))}
			</section>
		</main>
	);
}

export default SecondSection;
