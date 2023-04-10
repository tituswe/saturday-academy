import { Col, Row } from 'antd';
import { Fade } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Button } from '../../../common/Button';
import { SvgIcon } from '../../../common/SvgIcon';
import { ContentBlockProps } from '../types';
import {
	ButtonWrapper,
	Content,
	ContentWrapper,
	RightBlockContainer,
} from './styles';

const RightBlock = ({
	title,
	content,
	button,
	icon,
	t,
	id,
}: ContentBlockProps) => {
	const scrollTo = (id: string) => {
		const element = document.getElementById(id) as HTMLDivElement;
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
		});
	};

	const history = useHistory();
	const navigateTo = (url: string) => {
		history.push(url);
	};

	const goTo = (type: string, id: string) => {
		if (type === 'scroll') {
			scrollTo(id);
		} else if (type === 'navigate') {
			navigateTo(id);
		}
	};

	return (
		<RightBlockContainer>
			<Fade direction="right">
				<Row justify="space-between" align="middle" id={id}>
					<Col lg={11} md={11} sm={11} xs={24}>
						<ContentWrapper>
							<h6>{t(title)}</h6>
							<Content>{t(content)}</Content>
							<ButtonWrapper>
								{typeof button === 'object' &&
									button.map((item: any, id: number) => {
										return (
											<Button
												key={id}
												color={item.color}
												fixedWidth={true}
												// onClick={() => scrollTo(item.content)}
												onClick={() => goTo(item.type, item.content)}
											>
												{t(item.title)}
											</Button>
										);
									})}
							</ButtonWrapper>
						</ContentWrapper>
					</Col>
					<Col lg={11} md={11} sm={12} xs={24}>
						<SvgIcon src={icon} width="100%" height="100%" />
					</Col>
				</Row>
			</Fade>
		</RightBlockContainer>
	);
};

export default withTranslation()(RightBlock);
