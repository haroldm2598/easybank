import Header from './header/Index';
import Hero from './body/FirstSection';
import Cta from './body/SecondSection';
import Article from './body/ThirdSection';
import Footer from './footer/Index';

function Index() {
	return (
		<>
			<Header />
			<Hero />
			<Cta />
			<Article />
			<Footer />
		</>
	);
}

export default Index;
