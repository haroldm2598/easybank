import { Fragment } from 'react';
import { useSelector } from 'react-redux';

function ThirdSection() {
	const { articleData } = useSelector((state) => state.dataTemplate);
	return (
		<article className='article h-full mb-10 p-10 md:px-32 md:py-16'>
			<h1 className='my-10 text-4xl'>Latest Articles</h1>

			<section className='flex flex-col md:flex-row gap-8'>
				{articleData?.map((item, index) => (
					<Fragment key={index}>
						<div className='card w-full md:w-96 bg-base-100 rounded-md shadow-xl'>
							<figure className='h-52'>
								<img
									className='h-full w-full'
									src={item.image}
									alt={item.title}
								/>
							</figure>
							<div className='card-body'>
								<h6 className='text-sm opacity-75'>{item.author}</h6>
								<h2 className='card-title article__content--title font-normal'>
									{item.title}
								</h2>
								<p className='opacity-50'>{item.article}</p>
							</div>
						</div>
					</Fragment>
				))}
			</section>
		</article>
	);
}

export default ThirdSection;
