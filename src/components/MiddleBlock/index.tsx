import { Col, Row } from 'antd';
import { Slide } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import { Content, ContentWrapper, MiddleBlockSection } from './styles';

interface MiddleBlockProps {
	title: string;
	content: string;
	button: string;
	t: any;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
	const scrollTo = (id: string) => {
		const element = document.getElementById(id) as HTMLDivElement;
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	};
	return (
		<MiddleBlockSection>
			<Slide direction="up">
				<Row justify="center" align="middle">
					<ContentWrapper>
						<Col lg={24} md={24} sm={24} xs={24}>
							<h6>{t(title)}</h6>
							<Content>{t(content)}</Content>
							{button && (
								<Button name="submit" onClick={() => scrollTo('about')}>
									{t(button)}
								</Button>
							)}
						</Col>
					</ContentWrapper>
				</Row>
			</Slide>
		</MiddleBlockSection>
	);
};

export default withTranslation()(MiddleBlock);
