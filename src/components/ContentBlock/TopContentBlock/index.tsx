import { Col, Row } from 'antd';
import { Slide } from 'react-awesome-reveal';
import { withTranslation } from 'react-i18next';
import { SvgIcon } from '../../../common/SvgIcon';
import { ContentBlockProps } from '../types';
import { Content, ContentWrapper, TopContentSection } from './styles';

const TopContentBlock = ({
	icon,
	title,
	content,
	section,
	t,
	id,
}: ContentBlockProps) => {
	return (
		<TopContentSection>
			<Slide direction="up">
				<Row justify="center" align="middle" id={id}>
					<ContentWrapper>
						<Col lg={24} md={24} sm={24} xs={24}>
							<h6>{t(title)}</h6>
							<Row justify="center" align="middle">
								<SvgIcon src={icon} width="75%" height="75%" />
							</Row>
							<Content>{t(content)}</Content>
						</Col>
					</ContentWrapper>
				</Row>
			</Slide>
		</TopContentSection>
	);
};

export default withTranslation()(TopContentBlock);
