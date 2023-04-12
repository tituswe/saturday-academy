import styled from 'styled-components';

export const CardSection = styled('div')`
	position: relative;
	padding: 2rem 0 2rem;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1024px) {
		padding: 5.5rem 0 3rem;
	}
`;

export const Index = styled('h3')`
	font-size: 4rem;
	text-align: justify;
`;

export const Title = styled('h3')`
	font-size: 2rem;
	text-align: justify;
`;

export const Content = styled('p')`
	font-size: 1rem;
	text-align: justify;
`;
