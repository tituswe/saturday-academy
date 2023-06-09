import { lazy, useEffect } from 'react';
import SyllabusContent from '../../content/SyllabusContent.json';

const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const Container = lazy(() => import('../../common/Container'));
const SyllabusList = lazy(
	() => import('../../components/Syllabus/SyllabusList')
);

const Syllabus = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Container>
			<ContentBlock
				type="left"
				title={SyllabusContent.title}
				content={SyllabusContent.text}
				icon="developer.svg"
				id="intro"
			/>
			<SyllabusList />
		</Container>
	);
};

export default Syllabus;
