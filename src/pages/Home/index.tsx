import { lazy, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutContent from '../../content/AboutContent.json';
import ContactContent from '../../content/ContactContent.json';
import CurriculumContent from '../../content/CurriculumContent.json';
import IntroContent from '../../content/IntroContent.json';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
import MissionContent from '../../content/MissionContent.json';

const Contact = lazy(() => import('../../components/ContactForm'));
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));

const Home = () => {
	const location = useLocation();

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const scrollTo = params.get('scrollTo');
		if (scrollTo) {
			window.onload = () => {
				const element = document.getElementById(scrollTo) as HTMLDivElement;
				element.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				});
			};
		}
	}, [location.search]);

	return (
		<Container>
			<ScrollToTop />
			<ContentBlock
				type="right"
				title={IntroContent.title}
				content={IntroContent.text}
				button={IntroContent.button}
				icon="developer.svg"
				id="intro"
			/>
			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				id="middle"
			/>
			<ContentBlock
				type="right"
				title={MissionContent.title}
				content={MissionContent.text}
				icon="product-launch.svg"
				id="mission"
			/>
			<ContentBlock
				type="left"
				title={AboutContent.title}
				content={AboutContent.text}
				section={AboutContent.section}
				icon="graphs.svg"
				id="about"
			/>
			<ContentBlock
				type="right"
				title={CurriculumContent.title}
				content={CurriculumContent.text}
				button={CurriculumContent.button}
				icon="waving.svg"
				id="curriculum"
			/>
			<Contact
				title={ContactContent.title}
				content={ContactContent.text}
				id="contact"
			/>
		</Container>
	);
};

export default Home;
