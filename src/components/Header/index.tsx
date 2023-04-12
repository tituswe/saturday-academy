import { Col, Drawer, Row } from 'antd';
import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { Button } from '../../common/Button';
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import {
	Burger,
	CustomNavLinkSmall,
	HeaderSection,
	Label,
	LogoContainer,
	Menu,
	NotHidden,
	Outline,
	Span,
} from './styles';

const Header = ({ t }: any) => {
	const [visible, setVisibility] = useState(false);

	const showDrawer = () => {
		setVisibility(!visible);
	};

	const onClose = () => {
		setVisibility(!visible);
	};

	const MenuItem = () => {
		const scrollTo = (id: string) => {
			const currentUrl = window.location.pathname;
			if (currentUrl !== '/') {
				const urlWithQuery = `/?scrollTo=${id}`;
				window.history.pushState({}, '', urlWithQuery);
				window.location.reload();
			} else {
				const element = document.getElementById(id) as HTMLDivElement;
				element.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				});
			}
			setVisibility(false);
		};

		return (
			<>
				<CustomNavLinkSmall onClick={() => scrollTo('mission')}>
					<Span>{t('Mission')}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall onClick={() => scrollTo('about')}>
					<Span>{t('About')}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall onClick={() => scrollTo('curriculum')}>
					<Span>{t('Curriculum')}</Span>
				</CustomNavLinkSmall>
				<CustomNavLinkSmall
					style={{ width: '180px' }}
					onClick={() => scrollTo('contact')}
				>
					<Span>
						<Button>{t('Contact')}</Button>
					</Span>
				</CustomNavLinkSmall>
			</>
		);
	};

	return (
		<HeaderSection>
			<Container>
				<Row justify="space-between">
					<LogoContainer to="/" aria-label="homepage">
						<SvgIcon src="logo.svg" width="202px" height="128px" />
					</LogoContainer>
					{/* {pathname === '/' && ( */}
					<NotHidden>
						<MenuItem />
					</NotHidden>
					{/* )} */}
					<Burger onClick={showDrawer}>
						<Outline />
					</Burger>
				</Row>
				<Drawer closable={false} visible={visible} onClose={onClose}>
					<Col style={{ marginBottom: '2.5rem' }}>
						<Label onClick={onClose}>
							<Col span={12}>
								<Menu>Menu</Menu>
							</Col>
							<Col span={12}>
								<Outline />
							</Col>
						</Label>
					</Col>
					<MenuItem />
				</Drawer>
			</Container>
		</HeaderSection>
	);
};

export default withTranslation()(Header);
