import { Col, Row } from 'antd';
import { Slide } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import { Button } from '../../../common/Button';
import { SvgIcon } from '../../../common/SvgIcon';
import { ContentBlockProps } from '../types';
import {
	ButtonWrapper,
	Content,
	ContentWrapper,
	TopContentSection,
} from './styles';

const TopContentBlock = ({
	icon,
	title,
	content,
	button,
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
	return (
		<TopContentSection>
			<Slide direction="up">
				<Row justify="center" align="middle" id={id}>
					<ContentWrapper>
						<Col lg={24} md={24} sm={24} xs={24}>
							<h6>{t(title)}</h6>
							<Row justify="center" align="middle">
								<SvgIcon src={icon} width="50%" height="50%" />
							</Row>
							<Content>{t(content)}</Content>
							<ButtonWrapper>
								{typeof button === 'object' &&
									button.map((item: any, id: number) => {
										return (
											<Button
												key={id}
												color={item.color}
												fixedWidth={true}
												onClick={() => scrollTo(item.content)}
											>
												{t(item.title)}
											</Button>
										);
									})}
							</ButtonWrapper>
						</Col>
					</ContentWrapper>
				</Row>
			</Slide>
		</TopContentSection>
	);
};

export default withTranslation()(TopContentBlock);
