import { lazy, useEffect } from 'react';
import CurriculumContent from '../../content/CurriculumContent.json';

const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));

const Curriculum = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container>
			<ContentBlock
				type="left"
				title={CurriculumContent.title}
				content={CurriculumContent.text}
				icon="developer.svg"
				id="intro"
			/>
		</Container>
	);
};

export default Curriculum;
